import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-zinc-400" />
              <span className="text-xl font-bold text-white">AutoElite</span>
            </div>
            <p className="text-zinc-400 mb-4">
              Your trusted partner for premium automotive sales and services. 
              Quality vehicles and exceptional customer service since day one.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-zinc-400" />
                <a href="tel:+2348138201539" className="hover:text-white transition-colors">
                  +234 813 820 1539
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-zinc-400" />
                <a href="mailto:info@autoelite.com" className="hover:text-white transition-colors">
                  info@autoelite.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-zinc-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/inventory" className="block hover:text-white transition-colors">
                View Inventory
              </a>
              <a href="/services" className="block hover:text-white transition-colors">
                Our Services
              </a>
              <a href="/about" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="/contact" className="block hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
          <p className="text-zinc-400">
            © 2025 AutoElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;