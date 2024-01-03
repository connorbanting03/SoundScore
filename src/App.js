import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discovery from './components/Discovery/discovery.js';
import TopRated from './components/TopRated/TopRated.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TopRated />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Discovery" element={<Discovery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
