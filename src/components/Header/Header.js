import React, { useState } from 'react';
import './Header.css';
import Logo from '../Images/Logo.jpeg';
import Login from '../Login/Login.js';
import SearchBar from '../SearchBar/SearchBar.js'; 
//Header function
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };
  const onSearch = (data) => {
    console.log(data)
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="title">SoundScore</h1>
      </div>
      <nav className="nav">
        <a href='#' onClick={openLogin}>
          Sign In
        </a>
        <a href="/">Create Account</a>
        <a href="/Discovery">Discover</a>
        <a href="/TopRated">Top Rated</a>
      </nav>

      <SearchBar onSearch={onSearch} />

      {isLoginOpen && <Login onClose={closeLogin} />}
    </div>
  );
};

export default Header;