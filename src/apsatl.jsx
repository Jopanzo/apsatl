import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';

const Apsatl = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  let Content = Home;
  if (path === '/about') Content = About;

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(/src/assets/roof1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1, minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textShadow: '0 2px 8px #000', paddingTop: '120px' }}>
        <Content />
      </div>
    </div>
  );
};

export default Apsatl;