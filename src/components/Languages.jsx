import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Languages = () => {
  return (
    <div className="languages-container">
      <h2 className="section-title">Programming Languages & Technologies</h2>
      <div className="languages-grid">
        <div className="language-item">
          <div className="icon-wrapper">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
            />
          </div>
          <span className="language-name">HTML5</span>
        </div>
        <div className="language-item">
          <div className="icon-wrapper">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
            />
          </div>
          <span className="language-name">CSS3</span>
        </div>
        <div className="language-item">
          <div className="icon-wrapper">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
          </div>
          <span className="language-name">JavaScript (ES6+)</span>
        </div>
        <div className="language-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="Typescript"
          />
          <span className="language-name">Typescript</span>
        </div>
        <div className="language-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React.js"
          />
          <span className="language-name">React.js</span>
        </div>
        <div className="language-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <span className="language-name">Node.js</span>
        </div>
        <div className="language-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <span className="language-name">PostgreSQL</span>
        </div>
        <div className="language-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <span className="language-name">Amazon Web Services (AWS)</span>
        </div>
      </div>
    </div>
  );
};

export default Languages;
