import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Base from './pages/base';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer';

const Apsatl = () => {
  return (
    <div className="app">
      <Base>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Base>
      <Footer />
    </div>
  );
};

export default Apsatl;