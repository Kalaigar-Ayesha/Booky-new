import React, { useState, useEffect } from 'react';
import { BookCard } from './BookCard';
import { api } from '@/services/api';
import { Button } from '@/components/InlineComponents';
import { useNavigate } from 'react-router-dom';
import { DUMMY_BOOKS } from '@/data/dummyData';

export const BookGrid = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrendingBooks();
  }, []);

  const fetchTrendingBooks = async () => {
    try {
      const result = await api.books.getAll({ sort: 'rating' });
      if (result.data?.data && result.data.data.length > 0) {
        // Get top 6 books by rating and convert _id to id
        const topBooks = result.data.data
          .slice(0, 6)
          .map(book => ({
            ...book,
            id: book._id || book.id
          }));
        setBooks(topBooks);
      } else {
        // Use dummy books as fallback
        setBooks(DUMMY_BOOKS.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      // Use dummy books as fallback
      setBooks(DUMMY_BOOKS.slice(0, 6));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Trending Books</h2>
            <p className="text-base sm:text-lg text-gray-600">Discover what the community is reading right now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4 animate-pulse border border-gray-100">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Trending Books</h2>
          <p className="text-base sm:text-lg text-gray-600">Discover what the community is reading right now</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {books.map((book) => (
            <BookCard 
              key={book.id || book._id} 
              book={{
                id: book.id || book._id,
                title: book.title,
                author: book.author,
                rating: book.average_rating,
                reviews: 0,
                cover: book.cover_url,
                status: 'trending'
              }} 
            />
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};
