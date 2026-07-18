import React, { useState, useEffect } from 'react';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Education from './components/Sections/Education';
import Skills from './components/Sections/Skills';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
