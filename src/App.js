import React from 'react';
import './App.css';

const skills = [
  'Python', 'React', 'Docker', 'Kubernetes', 'AWS',
  'CI/CD', 'GitHub Actions', 'Machine Learning', 'Microservices', 'Linux',
];

function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1>Shoeb Hashem</h1>
          <p className="hero-subtitle">
            MSc Software Engineering &nbsp;·&nbsp; Software Developer &nbsp;·&nbsp; Gothenburg, Sweden
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="card" id="about">
          <h2 className="section-label">About</h2>
          <div className="about-layout">
            <div className="about-text">
              <p>
                I'm a software engineer with an MSc in Software Engineering, currently building production
                software in the automotive industry. My work spans cloud infrastructure, machine learning
                pipelines, and containerized distributed systems — I'm most at home when things are
                automated, well-tested, and built to scale.
              </p>
              <div className="skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="about-photo">
              <img src="/image1.jpg" alt="Shoeb Hashem" />
            </div>
          </div>
        </section>

        <section className="card" id="projects">
          <h2 className="section-label">Projects</h2>
          <div className="project-cards">
            <div className="project-card project-card--featured">
              <div className="project-header">
                <div className="project-title-row">
                  <h3>Clubnizer</h3>
                  <span className="project-founder-badge">Founder</span>
                </div>
                <a href="https://www.clubnizer.com" target="_blank" rel="noopener noreferrer" className="btn">
                  Visit site →
                </a>
              </div>
              <p>
                A free sports club management platform I built from the ground up and shipped across three
                platforms. Clubnizer helps sports clubs handle memberships, scheduling, and communication
                in one place — available on the web, Google Play, and the App Store.
              </p>
              <div className="project-platforms">
                <span className="platform-badge platform-badge--web">🌐 Web</span>
                <span className="platform-badge platform-badge--android">▶ Google Play</span>
                <span className="platform-badge platform-badge--ios"> App Store</span>
              </div>
              <div className="project-tags">
                <span>Full-stack</span>
                <span>iOS</span>
                <span>Android</span>
                <span>SaaS</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Car Price Predictor</h3>
                <a href="https://mlproject-car-price-predictor.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn">
                  View app →
                </a>
              </div>
              <p>
                An end-to-end ML project covering the full lifecycle — data ingestion, preprocessing,
                model training with a Random Forest, experiment tracking via MLflow, and deployment
                using Docker, AWS (ECR + EC2), and Streamlit. Users input car details and receive
                a predicted price range.
              </p>
              <div className="project-tags">
                <span>Python</span>
                <span>Random Forest</span>
                <span>MLflow</span>
                <span>DVC</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Streamlit</span>
              </div>
            </div>



            <div className="project-card">
              <div className="project-header">
                <h3>Sportify — Football Group Tracker</h3>
                <a href="https://gbgfotboll.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">
                  View app →
                </a>
              </div>
              <p>
                A web app I built for my local football group in Gothenburg to track wins, points,
                and standings across our matches. Keeps everyone up to date on the current leaderboard.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Netlify</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Kubernetes Microservices App</h3>
                <a href="https://github.com/shoebhashem/myAPP" target="_blank" rel="noopener noreferrer" className="btn">
                  GitHub →
                </a>
              </div>
              <p>
                A containerized microservice application designed for Kubernetes deployment.
                Built with scalability and clean separation of concerns in mind.
              </p>
              <div className="project-tags">
                <span>Kubernetes</span>
                <span>Docker</span>
                <span>Microservices</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card" id="research">
          <h2 className="section-label">Research</h2>
          <div className="thesis-card">
            <div className="thesis-meta">
              <span className="thesis-badge">MSc Thesis</span>
              <span className="thesis-year">May 2025</span>
            </div>
            <h3 className="thesis-title">
              Exploring Confidence Challenges in Integrating Third-Party Binaries in a CI/CD Pipeline with Limited Transparency: A Case Study
            </h3>
            <p className="thesis-university">Blekinge Institute of Technology — Faculty of Computing, Sweden</p>
            <p className="thesis-abstract">
              Investigates how confidence in a software system is affected when integrating
              closed-source third-party binaries into a CI/CD pipeline. Through a case study
              combining document reviews, observation, and semi-structured interviews, the research
              identifies eight key recommendations across testing, responsibility, and monitoring
              — with a focus on the automotive software domain.
            </p>
            <div className="thesis-keywords">
              <span>CI/CD</span>
              <span>Third-party Software</span>
              <span>Automotive Software</span>
              <span>Software Quality</span>
            </div>
            <a
              href="https://bth.diva-portal.org/smash/get/diva2:1979934/ATTACHMENT01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn thesis-btn"
            >
              Read thesis →
            </a>
          </div>
        </section>

        <section className="card" id="contact">
          <h2 className="section-label">Contact</h2>
          <div className="contact-grid">
            <a href="mailto:shoeb.hashem@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <span>shoeb.hashem@gmail.com</span>
            </a>
            <a href="tel:+46737136618" className="contact-item">
              <span className="contact-icon">☎</span>
              <span>+46 73 713 6618</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shoebhashem"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon contact-icon--in">in</span>
              <span>linkedin.com/in/shoebhashem</span>
            </a>
            <div className="contact-item no-link">
              <span className="contact-icon">⌖</span>
              <span>Gothenburg, Sweden</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Shoeb Hashem</p>
      </footer>
    </>
  );
}

export default HomePage;
