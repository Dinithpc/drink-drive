import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <FaPhone className="mr-3 text-pastel-orange" /> 
                  <a href="tel:+94777890983" className="hover:text-pastel-orange transition-colors duration-300">
                    +94 77 789 0983
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <FaEnvelope className="mr-3 text-pastel-orange" /> 
                  <a href="mailto:info@drinkanddrive.com" className="hover:text-pastel-orange transition-colors duration-300">
                    info@drinkanddrive.com
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <FaWhatsapp className="mr-3 text-pastel-orange" /> 
                  <a
                    href="https://wa.me/94777890983?text=Hello,%20I%20need%20assistance%20from%20Drink%20&%20Drive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pastel-orange transition-colors duration-300"
                  >
                    WhatsApp Us
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-pastel-orange" /> 
                  58/4 16th Lane Ananda Balika Mawatha, Sri Jayawardenepura Kotte
                </p>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-orange"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-orange"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-pastel-orange"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-pastel-orange text-gray-900 p-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Map Section */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
              <div className="relative w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.058464895495!2d79.90472361473782!3d6.886743995105808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24e5f9b5c5f2b%3A0x8a4b8c1d8f0e8e8e!2s58%2F4%2016th%20Lane%2C%20Ananda%20Balika%20Mawatha%2C%20Sri%20Jayawardenepura%20Kotte%2010100%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1623456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}