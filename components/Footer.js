import Link from 'next/link';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-yellow-300 text-black py-3 text-sm relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
        
        {/* Copyright */}
        <p className="font-medium text-center md:text-left">
          © 2025 Drink & Drive. All rights reserved.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm">
          <Link
            href="tel:+94777890983"
            className="flex items-center hover:text-orange-600 transition-colors duration-200"
          >
            <FaPhone className="mr-1" /> +94 77 789 0983
          </Link>

          <Link
            href="mailto:info@drinkanddrive.com"
            className="flex items-center hover:text-orange-600 transition-colors duration-200"
          >
            <FaEnvelope className="mr-1" /> info@drinkanddrive.com
          </Link>

          <p className="text-center md:text-left">
            📍 58/4 16th Lane Ananda Balika Mawatha,<br />
            Sri Jayawardenepura Kotte
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94777890983?text=Hello,%20I%20need%20a%20ride%20to%2058/4%2016th%20Lane%20Ananda%20Balika%20Mawatha,%20Sri%20Jayawardenepura%20Kotte%2010100"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-4 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center z-50"
      >
        <FaWhatsapp className="mr-2" /> WhatsApp Us
      </a>
    </footer>
  );
}
