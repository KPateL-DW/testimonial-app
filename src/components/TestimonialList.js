import React, { useEffect, useState } from 'react';

function TestimonialList() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="mb-4">
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
          <p className="text-gray-700">{testimonial.testimonial}</p>
          <p className="text-yellow-500">Rating: {testimonial.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialList;
