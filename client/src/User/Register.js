import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

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
      await registerUser(formData);
      setSuccess('Registration successful! You can now login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container fade-in" style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input 
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            name="phoneNumber"
            placeholder="Phone Number" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </div>

        <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>Shipping Address</h3>
        
        <input 
          type="text" 
          name="streetAddress"
          placeholder="Street Address" 
          value={formData.streetAddress} 
          onChange={handleChange} 
          required 
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input 
            type="text" 
            name="city"
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="state"
            placeholder="State/Province" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input 
            type="text" 
            name="country"
            placeholder="Country" 
            value={formData.country} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="postalCode"
            placeholder="Postal/Zip Code" 
            value={formData.postalCode} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" style={{ marginTop: '1rem' }}>Register</button>
      </form>
      {error && <p style={{ color: '#e53935', marginTop: '1rem' }}>{error}</p>}
      {success && <p style={{ color: '#43a047', marginTop: '1rem' }}>{success}</p>}
      <p style={{ marginTop: '1.5rem' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
