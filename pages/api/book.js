export default function handler(req, res) {
  if (req.method === 'POST') {
    // In a real application, save booking to a database
    console.log('Booking received:', req.body);
    res.status(200).json({ message: 'Booking received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}