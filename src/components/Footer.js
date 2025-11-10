import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">J.K.INTERIOR</h3>
            <p className="text-gray-400">Creating beautiful spaces that inspire and delight.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('portfolio')} 
                  className="text-gray-400 hover:text-white transition"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@designspace.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> 123 Design St, NY 10001
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-white transition">
                <Facebook size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <Instagram size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <Linkedin size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JK HOME INTERIOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;