import React from "react";

const Project = ({ title, image, githubLink }) => {
  return (
    <div className="project-card">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default Project;
