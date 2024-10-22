import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const handleDownload = () => {
    const resumePath = "/public/resume.pdf";
    window.open(resumePath, "_blank");
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Resume</h2>

      <div className="resume-content">
        <button onClick={handleDownload} className="download-button">
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </button>

        <div className="proficiencies">
          <div className="proficiency-section">
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="proficiency-section">
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
