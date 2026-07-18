import React, { useState, useEffect } from 'react';
import './Footer.css';
import { PERSONAL_INFO } from '../../utils/constants';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              Lasiru<span>.</span>
            </a>
            <p className="footer-tagline">{PERSONAL_INFO.headline}</p>
          </div>

          <div className="footer-socials">
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
            <a href={`mailto:${PERSONAL_INFO.socials.email}`} aria-label="Email">EM</a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top Button */}
      <button 
        className={`back-to-top ${showButton ? 'show' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Back to Top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
};

export default Footer;
