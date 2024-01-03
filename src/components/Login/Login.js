import React, {useState} from 'react';
import './Login.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=1681b71455144d46a7cfe3599b203c0a&response_type=code&redirect_uri=http://localhost:3000&scope=app-remote-control%20user-read-private%20user-read-email";

const Login = ({ onClose }) => {
    return (
      <div className="login-popup">
        <div className="login-content">
        <a href={AUTH_URL}>
        Login With Spotify
         </a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };



export default Login;