import React, { useState, useEffect } from 'react';
import './Hero.css';
import Button from '../Common/Button';
import { PERSONAL_INFO } from '../../utils/constants';
import profileImg from '../../assets/images/profile.jpg';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingWords = PERSONAL_INFO.typingWords;
  const typingSpeed = 100; // ms per char typing
  const deletingSpeed = 50; // ms per char deleting
  const wordDelay = 2000; // ms pause before deleting

  useEffect(() => {
    let timer;
    const currentWord = typingWords[currentWordIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Switch states based on complete text
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), wordDelay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % typingWords.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingWords]);

  return (
    <section id="hero" className="hero-section">
      {/* Moving gradients background */}
      <div className="hero-gradient-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <img src={profileImg} alt={PERSONAL_INFO.name} className="hero-avatar" />
            <div className="hero-avatar-glow"></div>
          </div>
        </div>

        <div className="hero-content">
          <span className="hero-greet">Welcome to my space</span>
          <h1 className="hero-title">{PERSONAL_INFO.name}</h1>
          
          <div className="hero-typewriter">
            <span>Specializing in </span>
            <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <h2 className="hero-headline">{PERSONAL_INFO.headline}</h2>
          <p className="hero-bio">{PERSONAL_INFO.subHeading}</p>
          
          <div className="hero-cta">
            <Button variant="primary" href={PERSONAL_INFO.cvUrl} download="Lasiru Hasaranga Hemasiri(CV).pdf">Download CV</Button>
            <Button variant="secondary" href="#projects">View Projects</Button>
            <Button variant="secondary" href="#contact">Contact Me</Button>
          </div>

          <div className="hero-socials">
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.socials.email}`} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Email">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About Me Section">
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
      </a>
    </section>
  );
};

export default Hero;
