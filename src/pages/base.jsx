import React from 'react';
import Navbar from '../components/navbar';

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Base;
