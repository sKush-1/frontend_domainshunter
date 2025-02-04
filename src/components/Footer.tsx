import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerStyles = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '20px',
    position: 'relative',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const contentContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const companyInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0'
  };

  const subtitleStyles = {
    color: '#d1d5db',
    margin: '0'
  };

  const emailLinkStyles = {
    color: '#d1d5db',
    textDecoration: 'none'
  };

  const emailFormContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const inputStyles = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    width: '250px'
  };

  const buttonStyles = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    width: 'fit-content'
  };

  const copyrightStyles = {
    color: '#9ca3af',
    fontSize: '14px',
    marginTop: '20px'
  };

  const dividerStyles = {
    margin: '0 20px',
    color: '#d1d5db'
  };

  return (
    <footer style={footerStyles}>
      <div style={contentContainerStyles}>
        <div style={companyInfoStyles}>
          <h2 style={titleStyles}>Domains Hunter</h2>
          <p style={subtitleStyles}>Find your ideal domain name with ease.</p>
        </div>


        <a href="mailto:team@domainshunter.in" style={emailLinkStyles}>
          team@domainshunter.in
        </a>


        <div style={emailFormContainerStyles}>
          <label>Enter your email address</label>
          <div>
            <input
              type="email"
              placeholder="Your email for notifications"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyles}
            />
            <button style={buttonStyles}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={copyrightStyles}>
        © 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;