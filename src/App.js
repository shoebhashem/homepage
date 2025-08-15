import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Shoeb Hashem</h1>
        <h2>MSc in Software Engineering | Software Developer (Automotive Industry)</h2>
      </header>

      <main>
        <section className="contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:shoeb.hashem@gmail.com">shoeb.hashem@gmail.com</a></p>
          <p>Phone: <a href="tel:+46737136618">+46 73 713 6618</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/shoebhashem" target="_blank" rel="noopener noreferrer">linkedin.com/in/shoebhashem</a></p>
          <p>Location: Gothenburg, Sweden</p>
        </section>

        <section className="projects">
          <h3>Projects</h3>
          <ul>
            <li>
              Machine Learning project with CI/CD using GitHub Actions and AWS  
              <a href="http://51.20.109.46:8501/" target="_blank" rel="noopener noreferrer"> View Project</a>
            </li>
            <li>
              Microservice application (Kubernetes ready)  
              <a href="https://github.com/shoebhashem/myAPP" target="_blank" rel="noopener noreferrer"> GitHub Repo</a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shoeb Hashem</p>
      </footer>
    </div>
  );
}

export default HomePage;

