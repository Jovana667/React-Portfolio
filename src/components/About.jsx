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
    <div className="page-container">
      <h2>About Me</h2>
      <div className="user-icon-container">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </div>
      <p className="bio-text">
        Hello! I'm a 25-year-old aspiring developer based in Sydney, Australia.
        Currently, I'm pursuing my passion for full-stack development through
        studies at the University of Sydney, where I have begun my journey in
        May 2024.
      </p>
      <p className="bio-text">
        I've developed competency across various front-end and back-end
        technologies, building a strong foundation in full-stack development.
        I'm excited to continue growing my skills and taking on new challenges
        in the tech world.
      </p>
      <p className="bio-text">
        Feel free to explore my portfolio to see my latest projects, check out
        my resume for a detailed overview of my skills, or visit my GitHub to
        see my code in action. If you'd like to connect or discuss potential
        opportunities, don't hesitate to reach out through the contact section.
      </p>
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
          title="Stack Overflow"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </div>
  );
};

export default About;
