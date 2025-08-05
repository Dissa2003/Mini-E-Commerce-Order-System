import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (email === 'admin@gmail.com' && password === '12345') {
      // Store admin authentication (you might want to use a more secure method)
      localStorage.setItem('adminAuthenticated', 'true');
      navigate('/adminhome');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', 
      color: '#fff' 
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        minWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Admin Login</h2>
        
        {error && (
          <div style={{
            background: 'rgba(255, 0, 0, 0.2)',
            color: '#ffcccc',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="admin@gmail.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="12345"
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#fff',
              color: '#2575fc',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Login as Admin
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin; 