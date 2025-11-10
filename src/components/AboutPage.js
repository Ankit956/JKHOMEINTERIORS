import React, { useState, useEffect } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { getAllTestimonials, addTestimonial } from '../data/testimonialData';

const AboutPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    text: ''
  });

  // Load testimonials when component mounts
  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const allTestimonials = getAllTestimonials();
    setTestimonials(allTestimonials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.text) {
      alert('Please fill in your name and review!');
      return;
    }

    const result = addTestimonial(formData);
    
    if (result.success) {
      alert('Thank you for your review! It has been submitted successfully.');
      
      setFormData({
        name: '',
        role: '',
        rating: 5,
        text: ''
      });
      
      setShowForm(false);
      loadTestimonials();
    } else {
      alert('Failed to submit review. Please try again.');
    }
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Passionate designers creating exceptional spaces</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, JK Home Interior has been transforming residential and commercial spaces with innovative design solutions. Our team of experienced designers brings creativity, expertise, and attention to detail to every project.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design should be accessible to everyone. Our mission is to create beautiful, functional spaces that reflect our clients' personalities and enhance their daily lives.
              </p>
              <p className="text-gray-600">
                With over 500 completed projects and countless satisfied clients, we continue to push the boundaries of interior design while maintaining our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" 
                alt="Our Team" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 mb-6">Read reviews from our satisfied customers</p>
            
            {/* Add Review Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare size={20} />
              {showForm ? 'Cancel' : 'Write a Review'}
            </button>
          </div>

          {/* Review Form */}
          {showForm && (
            <div className="max-w-2xl mx-auto mb-12 bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Role (Optional)</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Homeowner, Business Owner, etc."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={32} 
                          className={star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Click to rate (1-5 stars)</p>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Review *</label>
                  <textarea
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Share your experience with our services..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={testimonial.id || idx} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  {testimonial.date && (
                    <p className="text-xs text-gray-400 mt-1">{new Date(testimonial.date).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {testimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No reviews yet. Be the first to share your experience!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;