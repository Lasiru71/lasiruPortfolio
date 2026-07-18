import React, { useState } from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/constants';

// Project Screenshots Import
import customerCareImg from '../../assets/images/customer_care.png';
import productManagementImg from '../../assets/images/product_management.png';
import learningSystemImg from '../../assets/images/learning_system.png';
import smartCampusImg from '../../assets/images/smart_campus.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Unlock scroll
  };

  const projectImages = [
    customerCareImg,
    productManagementImg,
    learningSystemImg,
    smartCampusImg
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-preview-area">
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title} 
                  className="proj-preview-img" 
                />
                <span className="project-year-badge">{project.year}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="proj-btn btn-details" onClick={() => openDetails(project)}>
                    View Details
                  </button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-btn btn-github">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Interactive Modal overlay */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeDetails}>
          <div className="project-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeDetails}>&times;</button>
            <span className="modal-year">{selectedProject.year}</span>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-section">
              <h4>Technologies Used</h4>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h4>Key Features</h4>
              <ul className="modal-features-list">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-btn btn-github">
                Visit GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
