import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage or token
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode JWT token to get user info (basic implementation)
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          name: payload.name || 'User',
          email: payload.email || 'user@example.com'
        });
      } catch (error) {
        console.error('Error parsing token:', error);
        setUser({ name: 'User', email: 'user@example.com' });
      }
    } else {
      setUser({ name: 'Guest', email: 'guest@example.com' });
    }
    setLoading(false);
  }, []);

  const handleGoToShopping = () => {
    navigate('/item/home');
  };

  if (loading) {
    return (
      <div className="container fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container fade-in" style={{ maxWidth: 500, margin: '4rem auto', textAlign: 'center' }}>
      <h2>User Profile</h2>
      <div style={{ 
        background: '#f5f7fa', 
        borderRadius: '1rem', 
        padding: '2rem', 
        margin: '2rem 0',
        boxShadow: '0 2px 8px rgba(38,50,56,0.04)'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#2575fc', marginBottom: '0.5rem' }}>{user.name}</h3>
          <p style={{ color: '#555' }}>{user.email}</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={handleGoToShopping}
            style={{ 
              background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '2rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(38,50,56,0.12)',
              transition: 'all 0.2s'
            }}
          >
            🛍️ GO TO SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 