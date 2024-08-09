import React from 'react';
import { Link } from 'react-router-dom';
import side from '../../Component/assets/SideImage.png';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="right-image">
        <img src={side} alt="Signup Illustration" />
      </div>
      <div className="login-container">
        <h1>Create an Account for Ecommerce website</h1>
        <h2>Enter your details here</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Create account</button>
        </form>
        <div className="google-login">
          <button>Continue with Google</button>
        </div>
        <Link to="/register" className="account-link">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Signup;
