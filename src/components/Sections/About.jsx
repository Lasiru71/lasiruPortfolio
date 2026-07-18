import React from 'react';
import './About.css';
import { PERSONAL_INFO, ABOUT_TECH, ABOUT_FAMILIAR } from '../../utils/constants';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content-grid">
          <div className="about-card bio-card">
            <h3>Who I Am</h3>
            <p className="highlight-text">
              Motivated Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT).
            </p>
            <p className="bio-desc">
              With a strong interest in IT Support, Technical Support, Database Management, and Software Development, 
              I am dedicated to solving complex problems, setting up efficient database layers, and ensuring client systems 
              stay operational. My academic track record reflects hands-on experience developing database-backed web platforms 
              and managing networks.
            </p>
            
            <div className="career-objective">
              <h4>Career Objective</h4>
              <p>{PERSONAL_INFO.careerObjective}</p>
            </div>
          </div>

          <div className="about-tech-stack">
            <div className="tech-box glass-card">
              <h3>Academic Projects Tech</h3>
              <p className="tech-sub">Languages & frameworks utilized in software solutions:</p>
              <div className="tech-tags">
                {ABOUT_TECH.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-box glass-card">
              <h3>Familiar Systems & Concepts</h3>
              <p className="tech-sub">IT administration, tools, and theoretical principles:</p>
              <div className="tech-tags">
                {ABOUT_FAMILIAR.map((item, index) => (
                  <span key={index} className="familiar-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
