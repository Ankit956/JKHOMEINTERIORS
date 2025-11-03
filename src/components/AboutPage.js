import React from 'react';
import { Star } from 'lucide-react';
/*import { getAllTestimonials, addTestimonial } from '../data/testimonialData';*/

const AboutPage = () => {
  const testimonials = [
    { 
      name: 'Sarah Johnson', 
      role: 'Homeowner', 
      rating: 5, 
      text: 'The team transformed our house into a dream home. Their attention to detail is exceptional!' 
    },
    { 
      name: 'Michael Chen', 
      role: 'Business Owner', 
      rating: 5, 
      text: 'Professional, creative, and efficient. They delivered beyond our expectations.' 
    },
    { 
      name: 'Emily Rodriguez', 
      role: 'Architect', 
      rating: 5, 
      text: 'A pleasure to work with. Their designs are both beautiful and functional.' 
    },
  ];

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
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;