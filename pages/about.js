import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-12 text-center bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto">Drink & Drive was founded to keep roads safe and help people enjoy worry-free nights. Our mission is to provide reliable, professional chauffeur services to get you and your car home safely.</p>
        <img src="/images/team.jpg" alt="Our Team" className="mt-8 mx-auto rounded" />
      </section>
      <Footer />
    </div>
  );
}