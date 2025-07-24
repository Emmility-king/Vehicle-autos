import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Car } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-zinc-300 select-none">404</h1>
            <Car className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-zinc-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-zinc-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-zinc-600 mb-2">
            Oops! The page you're looking for seems to have taken a wrong turn.
          </p>
          <p className="text-lg text-zinc-500">
            Don't worry, even the best navigation systems sometimes need recalibration.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 border-2 border-zinc-400 hover:bg-zinc-400 hover:text-white text-zinc-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Looking for something specific?</h3>
          <p className="text-zinc-600 mb-6">
            Here are some popular destinations that might help you find what you need:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/inventory"
              className="text-left p-4 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors duration-200 group"
            >
              <h4 className="font-semibold text-zinc-800 group-hover:text-zinc-600">Vehicle Inventory</h4>
              <p className="text-sm text-zinc-600">Browse our available vehicles</p>
            </Link>
            
            <Link
              to="/services"
              className="text-left p-4 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors duration-200 group"
            >
              <h4 className="font-semibold text-zinc-800 group-hover:text-zinc-600">Our Services</h4>
              <p className="text-sm text-zinc-600">Explore our automotive services</p>
            </Link>
            
            <Link
              to="/about"
              className="text-left p-4 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors duration-200 group"
            >
              <h4 className="font-semibold text-zinc-800 group-hover:text-zinc-600">About Us</h4>
              <p className="text-sm text-zinc-600">Learn about AutoElite</p>
            </Link>
            
            <Link
              to="/contact"
              className="text-left p-4 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors duration-200 group"
            >
              <h4 className="font-semibold text-zinc-800 group-hover:text-zinc-600">Contact</h4>
              <p className="text-sm text-zinc-600">Get in touch with us</p>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 p-6 bg-zinc-800 text-white rounded-xl">
          <p className="text-zinc-300 mb-2">Need immediate assistance?</p>
          <a
            href="tel:+2348138201539"
            className="text-xl font-semibold hover:text-zinc-300 transition-colors duration-200"
          >
            Call +234 813 820 1539
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;