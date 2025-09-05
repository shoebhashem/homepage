import React from 'react';
import './App.css';

function HomePage() {
  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <h1>Shoeb Hashem</h1>
          <h2>MSc in Software Engineering | Software Developer (Automotive Industry)</h2>
        </div>
      </header>

      <main>
        <div className="homepage">
          <section className="section contact-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <p>Email: <a href="mailto:shoeb.hashem@gmail.com">shoeb.hashem@gmail.com</a></p>
              <p>Phone: <a href="tel:+46737136618">+46 73 713 6618</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/shoebhashem" target="_blank" rel="noopener noreferrer">linkedin.com/in/shoebhashem</a></p>
              <p>Location: Gothenburg, Sweden</p>
            </div>
          </section>

          <section className="section projects-section">
            <h3>Projects</h3>
            <ul className="project-list">
              <li>
                <span>Machine Learning project with CI/CD using GitHub Actions and AWS</span>
                <a href="http://51.20.109.46:8501/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </li>
              <li>
                <span>Microservice application (Kubernetes ready)</span>
                <a href="https://github.com/shoebhashem/myAPP" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Shoeb Hashem</p>
      </footer>
    </>
  );
}

export default HomePage;

