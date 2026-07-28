import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { projects } from './data/projects';
import { projectDetails } from './data/details';
import { about } from './data/about';
import { skillCategories } from './data/skills';
import { useState, useEffect, useRef } from 'react'
import './App.css'
import CodeCard from './components/CodeCard'
import Starfield from './components/Starfield'
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activeSection, setActiveSection] = useState('intro')
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const [formStatus, setFormStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const recaptchaRef = useRef(null);

  useEffect(() => {
  const sections = ['intro', 'about', 'skills', 'projects', 'contact']

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      root: null,
      rootMargin: '-100px 0px -80% 0px', // treat the middle 20% of viewport as the "active zone"
      threshold: 0,
    }
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [])

  // Close the "View Code" dropdown when clicking anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div>
      <Starfield />
      <nav className={activeSection === 'intro' ? 'nav-hidden' : ''}>
        <div className="nav-links">
          <a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>

      <section id="intro">
        <h1>Hi there, I'm <span className="intro-name">Kobe</span> — nice to meet you.</h1>
        <p className="intro-tagline">Building web and AI/ML projects — from IoT dashboards to full-stack apps.</p>
        <p className="intro-role">DEVELOPER · AI/ML</p>

        <div className="intro-actions">
          <a href="#projects" className="intro-btn intro-btn-primary">
            View my work ↓
          </a>
          <a href="#contact" className="intro-btn intro-btn-secondary">
            Get in touch
          </a>
        </div>

        <a href="#about" className="scroll-cue" aria-label="Scroll to explore">
          <span>Scroll to explore</span>
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </section>

      <section id="about">
        <h2>About</h2>
        <div className="about-content">
          <div className="about-left">
            <div className="about-text">
            {/*<div className="about-photo-placeholder"></div>*/}
            <p className="about-greeting">{about.greeting}</p>
            <p className="about-role">{about.role}</p>
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <CodeCard />
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-card-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h4 className="skill-card-name">{skill.name}</h4>
                  <p className="skill-card-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>   

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div className="project-card" key={project.title} onClick={() => setSelectedProject(project)}>
                <div className="project-thumbnail">
                  {project.thumbnail && <img src={project.thumbnail} alt={project.title} />}
                </div>
                <h3>{project.title}</h3>
                {project.subtitle && <p className="project-subtitle" title={project.subtitle}>{project.subtitle}</p>}
                <p className="project-description" title={project.description}>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.length > 1 ? (
                    <div
                      className="code-dropdown"
                      ref={openDropdown === project.title ? dropdownRef : null}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        className="view-code-btn"
                        onClick={() =>
                          setOpenDropdown(openDropdown === project.title ? null : project.title)
                        }
                      >
                        <FaGithub />
                        View Code
                        <span className={`caret ${openDropdown === project.title ? 'open' : ''}`}>▾</span>
                      </button>

                      {openDropdown === project.title && (
                        <div className="code-dropdown-menu">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="single-code-link"
                      >
                        <FaGithub />
                        {link.label}
                      </a>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      
      <div className="contact-page">
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>Have a project in mind or just want to say hi? Feel free to reach out — I'm always open to new opportunities and conversations.</p>

            <div className="contact-detail">
              <span className="contact-label">Email</span>
              <a href="mailto:bautistakobe29@gmail.com">bautistakobe29@gmail.com</a>
            </div>

            <div className="contact-detail">
              <span className="contact-label">Location</span>
              <span>Philippines</span>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Kobe-15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sean-john-kobe-dee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:bautistakobe29@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              const recaptchaValue = recaptchaRef.current.getValue();

              if (!recaptchaValue) {
                setFormStatus('recaptcha-missing');
                return;
              }

              setFormStatus('sending');
              const formData = new FormData(e.target);

              try {
                const response = await fetch('https://formspree.io/f/mzdnklbv', {
                  method: 'POST',
                  body: formData,
                  headers: { 'Accept': 'application/json' },
                });

                if (response.ok) {
                  setFormStatus('success');
                  e.target.reset();
                  recaptchaRef.current.reset();
                } else {
                  setFormStatus('error');
                }
              } catch {
                setFormStatus('error');
              }
            }}
            >
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="your.email@example.com" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Tell me a bit about your project or just say hi" rows="5" required></textarea>

            <div className="recaptcha-wrapper">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div>

            <button type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending...' : 'Send message →'}
            </button>

            {formStatus === 'success' && <p className="form-status form-status-success">Message sent — thanks for reaching out!</p>}
            {formStatus === 'error' && <p className="form-status form-status-error">Something went wrong. Please try again.</p>}
            {formStatus === 'recaptcha-missing' && <p className="form-status form-status-error">Please complete the reCAPTCHA.</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#intro" className="back-to-top" aria-label="Back to top">↑</a>
        <p>Sean John Kobe B. Dee © 2026</p>
      </footer>
    </div>
      {selectedProject && (
        (() => {
          const details = projectDetails[selectedProject.title] || {}
          return (
            <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

                <div className="modal-screenshots">
                  {details.coverImage
                    ? <img className="modal-cover" src={details.coverImage} alt={`${selectedProject.title} cover`} />
                    : <div className="modal-cover-placeholder"><p>Cover image</p></div>
                  }
                </div>

                <h2>
                  {selectedProject.title}
                  {selectedProject.subtitle && `: ${selectedProject.subtitle}`}
                </h2>

                <div className="modal-section">
                  <h3>Overview</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-section">
                  <h3>{details.architectureLabel || 'System Architecture'}</h3>
                  {details.architecture?.length > 0 ? (
                    <div className="modal-flowchart-grid">
                      {details.architecture.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${details.architectureLabel || 'System Architecture'} ${i + 1}`}
                          onClick={() => setLightboxImage(src)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>[{details.architectureLabel || 'Architecture'} diagram goes here]</p>
                  )}
                </div>

                <div className="modal-section">
                  <h3>Screenshots</h3>

                  {details.screenshotsWeb?.length > 0 && (
                    <>
                      <h4>Web Dashboard</h4>
                      <div className="modal-screenshots-scroll">
                        {details.screenshotsWeb.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${selectedProject.title} web screenshot ${i + 1}`}
                            onClick={() => setLightboxImage(src)}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {details.screenshotsMobile?.length > 0 && (
                    <>
                      <h4>Mobile App</h4>
                      <div className="modal-screenshots modal-screenshots-mobile">
                        {details.screenshotsMobile.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${selectedProject.title} mobile screenshot ${i + 1}`}
                            onClick={() => setLightboxImage(src)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="modal-section">
                  <h3>My Role</h3>
                  <p>{details.role || '[Your role here]'}</p>
                </div>
                
                {details.team?.length > 0 && (
                  <div className="modal-section">
                    <h3>Team</h3>
                    <div className="modal-team-grid">
                      {details.team.map((member) => (
                        <div
                          key={member.name}
                          className={`modal-team-card${member.isMe ? ' is-me' : ''}`}
                        >
                          <p className="modal-team-name">{member.name}</p>
                          <p className="modal-team-role">{member.role}</p>
                          {member.isMe && <span className="modal-team-badge">Me</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-section">
                  <h3>Results</h3>
                  <p>{details.results || '[Key results here]'}</p>
                  {details.resultsImage && details.resultsImage.length > 0 && (
                    <div className="modal-screenshots">
                      {details.resultsImage.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Result ${i + 1}`}
                          style={{ borderRadius: '8px', cursor: 'pointer' }}
                          onClick={() => setLightboxImage(src)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="modal-section">
                  <h3>Tech Stack</h3>
                  <div className="modal-tags">
                    {selectedProject.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })()
      )}

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Expanded screenshot" className="lightbox-image" />
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>✕</button>
        </div>
      )}
    </div>
  )
}


export default App