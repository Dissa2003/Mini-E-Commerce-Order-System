import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Simulate API call - in real app, fetch from backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get users from localStorage (registration data)
      const userData = localStorage.getItem('userData');
      const mockUsers = userData ? [JSON.parse(userData)] : [
        {
          _id: 'user_1',
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
          lastLogin: '2024-01-20T14:45:00Z',
          status: 'active'
        },
        {
          _id: 'user_2',
          fullName: 'Jane Smith',
          email: 'jane.smith@example.com',
          phoneNumber: '+1 (555) 987-6543',
          shippingAddress: {
            streetAddress: '456 Oak Avenue',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA',
            postalCode: '90210'
          },
          createdAt: '2024-01-10T08:15:00Z',
          lastLogin: '2024-01-19T16:30:00Z',
          status: 'active'
        },
        {
          _id: 'user_3',
          fullName: 'Mike Johnson',
          email: 'mike.johnson@example.com',
          phoneNumber: '+1 (555) 456-7890',
          shippingAddress: {
            streetAddress: '789 Pine Street',
            city: 'Chicago',
            state: 'IL',
            country: 'USA',
            postalCode: '60601'
          },
          createdAt: '2024-01-05T12:00:00Z',
          lastLogin: '2024-01-18T09:45:00Z',
          status: 'inactive'
        }
      ];
      
      // Ensure all users have proper shippingAddress structure
      const processedUsers = mockUsers.map(user => ({
        ...user,
        shippingAddress: user.shippingAddress || {
          streetAddress: user.streetAddress || 'No address provided',
          city: user.city || 'No city provided',
          state: user.state || 'No state provided',
          country: user.country || 'No country provided',
          postalCode: user.postalCode || 'No postal code provided'
        },
        status: user.status || 'active'
      }));
      
      setUsers(processedUsers);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchUsers(); 
  }, []);

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm({
      fullName: user.fullName || '',
      email: user.email || '',
      phoneNumber: user.phoneNumber || '',
      shippingAddress: { 
        streetAddress: user.shippingAddress?.streetAddress || user.streetAddress || '',
        city: user.shippingAddress?.city || user.city || '',
        state: user.shippingAddress?.state || user.state || '',
        country: user.shippingAddress?.country || user.country || '',
        postalCode: user.shippingAddress?.postalCode || user.postalCode || ''
      }
    });
  };

  const handleUpdate = async (id) => {
    try {
      setMessage('Updating user...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUsers(prev => prev.map(user => 
        user._id === id ? { ...user, ...form } : user
      ));
      
      setMessage('User updated successfully!');
      setEditId(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Update failed. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      try {
        setMessage('Deleting user...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUsers(prev => prev.filter(user => user._id !== id));
        setMessage('User deleted successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage('Delete failed. Please try again.');
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
            <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>Loading users...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
   
      
      <div style={{ flex: 1, padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2c3e50',
              marginBottom: '0.5rem'
            }}>
              👥 User Management
            </h1>
            <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Manage all registered users and their information
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#2c3e50' }}>Total Users</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', margin: 0 }}>
                {users.length}
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#2c3e50' }}>Active Users</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745', margin: 0 }}>
                {users.filter(u => u.status === 'active').length}
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❌</div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#2c3e50' }}>Inactive Users</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545', margin: 0 }}>
                {users.filter(u => u.status === 'inactive').length}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e1e5e9',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: '0.75rem',
                border: '1px solid #e1e5e9',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                background: '#fff'
              }}
            >
              <option value="all">All Users</option>
              <option value="active">Active Users</option>
              <option value="inactive">Inactive Users</option>
            </select>
            <button
              onClick={fetchUsers}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🔄 Refresh
            </button>
          </div>

          {/* Message */}
          {message && (
            <div style={{
              background: message.includes('successfully') ? '#d4edda' : '#f8d7da',
              color: message.includes('successfully') ? '#155724' : '#721c24',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {message}
            </div>
          )}

          {/* Users List */}
          <div style={{
            display: 'grid',
            gap: '1.5rem'
          }}>
            {filteredUsers.map(user => (
              <div key={user._id} style={{
                background: '#fff',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid #e1e5e9'
              }}>
                {editId === user._id ? (
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          Full Name
                        </label>
                        <input
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          Email
                        </label>
                        <input
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem'
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          Phone Number
                        </label>
                        <input
                          value={form.phoneNumber}
                          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          Street Address
                        </label>
                        <input
                          value={form.shippingAddress?.streetAddress || ''}
                          onChange={(e) => setForm({ 
                            ...form, 
                            shippingAddress: { 
                              ...form.shippingAddress, 
                              streetAddress: e.target.value 
                            } 
                          })}
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e1e5e9',
                            borderRadius: '0.5rem'
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleUpdate(user._id)}
                        style={{
                          background: '#28a745',
                          color: '#fff',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        💾 Save Changes
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        style={{
                          background: '#6c757d',
                          color: '#fff',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* User Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid #e1e5e9'
                    }}>
                      <div>
                        <h3 style={{ margin: '0 0 0.5rem', color: '#2c3e50' }}>
                          {user.fullName}
                        </h3>
                        <p style={{ margin: 0, color: '#6c757d' }}>
                          {user.email}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          background: user.status === 'active' ? '#d4edda' : '#f8d7da',
                          color: user.status === 'active' ? '#155724' : '#721c24'
                        }}>
                          {user.status === 'active' ? '✅ Active' : '❌ Inactive'}
                        </span>
                        <button
                          onClick={() => handleEdit(user)}
                          style={{
                            background: '#667eea',
                            color: '#fff',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          style={{
                            background: '#dc3545',
                            color: '#fff',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>

                    {/* User Details */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>📞 Contact Information</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            <strong>Phone:</strong> {user.phoneNumber}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            <strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            <strong>Last login:</strong> {new Date(user.lastLogin).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>📦 Shipping Address</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            {user.shippingAddress?.streetAddress || 'No address provided'}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            {user.shippingAddress?.city || 'No city'}, {user.shippingAddress?.state || 'No state'} {user.shippingAddress?.postalCode || 'No postal code'}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            {user.shippingAddress?.country || 'No country'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div style={{
              background: '#fff',
              padding: '3rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>No users found</h3>
              <p style={{ color: '#6c757d' }}>
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'No users have registered yet.'}
              </p>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default UserView; 