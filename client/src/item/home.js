import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', color: '#fff', position: 'relative' }}>
      {/* Cart Button */}
      <Link to="/cart" style={{ position: 'absolute', top: 30, right: 40, zIndex: 10 }}>
        <button style={{ 
          borderRadius: '2rem', 
          padding: '0.5rem 1.5rem', 
          fontWeight: 'bold', 
          fontSize: '1rem',
          position: 'relative'
        }}>
          🛒 Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
        </button>
      </Link>

      {/* Profile Button */}
      <Link to="/profile" style={{ position: 'absolute', top: 30, left: 40, zIndex: 10 }}>
        <button style={{ borderRadius: '2rem', padding: '0.5rem 1.5rem', fontWeight: 'bold', fontSize: '1rem' }}>👤 Profile</button>
      </Link>

      {/* System Name */}
      <div style={{ textAlign: 'center', paddingTop: '100px', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px' }}>MCity</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', textAlign: 'center', margin: '0 auto 2rem auto' }}>
          Discover amazing products and enjoy secure shopping with our vibrant community!
        </p>
      </div>

      {/* Message Display */}
      {message && (
        <div style={{ 
          textAlign: 'center', 
          color: '#fff', 
          marginBottom: '1rem',
          background: 'rgba(255,255,255,0.2)',
          padding: '0.5rem 1rem',
          borderRadius: '1rem',
          maxWidth: '300px',
          margin: '0 auto 2rem auto'
        }}>
          {message}
        </div>
      )}

      {/* Items Container */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>Our Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {items.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              background: 'rgba(255,255,255,0.1)', 
              padding: '2rem', 
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ fontSize: '1.2rem' }}>No items found.</p>
            </div>
          )}
          {items.map(item => (
            <div key={item._id} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '1.5rem', 
              backdropFilter: 'blur(10px)',
              padding: '1.5rem', 
              minWidth: 280, 
              maxWidth: 320, 
              flex: '1 1 280px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '1rem', 
                    marginBottom: '1rem',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }}
                />
              )}
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }}>{item.name}</h3>
              <p style={{ margin: 0, fontSize: '1.1rem' }}><b>Price:</b> ${item.price}</p>
              <p style={{ margin: 0, fontSize: '1.1rem' }}><b>Quantity:</b> {item.quantity}</p>
              <p style={{ margin: '0.5rem 0 1rem 0', color: '#fff', textAlign: 'center', opacity: 0.9 }}>{item.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                <button 
                  onClick={() => navigate(`/item/${item._id}`)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  }}
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleAddToCart(item)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 