import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Projects">Projects</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* About Section */}
        <section id="about" className="content-section">
          <div className="section-container">
            <div className="section-text">
              <h2>Welcome to My Homepage</h2>
              <p>
                Welcome! My name is Shoeb Hashem. I'm excited to share my expertise and services with you.
                With over 15 years of experience in product development, I specialize in mechanical, electrical, and software engineering.
                I have a proven track record of delivering high-quality solutions to clients across various industries.
                Let's work together to bring your ideas to life.
              </p>
            </div>
            <div className="section-image">
              <img src="/image1.jpg" alt="Profile" />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="content-section">
          <div className="section-container">
            <div className="section-text">
              <h2>Services</h2>
              <p>
                I offer a wide range of software engineering services tailored to meet your needs.
                Whether you need assistance with software development, DevOps practices, or system integration, I've got you covered.
                I specialize in creating robust, scalable solutions using cutting-edge technologies such as Docker, Kubernetes, and more.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="content-section">
          <div className="section-container">
            <div className="section-text">
              <h2>Contact Me</h2>
              <p>
                Ready to start your next project? Let's connect!
                Feel free to reach out to me via email, phone, or in person to discuss your ideas and requirements.
                I'm committed to providing exceptional service and helping you achieve your goals.
              </p>
              <p>
                Email: shoeb.hashem@gmail.com <br />
                Phone: +46737136618 <br />
                Address: Gothenburg, Sweden
              </p>
            </div>
          </div>
        </section>
        {/* Project Section */}
        <section id="project" className="content-section">
          <div className="section-container">
            <div className="section-text">
              <h2>Projects</h2>
              <p>
                Machine learning (ML) project, 
                CI/CD implemented using GitHub action and AWS ECR and EC2. http://51.20.109.46:8501/
              </p>
              <p>
                Simple Microservice application, ready to be deployed with Kubernetes.
                https://github.com/shoebhashem/myAPP
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
