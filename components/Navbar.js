import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pastel-orange text-white p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/images/logo.jpg"
            alt="Drink & Drive Logo"
            className="h-12 w-auto rounded-5 shadow-md"
          />
          <h1 className="text-2xl md:text-2xl font-bold tracking-tight font-inter">
            <span className="text-neutral-900 group-hover:text-black transition duration-200">Drink</span>{' '}
            <span className="text-white animate-pulse transition duration-200">and</span>{' '}
            <span className="text-black group-hover:text-black transition duration-200">Drive</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-black transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-black transition-colors duration-300">About Us</Link>
          <Link href="/services" className="hover:text-black transition-colors duration-300">Services</Link>
          <Link href="/how-it-works" className="hover:text-black transition-colors duration-300">How It Works</Link>
          <Link href="/rates" className="hover:text-black transition-colors duration-300">Rates & Booking</Link>
          <Link href="/testimonials" className="hover:text-black transition-colors duration-300">Testimonials</Link>
          <Link href="/gallery" className="hover:text-black transition-colors duration-300">Gallery</Link>
          <Link href="/contact" className="hover:text-black transition-colors duration-300">Contact</Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pastel-orange p-4 space-y-4">
          <Link href="/" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>About Us</Link>
          <Link href="/services" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Services</Link>
          <Link href="/how-it-works" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>How It Works</Link>
          <Link href="/rates" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Rates & Booking</Link>
          <Link href="/testimonials" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Testimonials</Link>
          <Link href="/gallery" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Gallery</Link>
          <Link href="/contact" className="block hover:text-black transition-colors duration-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
