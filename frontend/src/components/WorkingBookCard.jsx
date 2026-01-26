import React, { useState } from 'react';
import { Card, CardContent, Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Textarea, Label } from '@/components/InlineComponents';
import { Star, Plus, BookOpen, Heart, ShoppingCart } from 'lucide-react';
import { useBookActions } from '@/hooks/useBookActions';
import { useToast } from '@/hooks/use-toast';

export const WorkingBookCard = ({ book }) => {
  const { addToBooks, addReview, loading } = useBookActions();
  const { toast } = useToast();
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [selectedRating, setSelectedRating] = useState(5);

  const handleBuyNow = () => {
    try {
      // Open a link to buy the book
      const bookSearchUrl = `https://www.bookdepository.com/search?searchTerm=${encodeURIComponent(book.title + ' ' + (book.author || ''))}`;
      window.open(bookSearchUrl, '_blank');
      toast({
        title: "Opening Book Store",
        description: "Finding the best prices for you..."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open book store",
        variant: "destructive"
      });
    }
  };

  const handleAddToReading = () => {
    addToBooks(book.id, 'reading');
  };

  const handleAddToWantToRead = () => {
    addToBooks(book.id, 'want_to_read');
  };

  const handleMarkAsRead = () => {
    addToBooks(book.id, 'read');
  };

  const handleSubmitReview = () => {
    addReview(book.id, selectedRating, reviewText);
    setShowReviewDialog(false);
    setReviewText('');
    setSelectedRating(5);
  };

  const renderStars = (rating, interactive = false, onRatingChange) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-amber-400' : ''}`}
        onClick={interactive && onRatingChange ? () => onRatingChange(i + 1) : undefined}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col bg-white border border-gray-100 hover:border-amber-200 rounded-2xl">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.cover || 'https://via.placeholder.com/300x400?text=No+Cover'}
          alt={book.title || 'Book Cover'}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=No+Cover'; }}
        />
      </div>
      <CardContent className="p-4 sm:p-5 flex-grow flex flex-col justify-between"  style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2 text-gray-900 group-hover:text-amber-600 transition-colors" title={book.title}>{book.title || 'Unknown Title'}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 truncate" title={book.author}>{book.author || 'Unknown Author'}</p>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2 gap-0.5">
            {renderStars(Math.round(book.rating || 0))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">{(book.rating || 0).toFixed(1)}</span>
        </div>

        {book.genres && book.genres.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {book.genres.slice(0, 2).map((genre, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs rounded-full truncate font-medium border border-amber-200"
                title={genre}
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2 mt-auto w-full">
          <button
            onClick={handleBuyNow}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={handleAddToWantToRead}
              disabled={loading}
              className="flex-1 border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 hover:bg-amber-50 font-medium py-2 px-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 text-xs sm:text-sm disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Want</span>
            </button>
            
            <button
              onClick={handleMarkAsRead}
              disabled={loading}
              className="flex-1 border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium py-2 px-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 text-xs sm:text-sm disabled:opacity-50"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Read</span>
            </button>
          </div>

          <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
            <DialogTrigger asChild>
              <button className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 font-medium py-2 px-3 rounded-lg transition-all duration-300 text-sm">
                Write Review
              </button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl">
              <DialogHeader>
                <DialogTitle>Write a Review</DialogTitle>
                <DialogDescription>
                  Share your thoughts about "{book.title}"
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Rating</Label>
                  <div className="flex mt-2 gap-1">
                    {renderStars(selectedRating, true, setSelectedRating)}
                  </div>
                </div>
                <div>
                  <Label htmlFor="review">Review (Optional)</Label>
                  <Textarea
                    id="review"
                    placeholder="What did you think of this book?"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="mt-2 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSubmitReview}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    Submit Review
                  </button>
                  <button
                    onClick={() => setShowReviewDialog(false)}
                    className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};
