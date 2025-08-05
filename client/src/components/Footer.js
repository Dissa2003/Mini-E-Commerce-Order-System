import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('US');
  const [language, setLanguage] = useState('English');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer style={{
      background: '#fff',
      color: '#2c3e50',
      padding: '3rem 2rem 1rem',
      marginTop: 'auto',
      borderTop: '1px solid #e1e5e9',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* 1. About the Company */}
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>About MCity</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/about-us" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/our-story" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Our Story
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/careers" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/press" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Press / Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Customer Support */}
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Customer Support</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/contact" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Contact Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/faqs" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  FAQs
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/return-policy" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Return & Refund Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/shipping" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}>
                  Shipping Information
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/track-order" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Order Tracking
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/payment-methods" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/shop" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Shop All Products
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/new-arrivals" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  New Arrivals
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/best-sellers" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Best Sellers
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/deals" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Offers & Deals
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/gift-cards" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Gift Cards
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/size-guide" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Legal Information */}
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/privacy-policy" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/terms" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Terms & Conditions
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/cookie-policy" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Cookie Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/disclaimer" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d' }}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Newsletter Signup */}
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Stay Updated</h3>
            <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Get the latest deals and updates in your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #e1e5e9',
                    background: '#f8f9fa',
                    color: '#2c3e50',
                    fontSize: '0.9rem',
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
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
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
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#6c757d', 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6c757d';
                  e.target.style.transform = 'scale(1)';
                }}>
                  📘
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#6c757d', 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6c757d';
                  e.target.style.transform = 'scale(1)';
                }}>
                  📷
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#6c757d', 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6c757d';
                  e.target.style.transform = 'scale(1)';
                }}>
                  🐦
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#6c757d', 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6c757d';
                  e.target.style.transform = 'scale(1)';
                }}>
                  💼
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#6c757d', 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6c757d';
                  e.target.style.transform = 'scale(1)';
                }}>
                  🎵
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Security Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          padding: '1.5rem 0',
          borderTop: '1px solid #e1e5e9',
          borderBottom: '1px solid #e1e5e9',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          background: '#f8f9fa',
          borderRadius: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🔒</span>
            <span style={{ fontSize: '0.8rem', color: '#6c757d', fontWeight: '500' }}>SSL Secure Shopping</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>💳</span>
            <span style={{ fontSize: '0.8rem', color: '#6c757d', fontWeight: '500' }}>Visa • MasterCard • PayPal</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>⭐</span>
            <span style={{ fontSize: '0.8rem', color: '#6c757d', fontWeight: '500' }}>Verified by Trustpilot</span>
          </div>
        </div>

        {/* Mobile App Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#2c3e50',
              color: '#fff',
              border: '1px solid #2c3e50',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#667eea';
              e.target.style.borderColor = '#667eea';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#2c3e50';
              e.target.style.borderColor = '#2c3e50';
              e.target.style.transform = 'translateY(0)';
            }}>
              📱 Download on App Store
            </button>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#2c3e50',
              color: '#fff',
              border: '1px solid #2c3e50',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#667eea';
              e.target.style.borderColor = '#667eea';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#2c3e50';
              e.target.style.borderColor = '#2c3e50';
              e.target.style.transform = 'translateY(0)';
            }}>
              🤖 Get it on Google Play
            </button>
          </a>
        </div>

        {/* Location / Language Switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#6c757d', fontWeight: '500' }}>Region:</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              style={{
                background: '#f8f9fa',
                color: '#2c3e50',
                border: '1px solid #e1e5e9',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
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
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#6c757d', fontWeight: '500' }}>Language:</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                background: '#f8f9fa',
                color: '#2c3e50',
                border: '1px solid #e1e5e9',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
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
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>

        {/* Copyright & Developer Credit */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid #e1e5e9',
          position: 'relative'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#6c757d' }}>
              © 2025 MCity. All rights reserved.
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
            <span>Developed with ❤️ by </span>
            <span style={{ fontWeight: 'bold', color: '#667eea' }}>Your Name</span>
            <span> | Full-Stack Developer</span>
          </div>
          
          {/* Admin Panel Button - Bottom Right Corner */}
          <div style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '0.5rem'
          }}>
            <Link to="/adminlogin">
              <button style={{ 
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
              }}
              >
                🔧
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 