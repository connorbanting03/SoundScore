import React from 'react';
import './Header.css'; // You can create a separate CSS file for styling
import Logo from '../Images/Logo.jpeg'
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="title">SoundScore</h1>
      </div>
      <nav className="nav">
        <a href="/">Sign In</a>
        <a href="/">Create Account</a>
        <a href="/">Discover</a>
        <a href="/">Top Rated</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;