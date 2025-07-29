import React, { useEffect, useState } from 'react';

const UserView = () => {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    if (res.ok) {
      setUsers(await res.json());
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm({ name: user.name, email: user.email, password: '' });
  };

  const handleUpdate = async (id) => {
    const res = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setMessage('User updated!');
      setEditId(null);
      fetchUsers();
    } else {
      setMessage('Update failed.');
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setMessage('User deleted!');
      fetchUsers();
    } else {
      setMessage('Delete failed.');
    }
  };

  return (
    <div className="container fade-in">
      <h2>User Management</h2>
      {message && <p>{message}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id} style={{ marginBottom: '1rem' }}>
            {editId === user._id ? (
              <div>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="New password (optional)" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                <button onClick={() => handleUpdate(user._id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <b>{user.name}</b> | {user.email}
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserView; 