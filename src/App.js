import './App.css';
import React from 'react';
import Discovery from './components/Discovery/discovery.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js'
function App() {
  return (
    <div className="App">
     <Header/>
     <Discovery/>
     <Footer/>
    </div>
  );
}

export default App;
