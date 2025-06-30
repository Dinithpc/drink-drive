import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <section className="py-12 text-center bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Night Outs</h3>
            <p>Safe rides after a fun night out.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Events & Parties</h3>
            <p>Chauffeurs for your special events.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Corporate Packages</h3>
            <p>Professional transport for businesses.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}