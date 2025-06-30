import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const slides = [
    {
      src: '/images/hero.jpg',
      alt: 'Safe ride home with professional chauffeur',
      caption: 'Your Safe Ride Home Starts Here',
    },
    {
      src: '/images/car.jpg',
      alt: 'Reliable chauffeur service at night',
      caption: 'Professional Drivers for a Worry-Free Night',
    },
    {
      src: '/images/service.jpg',
      alt: 'Enjoy your night with Drink & Drive',
      caption: 'Enjoy the Night, We’ll Handle the Drive',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 text-black py-20">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Hero Slider */}
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl p-3 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full transition-colors duration-300"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl p-3 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full transition-colors duration-300"
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                    index === currentSlide ? 'bg-pastel-orange' : 'bg-white bg-opacity-50'
                  } transition-all duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Hero Text and CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 px-4 drop-shadow-lg">
              You Drink, We Drive – Your Safe Ride Home Starts Here
            </h1>
            <Link
              href="/rates"
              className="bg-pastel-orange text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-white text-lg font-semibold shadow-md transition-all duration-300"
            >
              Book a Ride
            </Link>
          </div>
        </div>
        {/* Features Section */}
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/images/service-24-7.jpg"
                alt="24/7 Service Icon"
                className="h-24 w-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-700">Available anytime you need us.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/images/trained-drivers.png"
                alt="Trained Drivers Icon"
                className="h-24 w-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trained Drivers</h3>
              <p className="text-gray-700">Professional and reliable chauffeurs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/images/private-secure.jpg"
                alt="Private and Secure Icon"
                className="h-24 w-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Private & Secure</h3>
              <p className="text-gray-700">Your safety is our priority.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}