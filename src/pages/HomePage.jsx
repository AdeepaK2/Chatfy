// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Chatfy</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default HomePage;
