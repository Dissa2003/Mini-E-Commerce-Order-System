import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', color: '#fff', position: 'relative' }}>
      <Link to="/cart" style={{ position: 'absolute', top: 30, right: 40, zIndex: 10 }}>
        <button style={{ borderRadius: '2rem', padding: '0.5rem 1.5rem', fontWeight: 'bold', fontSize: '1rem' }}>🛒 Cart</button>
      </Link>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px' }}>MCity</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
        Welcome to <b>MCity</b> — your one-stop destination for a seamless e-commerce experience. Discover amazing products, enjoy secure shopping, and join our vibrant community today!
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/login" style={{ padding: '0.75rem 2rem', background: '#fff', color: '#2575fc', borderRadius: '2rem', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Login</Link>
        <Link to="/register" style={{ padding: '0.75rem 2rem', background: '#fff', color: '#6a11cb', borderRadius: '2rem', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Register</Link>
      </div>
    </div>
  );
}

export default Homepage; 