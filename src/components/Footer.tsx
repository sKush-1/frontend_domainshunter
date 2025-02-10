import  { useState } from 'react';
import { CSSProperties } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerStyles: CSSProperties = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '20px',
    position: 'relative',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const contentContainerStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const companyInfoStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const titleStyles: CSSProperties = {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0'
  };

  const subtitleStyles: CSSProperties = {
    color: '#d1d5db',
    margin: '0'
  };

  const emailLinkStyles: CSSProperties = {
    color: '#d1d5db',
    textDecoration: 'none'
  };

  const emailFormContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const inputStyles: CSSProperties = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    width: '250px'
  };

  const buttonStyles: CSSProperties = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    width: 'fit-content',
    marginLeft: '10px'
  };

  const copyrightStyles: CSSProperties = {
    color: '#9ca3af',
    fontSize: '14px',
    marginTop: '20px'
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