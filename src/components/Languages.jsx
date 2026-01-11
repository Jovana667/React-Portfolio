import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Languages = () => {
  return (
    <div className="languages-container">   
        <h2 className="section-title">Programming Languages & Technologies</h2>
        <div className="languages-grid">
          <div className="language-item">JavaScript (ES6+)</div>
          <div className="language-item">Python</div>
            <div className="language-item">HTML5 & CSS3</div>
            <div className="language-item">React.js</div>
            <div className="language-item">Node.js</div>
            <div className="language-item">Express.js</div>
            <div className="language-item">MongoDB</div>
            <div className="language-item">SQL</div>
            <div className="language-item">Git & GitHub</div>
        </div>
    </div>
  );
}

export default Languages;