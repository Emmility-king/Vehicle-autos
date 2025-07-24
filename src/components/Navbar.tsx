import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-zinc-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-zinc-400" />
            <span className="text-xl font-bold text-white">Power Auto Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-zinc-300 border-b-2 border-zinc-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+2348138201539"
              className="flex items-center space-x-1 bg-zinc-600 hover:bg-zinc-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+234 813 820 1539</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-white bg-zinc-600'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+2348138201539"
                className="flex items-center space-x-2 px-3 py-2 text-zinc-300 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span>+234 813 820 1539</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;