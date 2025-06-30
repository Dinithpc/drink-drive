import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaCar, FaHome } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Book Your Ride',
      description: 'Call or WhatsApp us to schedule your ride quickly and easily.',
      icon: <FaPhone className="text-4xl text-pastel-orange mb-4" />,
      image: '/images/book-ride.jpg',
    },
    {
      title: 'Professional Chauffeur Arrives',
      description: 'We send a trained and reliable chauffeur to your location.',
      icon: <FaCar className="text-4xl text-pastel-orange mb-4" />,
      image: '/images/chauffeur.jpg',
    },
    {
      title: 'Ride Home Safely',
      description: 'Relax and get home safely in the comfort of your own car.',
      icon: <FaHome className="text-4xl text-pastel-orange mb-4" />,
      image: '/images/safe-ride.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white text-black text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            How It Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-32 w-full object-cover rounded-t-lg mb-4"
                />
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}