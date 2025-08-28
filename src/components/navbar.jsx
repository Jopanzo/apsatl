import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '320px',
        maxWidth: '600px',
        background: 'rgba(34,34,34,0.95)',
        color: '#fff',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderRadius: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #444'
      }}
    >
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '2rem' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>Home</a></li>
        <li><a href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
