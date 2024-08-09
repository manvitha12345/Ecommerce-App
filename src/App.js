import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/Header/Navbar/Navbar';
import AppRoutes from './Routes/AppRoute'; // Ensure the path to AppRoute.js is correct

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="main-content">
        <AppRoutes />
      </div>
    </div>
  </Router>
);

export default App;
