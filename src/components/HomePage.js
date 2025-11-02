import React from 'react';
import { Star, CheckCircle, Home, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8">Professional Interior Design Services</p>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12">We bring your vision to life with creativity and expertise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Expert designers with proven track record</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Projects</h3>
              <p className="text-gray-600">Successfully completed designs</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Client happiness guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 3).map(item => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('portfolio')} 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;