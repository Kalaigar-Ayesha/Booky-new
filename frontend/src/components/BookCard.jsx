import React from 'react';
import { Star, BookOpen, Users } from 'lucide-react';

export const BookCard = ({ book }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'trending': return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
      case 'new': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'popular': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'bestseller': return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200 h-full flex flex-col">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(book.status)} shadow-lg backdrop-blur-sm`}>
            {book.status?.charAt(0).toUpperCase() + (book.status?.slice(1) || '')}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <BookOpen className="h-5 w-5 text-gray-700" />
            </button>
            <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <Star className="h-5 w-5 text-amber-500" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">{book.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-1">by {book.author}</p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(book.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">{book.rating?.toFixed(1) || '0'}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Users className="h-4 w-4" />
            <span>{book.reviews || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
