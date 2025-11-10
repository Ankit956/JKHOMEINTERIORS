import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            {/* Logo and Company Name */}
            <img 
              src="public/images/logo.png"  
              alt="Company Logo" 
              className="h-10 w-10 object-contain"
            />



            <h1 className="text-2xl font-bold text-gray-800">JK HOME INTERIOR</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('services')} 
              className={`${currentPage === 'services' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Services
            </button>
            <button 
              onClick={() => setCurrentPage('portfolio')} 
              className={`${currentPage === 'portfolio' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setCurrentPage('about')} 
              className={`${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Services
            </button>
            <button 
              onClick={() => { setCurrentPage('portfolio'); setMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Portfolio
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              About
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;