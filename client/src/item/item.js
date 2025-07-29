import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`/api/items/${id}`);
      if (res.ok) {
        const data = await res.json();
        setItem(data);
      }
    };
    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(item);
    setMessage('Added to cart!');
    setTimeout(() => setMessage(''), 1200);
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container fade-in" style={{ maxWidth: 600, margin: '2rem auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {item.image && (
          <img 
            src={item.image} 
            alt={item.name}
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '1rem' 
            }}
          />
        )}
        <h2 style={{ textAlign: 'center' }}>{item.name}</h2>
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Quantity:</strong> {item.quantity}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {message && <p style={{ color: '#2575fc' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Item; 