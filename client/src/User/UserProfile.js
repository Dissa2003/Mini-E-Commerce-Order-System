import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('userData');
      
      if (!token) {
        navigate('/login');
        return;
      }

      if (userData) {
        // Use actual registration data from localStorage
        const parsedUser = JSON.parse(userData);
        
        // Fix the shipping address structure to match the expected format
        const userProfile = {
          _id: parsedUser._id || 'user123',
          fullName: parsedUser.fullName || 'User',
          email: parsedUser.email || 'user@example.com',
          phoneNumber: parsedUser.phoneNumber || '+1 (555) 123-4567',
          shippingAddress: {
            streetAddress: parsedUser.streetAddress || '123 Main Street',
            city: parsedUser.city || 'New York',
            state: parsedUser.state || 'NY',
            country: parsedUser.country || 'USA',
            postalCode: parsedUser.postalCode || '10001'
          },
          createdAt: parsedUser.createdAt || new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };

        setUser(userProfile);
        setFormData(userProfile);
      } else {
        // Fallback to mock data if no registration data exists
        const mockUser = {
          _id: 'user123',
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          phoneNumber: '+1 (555) 123-4567',
          shippingAddress: {
            streetAddress: '123 Main Street',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '10001'
          },
          createdAt: '2024-01-15T10:30:00Z',
          lastLogin: '2024-01-20T14:45:00Z'
        };

        setUser(mockUser);
        setFormData(mockUser);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setUpdateMessage('Updating profile...');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update both state and localStorage
      setUser(formData);
      localStorage.setItem('userData', JSON.stringify(formData));
      setIsEditing(false);
      setUpdateMessage('Profile updated successfully!');
      
      setTimeout(() => setUpdateMessage(''), 3000);
    } catch (error) {
      setUpdateMessage('Error updating profile. Please try again.');
      setTimeout(() => setUpdateMessage(''), 3000);
    }
  };

  const handleLogout = () => {
    if (deleteConfirm) {
      // Delete user account
      handleDeleteAccount();
    } else {
      // Regular logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userData');
      navigate('/');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setUpdateMessage('Deleting account...');
      
      // Simulate API call to delete user
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear all local storage
      localStorage.clear();
      
      setUpdateMessage('Account deleted successfully. Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setUpdateMessage('Error deleting account. Please try again.');
      setTimeout(() => setUpdateMessage(''), 3000);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: '#f8f9fa'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
            <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>Loading profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <Navbar />
      
      <div style={{ flex: 1, padding: '2rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2c3e50',
              marginBottom: '0.5rem'
            }}>
              👤 User Profile
            </h1>
            <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Manage your account information and preferences
            </p>
          </div>

          {/* Update Message */}
          {updateMessage && (
            <div style={{
              background: updateMessage.includes('Error') ? '#f8d7da' : '#d4edda',
              color: updateMessage.includes('Error') ? '#721c24' : '#155724',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              border: `1px solid ${updateMessage.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`
            }}>
              {updateMessage}
            </div>
          )}

          {/* Profile Card */}
          <div style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            
            {/* Profile Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #e1e5e9'
            }}>
              <div>
                <h2 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
                  {user.fullName}
                </h2>
                <p style={{ color: '#6c757d' }}>Member since {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#fff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
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
                    ✏️ Edit Profile
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={handleUpdateProfile}
                      style={{
                        background: '#28a745',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      💾 Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData(user);
                      }}
                      style={{
                        background: '#6c757d',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ❌ Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Information */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              
              {/* Personal Information */}
              <div>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem' }}>
                  📋 Personal Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #e1e5e9',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    ) : (
                      <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                        {user.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #e1e5e9',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    ) : (
                      <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                        {user.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #e1e5e9',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    ) : (
                      <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                        {user.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem' }}>
                  📦 Shipping Address
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                      Street Address
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="shippingAddress.streetAddress"
                        value={formData.shippingAddress.streetAddress}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #e1e5e9',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    ) : (
                      <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                        {user.shippingAddress.streetAddress}
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                        City
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="shippingAddress.city"
                          value={formData.shippingAddress.city}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem',
                            fontSize: '1rem'
                          }}
                        />
                      ) : (
                        <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                          {user.shippingAddress.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                        State
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="shippingAddress.state"
                          value={formData.shippingAddress.state}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem',
                            fontSize: '1rem'
                          }}
                        />
                      ) : (
                        <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                          {user.shippingAddress.state}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                        Country
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="shippingAddress.country"
                          value={formData.shippingAddress.country}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem',
                            fontSize: '1rem'
                          }}
                        />
                      ) : (
                        <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                          {user.shippingAddress.country}
                        </p>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                        Postal Code
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="shippingAddress.postalCode"
                          value={formData.shippingAddress.postalCode}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem',
                            fontSize: '1rem'
                          }}
                        />
                      ) : (
                        <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                          {user.shippingAddress.postalCode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e1e5e9' }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem' }}>
                🔐 Account Information
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                    Account Created
                  </label>
                  <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#495057' }}>
                    Last Login
                  </label>
                  <p style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '0.5rem', margin: 0 }}>
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
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
              🛍️ Continue Shopping
            </button>

            <button
              onClick={() => setDeleteConfirm(!deleteConfirm)}
              style={{
                background: deleteConfirm ? '#dc3545' : '#6c757d',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {deleteConfirm ? '🗑️ Confirm Delete Account' : '🚪 Logout'}
            </button>

            {deleteConfirm && (
              <button
                onClick={() => setDeleteConfirm(false)}
                style={{
                  background: '#28a745',
                  color: '#fff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ✅ Cancel
              </button>
            )}
          </div>

          {/* Delete Confirmation */}
          {deleteConfirm && (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#856404', margin: 0 }}>
                ⚠️ Warning: This action will permanently delete your account and all associated data. 
                This action cannot be undone.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile; 