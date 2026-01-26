import React, { useState, useEffect, useRef } from 'react';
import { api } from '@/services/api';
import { WorkingBookCard } from '@/components/WorkingBookCard';
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/InlineComponents';
import { Search, BookOpen } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { DUMMY_BOOKS } from '@/data/dummyData';

const Discover = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [loading, setLoading] = useState(true);
  const debounceTimer = useRef(null);

  useEffect(() => {
    // Read search param from URL
    const urlSearch = searchParams.get('search');
    if (urlSearch && urlSearch !== searchTerm) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    // Debounce search requests to reduce API calls
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    
    debounceTimer.current = setTimeout(() => {
      fetchBooks();
    }, 300);
    
    return () => clearTimeout(debounceTimer.current);
  }, [searchTerm, selectedGenre, sortBy]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const params = {
        search: searchTerm && searchTerm.trim() ? searchTerm : undefined,
        genre: selectedGenre !== 'all' ? selectedGenre : undefined,
        sort: sortBy,
      };
      
      const result = await api.books.getAll(params);
      if (result.data?.data && Array.isArray(result.data.data) && result.data.data.length > 0) {
        // Handle MongoDB _id -> id conversion
        const booksWithId = result.data.data.map(book => ({
          ...book,
          id: book._id || book.id,
        }));
        setBooks(booksWithId);
      } else {
        // Use dummy books when no books are found
        console.log('Using dummy books as no API books found');
        setBooks(DUMMY_BOOKS);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      // Use dummy books as fallback
      setBooks(DUMMY_BOOKS);
    } finally {
      setLoading(false);
    }
  };

  const getAllGenres = () => {
    const genres = new Set();
    books.forEach(book => {
      if (book.genres) {
        book.genres.forEach(genre => genres.add(genre));
      }
    });
    return Array.from(genres).sort();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-amber-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Books</h1>
          <p className="text-xl text-gray-600">Find your next great read</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search by title or author..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  {getAllGenres().map(genre => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="author">Author</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {books && books.length > 0 ? (
            books.map((book) => (
              <WorkingBookCard 
                key={book.id || book._id} 
                book={{
                  id: book.id || book._id,
                  title: book.title || 'Untitled',
                  author: book.author || 'Unknown',
                  rating: book.average_rating || 0,
                  cover: book.cover_url || 'https://via.placeholder.com/300x400?text=No+Cover',
                  genres: book.genres || [],
                  description: book.description || ''
                }} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No books found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
