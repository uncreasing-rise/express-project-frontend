// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ApiList from './ApiList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/api-list">API List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api-list" element={<ApiList />} />
          <Route path="/" element={<h2>Welcome to My App</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
