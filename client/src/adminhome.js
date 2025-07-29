import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="container fade-in" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate('/item/add')}>Add Item</button>
      <button onClick={() => navigate('/item/admin')}>View Items as Admin</button>
      <button onClick={() => navigate('/admin/users')}>User Management</button>
    </div>
  );
};

export default AdminHome; 