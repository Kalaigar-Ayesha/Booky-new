import React from 'react';
import { Button, Avatar, AvatarFallback, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/InlineComponents';
import { BookOpen, User, Bell, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const navigationItems = [
    { label: 'Discover', href: '/discover' },
    { label: 'My Books', href: '/my-books' },
    { label: 'Lists', href: '/lists' },
    { label: 'Community', href: '/community' },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'border-b border-gray-200 shadow-md' : 'border-b border-gray-100'
    }`}>
      <div className="container mx-auto max-w-6xl px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-14">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 group-hover:shadow-lg transition-all duration-300">
                <BookOpen className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 hidden xs:inline">Booky</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hidden sm:inline-flex p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Notifications"
                >
                  <Bell className="h-5 w-5 text-gray-700" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
                        <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white font-semibold text-sm">
                          {user.username?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="px-4 py-3 border-b bg-gray-50">
                      <p className="text-sm font-semibold text-gray-900">{user.username || user.email?.split('@')[0]}</p>
                      <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                    </div>
                    <DropdownMenuItem onClick={() => navigate('/profile')} className="hover:bg-gray-50">
                      <User className="mr-3 h-4 w-4 text-amber-600" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/my-books')} className="hover:bg-gray-50">
                      <BookOpen className="mr-3 h-4 w-4 text-amber-600" />
                      <span>My Books</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="hover:bg-gray-50 text-red-600">
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button 
                className="hidden sm:inline-flex bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md px-4"
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
            )}

            {/* Mobile menu - now visible on lg screens and below */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {!user && (
                    <Button 
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium mt-4"
                      onClick={() => navigate('/auth')}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
