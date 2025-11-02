import React from 'react';
import { Home, Package, Image, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { 
      icon: Home, 
      title: 'Interior Design', 
      description: 'Complete interior design solutions tailored to your style and needs' 
    },
    { 
      icon: Package, 
      title: 'Space Planning', 
      description: 'Optimize your space with strategic furniture placement and flow' 
    },
    { 
      icon: Images, 
      title: '3D Visualization', 
      description: 'See your dream space before construction begins with realistic renders' 
    },
    { 
      icon: CheckCircle, 
      title: 'Project Management', 
      description: 'End-to-end project coordination from concept to completion' 
    },
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive interior design solutions for every space</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="flex gap-6 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-center text-gray-600 mb-12">Simple steps to your dream space</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Consultation', 'Design Concept', 'Development', 'Implementation'].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">Professional execution at every stage</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;