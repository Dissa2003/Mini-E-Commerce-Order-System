import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { getTotalItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const userDataFromStorage = localStorage.getItem('userData');
      
      if (token && userDataFromStorage) {
        setIsLoggedIn(true);
        setUserData(JSON.parse(userDataFromStorage));
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    checkAuthStatus();

    // Listen for storage changes
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .navbar {
            transition: all 0.3s ease;
            animation: slideDown 0.5s ease-out;
          }
          
          .navbar-scrolled {
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          
          .nav-link {
            position: relative;
            transition: all 0.3s ease;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .dropdown-menu {
            animation: fadeIn 0.3s ease-out;
          }
          
          .search-bar {
            animation: fadeIn 0.3s ease-out;
          }
          
          .notification-badge {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #e1e5e9',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Logo Section */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                M
              </div>
              <h1 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                margin: 0,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                MCity
              </h1>
            </div>
          </Link>

          {/* Search Bar */}
          <div style={{ flex: 1, maxWidth: '500px', margin: '0 2rem' }}>
            <form onSubmit={handleSearch} style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, and more..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '2rem',
                  border: '2px solid #e1e5e9',
                  fontSize: '0.9rem',
                  background: '#f8f9fa',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.background = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e1e5e9';
                  e.target.style.background = '#f8f9fa';
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.1rem',
                  color: '#667eea',
                  cursor: 'pointer'
                }}
              >
                🔍
              </button>
            </form>
          </div>

          {/* Main Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Link to="/about" className="nav-link" style={{ 
              color: '#2c3e50', 
              textDecoration: 'none', 
              fontWeight: '500', 
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}>
              About
            </Link>
            <Link to="/help" className="nav-link" style={{ 
              color: '#2c3e50', 
              textDecoration: 'none', 
              fontWeight: '500', 
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}>
              Help
            </Link>

            {/* Notifications */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #e1e5e9',
                  color: '#2c3e50',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#e9ecef';
                  e.target.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.borderColor = '#e1e5e9';
                }}
              >
                🔔 Notifications
                <span className="notification-badge" style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  background: '#dc3545',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '0.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  3
                </span>
              </button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  background: '#fff',
                  border: '1px solid #e1e5e9',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  minWidth: '280px',
                  zIndex: 1001,
                  marginTop: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    padding: '1rem', 
                    borderBottom: '1px solid #e1e5e9',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff'
                  }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>🔔 Notifications</h4>
                  </div>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <div style={{ 
                      padding: '1rem', 
                      borderBottom: '1px solid #f8f9fa',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                      <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: '#2c3e50', fontWeight: '500' }}>
                        🎉 New deal available!
                      </p>
                      <small style={{ color: '#6c757d', fontSize: '0.8rem' }}>2 minutes ago</small>
                    </div>
                    <div style={{ 
                      padding: '1rem', 
                      borderBottom: '1px solid #f8f9fa',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                      <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: '#2c3e50', fontWeight: '500' }}>
                        📦 Your order has shipped
                      </p>
                      <small style={{ color: '#6c757d', fontSize: '0.8rem' }}>1 hour ago</small>
                    </div>
                    <div style={{ 
                      padding: '1rem',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                      <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: '#2c3e50', fontWeight: '500' }}>
                        💳 Payment confirmed
                      </p>
                      <small style={{ color: '#6c757d', fontSize: '0.8rem' }}>3 hours ago</small>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My MCity - Only show when logged in */}
            {isLoggedIn && (
              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid #e1e5e9',
                    color: '#2c3e50',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e9ecef';
                    e.target.style.borderColor = '#667eea';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.borderColor = '#e1e5e9';
                  }}
                >
                  👤 {userData?.fullName?.split(' ')[0] || 'My MCity'}
                </button>
                
                {/* My MCity Dropdown */}
                {showDropdown && (
                  <div className="dropdown-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: '#fff',
                    border: '1px solid #e1e5e9',
                    borderRadius: '0.75rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    minWidth: '220px',
                    zIndex: 1001,
                    marginTop: '0.5rem',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      padding: '1rem', 
                      borderBottom: '1px solid #e1e5e9',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#fff'
                    }}>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>👤 My Account</h4>
                      <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', opacity: 0.9 }}>
                        {userData?.email}
                      </p>
                    </div>
                    <div style={{ padding: '0.5rem 0' }}>
                      {[
                        { to: '/profile', icon: '👤', text: 'Profile' },
                        { to: '/orders', icon: '📦', text: 'My Orders' },
                        { to: '/wishlist', icon: '❤️', text: 'Wishlist' },
                        { to: '/settings', icon: '⚙️', text: 'Settings' }
                      ].map((item, index) => (
                        <div key={index} style={{ 
                          padding: '0.75rem 1rem',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                          <Link to={item.to} style={{ 
                            color: '#2c3e50', 
                            textDecoration: 'none', 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '500',
                            fontSize: '0.9rem'
                          }}>
                            <span>{item.icon}</span>
                            {item.text}
                          </Link>
                        </div>
                      ))}
                      <div style={{ 
                        padding: '0.75rem 1rem',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        borderTop: '1px solid #e1e5e9',
                        marginTop: '0.5rem'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      onClick={handleLogout}>
                        <div style={{ 
                          color: '#dc3545', 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: '500',
                          fontSize: '0.9rem'
                        }}>
                          <span>🚪</span>
                          Logout
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cart */}
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <button style={{
                background: '#f8f9fa',
                border: '1px solid #e1e5e9',
                color: '#2c3e50',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#e9ecef';
                e.target.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f8f9fa';
                e.target.style.borderColor = '#e1e5e9';
              }}>
                🛒 Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
              </button>
            </Link>

            {/* Sign In / Register - Only show when NOT logged in */}
            {!isLoggedIn && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: '#f8f9fa',
                    border: '1px solid #e1e5e9',
                    color: '#2c3e50',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e9ecef';
                    e.target.style.borderColor = '#667eea';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.borderColor = '#e1e5e9';
                  }}>
                    Sign In
                  </button>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
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
                  }}>
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;