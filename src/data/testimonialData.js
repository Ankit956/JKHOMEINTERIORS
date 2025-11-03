// ============================================
// TESTIMONIAL DATA - Customer Reviews
// ============================================

export const testimonials = [
  { 
    id: 1,
    name: 'Sarah Johnson', 
    role: 'Homeowner', 
    rating: 5, 
    text: 'The team transformed our house into a dream home. Their attention to detail is exceptional!',
    date: '2024-01-15'
  },
  { 
    id: 2,
    name: 'Michael Chen', 
    role: 'Business Owner', 
    rating: 5, 
    text: 'Professional, creative, and efficient. They delivered beyond our expectations.',
    date: '2024-02-20'
  },
  { 
    id: 3,
    name: 'Emily Rodriguez', 
    role: 'Architect', 
    rating: 5, 
    text: 'A pleasure to work with. Their designs are both beautiful and functional.',
    date: '2024-03-10'
  },
];

// Function to get all testimonials
export const getAllTestimonials = () => {
  // Try to get testimonials from localStorage (browser storage)
  const storedTestimonials = localStorage.getItem('customerTestimonials');
  
  if (storedTestimonials) {
    try {
      const parsed = JSON.parse(storedTestimonials);
      // Combine default testimonials with stored ones
      return [...testimonials, ...parsed];
    } catch (error) {
      console.error('Error loading testimonials:', error);
      return testimonials;
    }
  }
  
  return testimonials;
};

// Function to add a new testimonial
export const addTestimonial = (testimonialData) => {
  try {
    // Get existing testimonials from localStorage
    const storedTestimonials = localStorage.getItem('customerTestimonials');
    let existingTestimonials = [];
    
    if (storedTestimonials) {
      existingTestimonials = JSON.parse(storedTestimonials);
    }
    
    // Create new testimonial object
    const newTestimonial = {
      id: Date.now(), // Unique ID using timestamp
      name: testimonialData.name,
      role: testimonialData.role || 'Customer',
      rating: testimonialData.rating,
      text: testimonialData.text,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      status: 'pending' // Can be used for approval system
    };
    
    // Add to beginning of array (newest first)
    existingTestimonials.unshift(newTestimonial);
    
    // Save back to localStorage
    localStorage.setItem('customerTestimonials', JSON.stringify(existingTestimonials));
    
    return { success: true, testimonial: newTestimonial };
  } catch (error) {
    console.error('Error saving testimonial:', error);
    return { success: false, error: error.message };
  }
};

// Function to delete a testimonial (admin feature)
export const deleteTestimonial = (testimonialId) => {
  try {
    const storedTestimonials = localStorage.getItem('customerTestimonials');
    
    if (storedTestimonials) {
      let testimonialsList = JSON.parse(storedTestimonials);
      testimonialsList = testimonialsList.filter(t => t.id !== testimonialId);
      localStorage.setItem('customerTestimonials', JSON.stringify(testimonialsList));
      return { success: true };
    }
    
    return { success: false, error: 'No testimonials found' };
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return { success: false, error: error.message };
  }
};