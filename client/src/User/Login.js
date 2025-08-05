import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Check if user data exists in localStorage (from registration)
      const userData = localStorage.getItem('userData');
      const parsedUserData = userData ? JSON.parse(userData) : null;
      
      if (parsedUserData && parsedUserData.email === email && parsedUserData.password === password) {
        // User exists and credentials match
        localStorage.setItem('token', 'mock_token_' + Date.now());
        localStorage.setItem('userData', JSON.stringify({
          ...parsedUserData,
          lastLogin: new Date().toISOString()
        }));
        
        setLoading(false);
        navigate('/profile');
      } else {
        // Simulate API call for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo, accept any email/password combination
        localStorage.setItem('token', 'mock_token_' + Date.now());
        
        // If no user data exists, create a mock user
        if (!parsedUserData) {
          const mockUser = {
            _id: 'user_' + Date.now(),
            fullName: 'Demo User',
            email: email,
            phoneNumber: '+1 (555) 123-4567',
            streetAddress: '123 Demo Street',
            city: 'Demo City',
            state: 'DS',
            country: 'Demo Country',
            postalCode: '12345',
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
          };
          localStorage.setItem('userData', JSON.stringify(mockUser));
        }
        
        setLoading(false);
        navigate('/profile');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <Navbar />
      
      <div style={{ flex: 1, padding: '2rem 0' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2c3e50',
              marginBottom: '0.5rem'
            }}>
              🔐 Sign In
            </h1>
            <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Welcome back to MCity
            </p>
          </div>

          {/* Login Form */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e1e5e9',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e1e5e9';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                  Password *
                </label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e1e5e9',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e1e5e9';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {loading ? '⏳ Signing In...' : '🔐 Sign In'}
              </button>
            </form>
            
            {/* Error Message */}
            {error && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                textAlign: 'center',
                border: '1px solid #f5c6cb'
              }}>
                ❌ {error}
              </div>
            )}
            
            {/* Register Link */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <p style={{ color: '#6c757d' }}>
                Don't have an account?{' '}
                <Link to="/register" style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                onMouseLeave={(e) => e.target.style.color = '#667eea'}>
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;