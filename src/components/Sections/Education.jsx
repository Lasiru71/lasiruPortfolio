import React from 'react';
import './Education.css';
import { EDUCATION } from '../../utils/constants';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="education-timeline">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="edu-timeline-item">
              <div className="edu-timeline-icon">
                {/* Graduation Cap SVG */}
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <div className="edu-timeline-content glass-card">
                <span className="edu-duration">{edu.duration}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-status-badge">
                  <span className="badge-dot"></span>
                  <span>{edu.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
