import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import CartContext from '../CartContext'; // To be created

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');
  // const { addToCart } = useContext(CartContext); // To be implemented

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
    // addToCart(item); // To be implemented
    setMessage('Added to cart!');
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Quantity:</strong> {item.quantity}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Item; 