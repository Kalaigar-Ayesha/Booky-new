import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-7 w-7 text-amber-600" />
              <Link to="/" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                Booky
              </Link>
            </div>
            <p className="text-sm text-gray-600">A simple place to track, discover and discuss books you love.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Explore</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <Link to="/discover" className="hover:text-amber-600 transition-colors">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="/lists" className="hover:text-amber-600 transition-colors">
                    Lists
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-amber-600 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Account</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <Link to="/my-books" className="hover:text-amber-600 transition-colors">
                    My Books
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-amber-600 transition-colors">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="hover:text-amber-600 transition-colors">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Resources</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#help" className="hover:text-amber-600 transition-colors">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-amber-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-amber-600 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {currentYear} Booky — Made with ❤️</p>
          <div className="flex items-center space-x-4">
            <a href="#twitter" className="hover:text-amber-600 transition-colors">
              Twitter
            </a>
            <a href="#github" className="hover:text-amber-600 transition-colors">
              GitHub
            </a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
