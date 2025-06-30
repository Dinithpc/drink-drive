import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

export default function Rates() {
  return (
    <div>
      <Navbar />
      <section className="py-12 text-center bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">Rates & Booking</h1>
        <p className="max-w-2xl mx-auto mb-8">Our pricing is transparent: 2/km or LKR 100/hour. Book now using the form below or contact us via WhatsApp.</p>
        <BookingForm />
      </section>
      <Footer />
    </div>
  );
}