import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { addToCart, getTotalItems } = useCart();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('/api/items');
      if (res.ok) {
        setItems(await res.json());
      }
    };
    fetchItems();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`Added ${item.name} to cart!`);
    setTimeout(() => setMessage(''), 1200);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div style={{ 
        flex: 1,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: '#fff',
        padding: '3rem 0'
      }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            letterSpacing: '2px',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            Welcome to MCity
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            maxWidth: '700px', 
            textAlign: 'center', 
            margin: '0 auto 2rem auto',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Discover amazing products and enjoy secure shopping with our vibrant community!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(0)';
            }}>
              🛍️ Start Shopping
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.5)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}>
              📖 Learn More
            </button>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div style={{ 
            textAlign: 'center', 
            color: '#fff', 
            marginBottom: '2rem',
            background: 'rgba(255,255,255,0.2)',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            maxWidth: '400px',
            margin: '0 auto 2rem auto',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>✅ {message}</span>
          </div>
        )}

        {/* Products Section */}
        <div style={{ 
          maxWidth: 1400, 
          margin: '0 auto', 
          padding: '0 2rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '2rem'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem', 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Our Featured Products
          </h2>
          
          {items.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              background: 'rgba(255,255,255,0.1)', 
              padding: '3rem', 
              borderRadius: '1.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📦</div>
              <p style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>No products available yet</p>
              <p style={{ fontSize: '1rem', opacity: 0.8 }}>Check back soon for amazing deals!</p>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              justifyContent: 'center'
            }}>
              {items.map(item => (
                <div key={item._id} style={{ 
                  background: 'rgba(255,255,255,0.15)', 
                  borderRadius: '1.5rem', 
                  backdropFilter: 'blur(15px)',
                  padding: '1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* Product Image */}
                  {item.image && (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      border: '2px solid rgba(255,255,255,0.3)',
                      position: 'relative'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  )}

                  {/* Product Info */}
                  <h3 style={{ 
                    color: '#fff', 
                    marginBottom: '0.5rem', 
                    textAlign: 'center', 
                    fontSize: '1.4rem', 
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {item.name}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '500'
                  }}>
                    <span>💰 ${item.price}</span>
                    <span>📦 {item.quantity} left</span>
                  </div>
                  
                  <p style={{ 
                    margin: '0 0 1.5rem 0', 
                    color: '#fff', 
                    textAlign: 'center', 
                    opacity: 0.9,
                    lineHeight: '1.5',
                    fontSize: '0.95rem'
                  }}>
                    {item.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.75rem', 
                    width: '100%'
                  }}>
                    <button 
                      onClick={() => navigate(`/item/${item._id}`)}
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '0.75rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      👁️ View Details
                    </button>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '0.75rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home; 