import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
    // Placeholder for cart logic
    setMessage(`Added ${item.name} to cart!`);
    setTimeout(() => setMessage(''), 1200);
  };

  return (
    <div className="container fade-in" style={{ maxWidth: 1200, margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Items</h2>
      {message && <div style={{ textAlign: 'center', color: '#2575fc', marginBottom: '1rem' }}>{message}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {items.length === 0 && <p>No items found.</p>}
        {items.map(item => (
          <div key={item._id} style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(38,50,56,0.10)', padding: '1.5rem', minWidth: 280, maxWidth: 320, flex: '1 1 280px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {item.image && (
              <img 
                src={item.image} 
                alt={item.name}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '1rem', 
                  marginBottom: '1rem' 
                }}
              />
            )}
            <h3 style={{ color: '#2575fc', marginBottom: '0.5rem', textAlign: 'center' }}>{item.name}</h3>
            <p style={{ margin: 0 }}><b>Price:</b> ${item.price}</p>
            <p style={{ margin: 0 }}><b>Quantity:</b> {item.quantity}</p>
            <p style={{ margin: '0.5rem 0 1rem 0', color: '#555', textAlign: 'center' }}>{item.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => navigate(`/item/${item._id}`)}>View Details</button>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 