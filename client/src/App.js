import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register';
import Homepage from './Homepage';
import ItemAdd from './item/itemadd';
import Item from './item/item';
import AdminHome from './adminhome';
import AdminDisplay from './item/admindisplay';
import UserView from './admin/userview';
import Home from './item/home';

// Placeholder Cart page
const Cart = () => (
  <div className="container fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
    <h2>Cart</h2>
    <p>Your cart is empty (implement cart functionality here).</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/item/add" element={<ItemAdd />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item/home" element={<Home />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/item/admin" element={<AdminDisplay />} />
        <Route path="/admin/users" element={<UserView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;