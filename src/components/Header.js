import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/home');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed z-50 bg-white/80 border-neutral-200 border-b top-0 right-0 left-0 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              onClick={handleLogoClick}
              role="button"
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="SurestPlug Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              {/* <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                SurestPlug
              </span> */}
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/home" className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight">
                Home
              </Link>
              <Link to="/shop" className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight">
                Shop
              </Link>
              <Link to="/about" className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight">
                About
              </Link>
              <Link to="/contact" className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                Login
              </Link>
              <Link to="/register" className="text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors px-4 py-2 rounded-md">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-neutral-200">
            <Link
              to="/home"
              className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            {/* Auth buttons for mobile */}
            <div className="px-3 py-2 border-t border-neutral-200 mt-3 pt-3 space-y-2">
              <Link
                to="/login"
                className="block text-center px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-center px-3 py-2 text-base font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
