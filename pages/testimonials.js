import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Amazing service! Got me home safely after a late night.",
      author: "Sarah J.",
      title: "Customer",
      avatar: "/images/user.png",
    },
    {
      quote: "Professional drivers and easy booking process.",
      author: "Mark T.",
      title: "Frequent User",
      avatar: "/images/user.png",
    },
    {
      quote: "Reliable and secure, highly recommend for any night out!",
      author: "Emily R.",
      title: "Client",
      avatar: "/images/user.png",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-cycle testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      <section className="py-20 bg-white text-black text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.author}'s avatar`}
                      className="h-16 w-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-900 text-2xl p-2 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-900 text-2xl p-2 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-pastel-orange' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}