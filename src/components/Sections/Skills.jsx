import React from 'react';
import './Skills.css';
import { SKILL_CATEGORIES } from '../../utils/constants';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="skills-category-card glass-card">
              <h3>{category.title}</h3>
              <div className="skill-items-list">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-progress-wrapper">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
