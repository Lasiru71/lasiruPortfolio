import React, { useState } from 'react';
import './Contact.css';
import Button from '../Common/Button';
import { PERSONAL_INFO } from '../../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info-column">
            <h3>Let's Connect</h3>
            <p>
              I am open to technical internships, entry-level IT positions, support projects, 
              or database management discussions. Send a message, call, or email directly.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item glass-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="detail-texts">
                  <span className="detail-label">Email Me</span>
                  <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="detail-value">{PERSONAL_INFO.socials.email}</a>
                </div>
              </div>

              <div className="contact-detail-item glass-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="detail-texts">
                  <span className="detail-label">Call Me</span>
                  <a href={`tel:${PERSONAL_INFO.socials.phone}`} className="detail-value">{PERSONAL_INFO.socials.phone}</a>
                </div>
              </div>

              <div className="contact-detail-item glass-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="detail-texts">
                  <span className="detail-label">LinkedIn</span>
                  <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="detail-value">linkedin.com/in/lasiru-hemasiri</a>
                </div>
              </div>
            </div>

            {/* Stylized Google Map Visual Placeholder */}
            <div className="contact-map-placeholder glass-card">
              <div className="map-grid-pattern">
                <div className="map-radar"></div>
                <div className="map-marker-pin"></div>
                <div className="map-text">SLIIT | Malabe, Sri Lanka</div>
              </div>
            </div>
          </div>

          <div className="contact-form-column">
            {submitted ? (
              <div className="form-submit-success glass-card">
                <div className="success-icon-badge">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4>Message Received!</h4>
                <p>Thank you for reaching out, Lasiru. I will review your query and respond shortly.</p>
              </div>
            ) : (
              <form className="contact-responsive-form glass-card" onSubmit={handleSubmit}>
                <h3>Send Message</h3>
                <div className="form-double-row">
                  <div className="form-input-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Subject Matter" 
                    required 
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="6" 
                    placeholder="Type your message details here..." 
                    required
                  ></textarea>
                </div>

                <div className="form-action-btn">
                  <Button type="submit" variant="primary">Send Message</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
