import React from 'react';
import Navbar from '../components/navbar';

const Base = ({ children }) => {
  return (
    <div style={{ 
        backgroundColor: '#f0f0f0',
    }}>
      <Navbar />
      <main style={{ paddingTop: '50px' }}>{children}</main>
    </div>
  );
};

export default Base;
