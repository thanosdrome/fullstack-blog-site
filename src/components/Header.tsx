
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PenTool, Search, User, Menu, X, Plus } from 'lucide-react';
import { LoginDialog } from './LoginDialog';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BlogSphere
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/blog/1" 
                className={`${location.pathname.startsWith('/blog/') ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
              >
                Articles
              </Link>
              <Link 
                to="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Categories
              </Link>
              <Link 
                to="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 w-64 bg-white/5 border-white/20 focus:border-primary/50"
                />
              </div>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/write">
                      <PenTool className="w-4 h-4 mr-2" />
                      Write
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-white/10">
                    <User className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => setShowLogin(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className={`${location.pathname === '/' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/blog/1" 
                  className={`${location.pathname.startsWith('/blog/') ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link 
                  to="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="pt-3 border-t border-white/10">
                  {isLoggedIn ? (
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link to="/write" onClick={() => setIsMenuOpen(false)}>
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => {
                        setIsMenuOpen(false);
                        setShowLogin(true);
                      }}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginDialog 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        onLogin={handleLogin}
      />
    </>
  );
};
