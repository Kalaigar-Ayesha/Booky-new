import React from 'react';
import { Button } from '@/components/InlineComponents';
import { BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartJourney = () => {
    if (user) {
      navigate('/my-books');
    } else {
      navigate('/auth');
    }
  };

  const handleExploreBooks = () => {
    navigate('/discover');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 sm:py-20 px-3 sm:px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="flex items-center space-x-2 rounded-full bg-amber-100/80 backdrop-blur-sm px-4 py-2 text-amber-700 border border-amber-200 hover:border-amber-300 transition-colors duration-300">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium">✨ Join thousands of book lovers</span>
          </div>
        </div>
        
        <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient">
            Booky
          </span>
        </h1>
        
        <p className="mb-8 text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
          Track your reading journey, discover captivating books, share authentic reviews, and connect with a vibrant community of literature enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 px-2">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={handleStartJourney}
          >
            {user ? 'Go to My Books' : 'Start Reading Journey'}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300"
            onClick={handleExploreBooks}
          >
            Explore Books
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-amber-200 hover:shadow-lg hover:bg-white/80 transition-all duration-300 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-7 sm:h-8 w-7 sm:w-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Track Reading</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">Mark books as read, currently reading, or want to read. Build your perfect library.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-red-200 hover:shadow-lg hover:bg-white/80 transition-all duration-300 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
              <Star className="h-7 sm:h-8 w-7 sm:w-8 text-red-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Rate & Review</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">Share your thoughts with detailed reviews. Help others discover their next favorite.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-orange-200 hover:shadow-lg hover:bg-white/80 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
              <Users className="h-7 sm:h-8 w-7 sm:w-8 text-orange-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Connect & Discover</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">Follow readers, explore trending books, and find your literary tribe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
