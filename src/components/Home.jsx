import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="about-container">
      <div className="content-grid">
        {/* Main Content Section */}
        <div className="main-content">
          <h1 className="main-title">Hey! I'm Jovana.</h1>

          <p className="intro-text">
            I'm a Full Stack Developer and I build scalable applications with modern web technologies that
              make an impact.
          </p>

            <p>
              Ready to bring your vision to life?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="get-in-touch"
            >
              Get in Touch
            </button>


          {/* Skills Section */}
          <div className="skills-section">
            <div className="skill-item">
              <h2>Full Stack Development</h2>
              <p>
                Building robust applications with modern technologies and best
                practices.
              </p>
            </div>

            <div className="skill-item2">
              <h2>Clean Code Advocate</h2>
              <p>Writing maintainable, efficient, and well-documented code.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/Jovana667"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/jovana-vukovic-337592279/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="/Jovanaresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon resume"
            >
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
