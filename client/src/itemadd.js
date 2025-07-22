import React, { useState } from 'react';

const ItemAdd = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setMessage('Item added successfully!');
        setForm({ name: '', price: '', quantity: '', description: '' });
      } else {
        setMessage('Failed to add item.');
      }
    } catch (err) {
      setMessage('Error adding item.');
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input name="quantity" type="number" value={form.quantity} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ItemAdd; 