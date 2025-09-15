import React, { useState } from 'react';
import './css/contactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // replace with real submit logic (fetch/axios) when ready
    // For now just log and reset
    console.log('Contact form submitted', form);
    setForm({ name: '', email: '', message: '' });
    alert('Message sent (demo)');
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: '0 auto', padding: '1rem' }}>
      <div style={{ marginBottom: '.75rem' }}>
        <label style={{ display: 'block', marginBottom: '.25rem' }}>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '.5rem' }} />
      </div>

      <div style={{ marginBottom: '.75rem' }}>
        <label style={{ display: 'block', marginBottom: '.25rem' }}>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '.5rem' }} />
      </div>

      <div style={{ marginBottom: '.75rem' }}>
        <label style={{ display: 'block', marginBottom: '.25rem' }}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={6} style={{ width: '100%', padding: '.5rem' }} />
      </div>

      <div>
        <button className="contact-button" type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;