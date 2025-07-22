import React, { useEffect, useState } from 'react';

const AdminDisplay = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', quantity: '', description: '' });
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
    setForm({ name: item.name, price: item.price, quantity: item.quantity, description: item.description });
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
    <div>
      <h2>Admin Item Management</h2>
      {message && <p>{message}</p>}
      <ul>
        {items.map(item => (
          <li key={item._id} style={{ marginBottom: '1rem' }}>
            {editId === item._id ? (
              <div>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
                <input type="number" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />
                <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                <button onClick={() => handleUpdate(item._id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <b>{item.name}</b> | ${item.price} | Qty: {item.quantity} | {item.description}
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDisplay; 