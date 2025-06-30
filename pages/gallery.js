import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const images = [
    {
      src: '/images/service.jpg',
      alt: 'Luxury chauffeur service at night',
      caption: 'Our premium vehicles ensure a safe and comfortable ride.',
    },
    {
      src: '/images/team.jpg',
      alt: 'Our professional drivers',
      caption: 'Meet our trained and reliable chauffeurs.',
    },
    {
      src: '/images/hero.jpg',
      alt: 'Safe ride home',
      caption: 'Enjoy your night out with peace of mind.',
    },
    {
      src: '/images/car.jpg',
      alt: 'Sleek black sedan',
      caption: 'Our fleet of modern vehicles for your comfort.',
    },
    {
      src: '/images/hero.jpg',
      alt: 'Nightlife experience',
      caption: 'We get you home safely after a fun night out.',
    },
    {
      src: '/images/car.jpg',
      alt: 'Sleek black sedan',
      caption: 'Our fleet of modern vehicles for your comfort.',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white text-black text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Our Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {images[selectedImage].caption}
            </p>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full"
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 hover:bg-pastel-orange hover:bg-opacity-50 rounded-full"
              aria-label="Next image"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}