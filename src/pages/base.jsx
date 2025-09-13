import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Base = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      <main style={{ paddingTop: '70px', flex: '1 0 auto' }}>{children}</main>
    </div>
  );
};

export default Base;
