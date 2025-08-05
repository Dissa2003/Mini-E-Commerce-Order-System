import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Simulate registration API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save registration data to localStorage with proper structure
      const userData = {
        _id: 'user_' + Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password, // Note: In real app, this should be hashed
        phoneNumber: formData.phoneNumber,
        // Store shipping address fields at root level for easy access
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postalCode: formData.postalCode,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('token', 'mock_token_' + Date.now());
      
      setSuccess('Registration successful! You can now login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <Navbar />
      
      <div style={{ flex: 1, padding: '2rem 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2c3e50',
              marginBottom: '0.5rem'
            }}>
              📝 Create Account
            </h1>
            <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Join MCity and start your shopping journey
            </p>
          </div>

          {/* Registration Form */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Personal Information */}
              <div>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  👤 Personal Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      placeholder="Enter your full name" 
                      value={formData.fullName} 
                      onChange={handleChange} 
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
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleChange} 
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
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Password *
                    </label>
                    <input 
                      type="password" 
                      name="password"
                      placeholder="Create a password" 
                      value={formData.password} 
                      onChange={handleChange} 
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
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      placeholder="Enter your phone number" 
                      value={formData.phoneNumber} 
                      onChange={handleChange} 
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
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  📦 Shipping Address
                </h3>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                    Street Address *
                  </label>
                  <input 
                    type="text" 
                    name="streetAddress"
                    placeholder="Enter your street address" 
                    value={formData.streetAddress} 
                    onChange={handleChange} 
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
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      City *
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      placeholder="Enter your city" 
                      value={formData.city} 
                      onChange={handleChange} 
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
                      State/Province *
                    </label>
                    <input 
                      type="text" 
                      name="state"
                      placeholder="Enter your state" 
                      value={formData.state} 
                      onChange={handleChange} 
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
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Country *
                    </label>
                    <input 
                      type="text" 
                      name="country"
                      placeholder="Enter your country" 
                      value={formData.country} 
                      onChange={handleChange} 
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
                      Postal/Zip Code *
                    </label>
                    <input 
                      type="text" 
                      name="postalCode"
                      placeholder="Enter postal code" 
                      value={formData.postalCode} 
                      onChange={handleChange} 
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
                </div>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                📝 Create Account
              </button>
            </form>
            
            {/* Messages */}
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
            {success && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                textAlign: 'center',
                border: '1px solid #c3e6cb'
              }}>
                ✅ {success}
              </div>
            )}
            
            {/* Login Link */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <p style={{ color: '#6c757d' }}>
                Already have an account?{' '}
                <Link to="/login" style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                onMouseLeave={(e) => e.target.style.color = '#667eea'}>
                  Login here
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

export default Register;
