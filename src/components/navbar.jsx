import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '600px',
        maxWidth: '650px',
        background: 'rgba(34,34,34,0.95)',
        color: '#fff',
        padding: '',
        zIndex: 1000,
        borderRadius: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
        display: 'flex',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #444'
      }}
    >
      <img 
        src="/src/assets/logo.png"
        alt="Logo"
        style={{ borderRadius: '2rem', height: '45px', marginRight: '1rem', flexShrink: 0 }}
      />
  <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <li>
          <a
            href="/"
            style={{
              color: window.location.pathname === '/' ? 'var(--gold)' : '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: window.location.pathname === '/' ? 'bold' : 'normal'
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
              href="/about" 
              style={{ 
                color: window.location.pathname === '/about' ? 'var(--gold)' : '#fff',
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: window.location.pathname === '/' ? 'bold' : 'normal'}}>
            About
          </a>
        </li>
        <li>
          <a 
              href="/contact" 
              style={{ 
                color: window.location.pathname === '/contact' ? 'var(--gold)': '#fff',
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: window.location.pathname === '/' ? 'bold' : 'normal'}}>
            Contact Us
          </a>
        </li>
        <li>
          <p
            style={{ 
              color: '#a7dee0ff',
              textDecoration: 'none', 
              fontSize: '1.2rem', 
              fontWeight: 'normal'}}>
            {import.meta.env.VITE_GUNDO_PHONE}
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;