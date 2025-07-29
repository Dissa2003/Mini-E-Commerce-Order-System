import React, { useEffect, useState } from 'react';

const AdminDisplay = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', quantity: '', description: '', image: '' });
  const [message, setMessage] = useState('');

  const fetchItems = async () => {
    const res = await fetch('/api/items');
    if (res.ok) {
      setItems(await res.json());
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({ name: item.name, price: item.price, quantity: item.quantity, description: item.description, image: item.image });
  };

  const handleUpdate = async (id) => {
    const res = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setMessage('Item updated!');
      setEditId(null);
      fetchItems();
    } else {
      setMessage('Update failed.');
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setMessage('Item deleted!');
      fetchItems();
    } else {
      setMessage('Delete failed.');
    }
  };

  return (
    <div className="container fade-in" style={{ maxWidth: 1000, margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Item Management</h2>
      {message && <p style={{ textAlign: 'center', color: '#2575fc', marginBottom: '1rem' }}>{message}</p>}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {items.length === 0 && <p style={{ textAlign: 'center' }}>No items found.</p>}
        {items.map(item => (
          <div key={item._id} style={{ 
            background: '#fff', 
            borderRadius: '1rem', 
            padding: '1.5rem', 
            boxShadow: '0 2px 8px rgba(38,50,56,0.04)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            {item.image && (
              <img 
                src={item.image} 
                alt={item.name}
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  objectFit: 'cover', 
                  borderRadius: '0.5rem',
                  flexShrink: 0
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              {editId === item._id ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
                  <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Price" />
                  <input type="number" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} placeholder="Quantity" />
                  <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" />
                  <input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="Image URL" />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleUpdate(item._id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 style={{ color: '#2575fc', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ margin: '0.25rem 0' }}><b>Price:</b> ${item.price}</p>
                  <p style={{ margin: '0.25rem 0' }}><b>Quantity:</b> {item.quantity}</p>
                  <p style={{ margin: '0.25rem 0', color: '#555' }}><b>Description:</b> {item.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDisplay; 