import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    pickupTime: '',
    vehicleType: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Booking submitted successfully!');
        setFormData({ name: '', location: '', pickupTime: '', vehicleType: '' });
      } else {
        alert('Error submitting booking.');
      }
    } catch (error) {
      alert('Error submitting booking.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white-og rounded">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 rounded bg-white text-black"
        required
      />
      <input
        type="text"
        placeholder="Pickup Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        className="w-full p-2 rounded bg-white text-black"
        required
      />
      <input
        type="datetime-local"
        value={formData.pickupTime}
        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
        className="w-full p-2 rounded bg-white text-black"
        required
      />
      <input
        type="text"
        placeholder="Vehicle Type"
        value={formData.vehicleType}
        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
        className="w-full p-2 rounded bg-white text-black"
        required
      />
      <button type="submit" className="w-full p-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
        Book Now
      </button>
    </form>
  );
}