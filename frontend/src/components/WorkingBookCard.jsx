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
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col bg-white border border-gray-200">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.cover || 'https://via.placeholder.com/300x400?text=No+Cover'}
          alt={book.title || 'Book Cover'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=No+Cover'; }}
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col justify-between"  style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="font-semibold text-base mb-1 line-clamp-2 text-gray-900" title={book.title}>{book.title || 'Unknown Title'}</h3>
        <p className="text-gray-600 text-sm mb-2 truncate" title={book.author}>{book.author || 'Unknown Author'}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars(Math.round(book.rating || 0))}
          </div>
          <span className="text-sm text-gray-600">{(book.rating || 0).toFixed(1)}</span>
        </div>

        {book.genres && book.genres.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {book.genres.slice(0, 2).map((genre, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full truncate"
                title={genre}
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2 mt-auto w-full">
          <Button
            onClick={handleBuyNow}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Now
          </Button>
          
          <div className="flex space-x-2">
            <Button
              onClick={handleAddToWantToRead}
              disabled={loading}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Plus className="h-4 w-4 mr-1" />
              Want to Read
            </Button>
            
            <Button
              onClick={handleMarkAsRead}
              disabled={loading}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Heart className="h-4 w-4 mr-1" />
              Mark as Read
            </Button>
          </div>

          <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="w-full">
                Write Review
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Write a Review</DialogTitle>
                <DialogDescription>
                  Share your thoughts about "{book.title}"
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Rating</Label>
                  <div className="flex mt-2">
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
                    className="mt-2"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSubmitReview}
                    disabled={loading}
                    className="bg-amber-600 hover:bg-amber-700 flex-1"
                  >
                    Submit Review
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowReviewDialog(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};
