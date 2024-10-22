import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Student Search Engine",
      image: "/images/student-search-engine.png", // Update with actual image paths
      githubLink: "https://github.com/Jovana667/student-search-engine",
    },
    {
      title: "Weather Dashboard",
      image: "/images/Weather-Dashboard.png",
      githubLink: "https://github.com/Jovana667/Weather-Dashboard",
    },
    {
      title: "Employee Payroll Tracker",
      image: "/images/Employee-Payroll-Tracker.png",
      githubLink: "https://github.com/Jovana667/Employee-Payroll-Tracker",
    },
    {
      title: "Task Board Management Tool",
      image: "/images/Task-Board-Management-Tool.png",
      githubLink: "https://github.com/Jovana667/Task-Board-Management-Tool",
    },
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
