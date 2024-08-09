import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/Matrix.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="brand">
      <img src={logo} alt="Marix Logo" className="logo" />
      <span className="brand-name">MATRIX</span>
    </div>
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Sign up</Link>
    </div>
    <div className="search-cart">
      <input type="text" className="search-bar" placeholder="Search..." />
      <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
    </div>
  </div>
  
  );
}

export default Navbar;
