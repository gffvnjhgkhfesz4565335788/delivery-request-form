'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    address: '',
    delivery_items: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Delivery request submitted!');
      setFormData({ name: '', email: '', company: '', address: '', delivery_items: '' });
    } else {
      alert('Submission failed.');
    }
  };

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Delivery Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border" />
        <input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} className="w-full p-2 border" />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-2 border"></textarea>
        <textarea name="delivery_items" placeholder="Delivery Items" value={formData.delivery_items} onChange={handleChange} required className="w-full p-2 border"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Request</button>
      </form>
    </main>
  );
}
