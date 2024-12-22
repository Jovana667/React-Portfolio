import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="home-container">
      {/* Decorative shapes */}
      <div className="shape-circle"></div>
      <div className="shape-moon"></div>
      <div className="shape-wave"></div>

      <div className="content-wrapper">
        {/* Main heading section */}
        <div className="intro-section">
          <h1>
            <span className="greeting">Hey</span>
            <span className="name-intro">I'm Jovana.</span>
          </h1>

          <div className="role-description">
            <p>
              I'm a <span className="highlight">Full Stack Developer</span> with
              a strong passion for building web applications with great user
              experiences.
            </p>
            <p>
              Based in Sydney, Australia, I specialize in creating clean,
              efficient, and user-friendly applications.
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="about-link"
              >
                about me
              </button>
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="info-cards">
          <div className="card yellow">
            <h2>Full Stack Development</h2>
            <p>
              Building robust applications with modern technologies and best
              practices.
            </p>
          </div>
          <div className="card pink">
            <h2>Clean Code Advocate</h2>
            <p>Writing maintainable, efficient, and well-documented code.</p>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/Jovana667"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jovana-vukovic-337592279/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://stackoverflow.com/users/27922248/jovana-vukovic"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
