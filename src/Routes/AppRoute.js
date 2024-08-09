import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../Component/Header/Home/Home';
import Contact from '../Component/Header/Contact/Contact';
import About from '../Component/Header/About/About';
import Signup from '../Pages/Signup/Signup';
import Register from '../Pages/Register/Register';
import Cart from '../Component/Header/Cart/Cart';
import ProductDetail from '../Component/Header/ProductDetail/ProductDetail'; // Add this import

const AppRoute = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this route */}
  </RouterRoutes>
);

export default AppRoute;
