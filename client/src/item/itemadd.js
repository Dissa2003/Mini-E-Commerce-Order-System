import React, { useState } from 'react';

const ItemAdd = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('price', form.price);
      formData.append('quantity', form.quantity);
      formData.append('description', form.description);
      formData.append('image', image);

      const response = await fetch('/api/items', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setMessage('Item added successfully!');
        setForm({ name: '', price: '', quantity: '', description: '' });
        setImage(null);
        setImagePreview(null);
        e.target.reset();
      } else {
        const data = await response.json();
        setMessage(data.message || 'Failed to add item.');
      }
    } catch (err) {
      setMessage('Error adding item.');
    }
  };

  return (
    <div className="container fade-in" style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Add New Item</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
        <div>
          <label>Image:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            required 
            style={{ marginTop: '0.5rem' }}
          />
          {imagePreview && (
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '0.5rem' }}
              />
            </div>
          )}
        </div>
        <button type="submit">Add Item</button>
      </form>
      {message && <p style={{ textAlign: 'center', marginTop: '1rem', color: message.includes('successfully') ? '#43a047' : '#e53935' }}>{message}</p>}
    </div>
  );
};

export default ItemAdd; 