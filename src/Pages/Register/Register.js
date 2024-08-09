import React from 'react';
import { Link } from 'react-router-dom';
import side from '../../Component/assets/SideImage.png';
import './Register.css';

const Register = () => {
  return (
    <div className="signup-wrapper1">
      <div className="right-image1">
        <img src={side} alt="Signup Illustration" />
      </div>
      <div className="login-container1">
        <h1>Log in to Matrix</h1>
        <h2>Enter your details </h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup"  className="account-link">Don't have an account? Register</Link>
      </div>
    </div>
  )
}

export default Register;
