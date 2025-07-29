import React from 'react';
import { useCart } from './context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Your Cart</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '2rem' }}>Your cart is empty</p>
        <p style={{ color: '#999' }}>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="container fade-in" style={{ maxWidth: 800, margin: '2rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Your Cart</h2>
        <button 
          onClick={clearCart}
          style={{ 
            background: '#e53935', 
            color: '#fff',
            border: 'none',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer'
          }}
        >
          Clear Cart
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map(item => (
          <div key={item._id} style={{ 
            background: '#fff', 
            borderRadius: '1rem', 
            padding: '1.5rem', 
            boxShadow: '0 2px 8px rgba(38,50,56,0.04)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            {item.image && (
              <img 
                src={item.image} 
                alt={item.name}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'cover', 
                  borderRadius: '0.5rem',
                  flexShrink: 0
                }}
              />
            )}
            
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#2575fc', marginBottom: '0.5rem' }}>{item.name}</h3>
              <p style={{ color: '#555', marginBottom: '0.5rem' }}>{item.description}</p>
              <p style={{ fontWeight: 'bold', color: '#2575fc' }}>${item.price}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                  style={{ 
                    background: '#f0f0f0', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '30px', 
                    height: '30px',
                    cursor: 'pointer'
                  }}
                >
                  -
                </button>
                <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                  style={{ 
                    background: '#f0f0f0', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '30px', 
                    height: '30px',
                    cursor: 'pointer'
                  }}
                >
                  +
                </button>
              </div>
              
              <div style={{ textAlign: 'right', minWidth: '80px' }}>
                <p style={{ fontWeight: 'bold', color: '#2575fc' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button 
                onClick={() => removeFromCart(item._id)}
                style={{ 
                  background: '#e53935', 
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        background: '#f5f7fa', 
        borderRadius: '1rem', 
        padding: '2rem', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#2575fc', marginBottom: '1rem' }}>Order Summary</h3>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Total: ${getTotalPrice().toFixed(2)}
        </p>
        <button 
          style={{ 
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 