import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Login from './User/Login';
import Register from './User/Register';
import AdminLogin from './User/AdminLogin';
import ItemAdd from './item/itemadd';
import Item from './item/item';
import AdminHome from './adminhome';
import AdminDisplay from './item/admindisplay';
import UserView from './admin/userview';
import Home from './item/home';
import UserProfile from './User/UserProfile';
import Cart from './Cart';
import About from './About';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/item/add" element={<ItemAdd />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/item/admin" element={<AdminDisplay />} />
          <Route path="/admin/users" element={<UserView />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;