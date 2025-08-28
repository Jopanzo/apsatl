import React from 'react';
import Navbar from './components/navbar';

const Main = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundImage: 'url(/src/assets/roof1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        zIndex: -1
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textShadow: '0 2px 8px #000' }}>
        <Navbar />
        <h1>APSATL Roofing</h1>
        <p> Your local roofing experts.</p>
      </div>
    </div>
  );
};

export default Main;