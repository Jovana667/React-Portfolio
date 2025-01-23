import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Employee Payroll Tracker",
      description:
        "A comprehensive payroll management system for tracking employee salaries and generating financial reports. Features include data visualization, salary calculations, and employee management interface.",
      technologies: "JavaScript, HTML, CSS, Local Storage",
      image: "/images/Employee-Payroll-Tracker.png",
      githubLink: "https://github.com/Jovana667/Employee-Payroll-Tracker",
    },
    {
      title: "Task Board Management",
      description:
        "A Kanban-style task management application allowing users to organize and track tasks through different stages of completion. Implements drag-and-drop functionality and local storage.",
      technologies: "JavaScript, DOM Manipulation, Local Storage",
      image: "/images/Task-Board-Management-Tool.png",
      githubLink: "https://github.com/Jovana667/Task-Board-Management-Tool",
    },
    {
      title: "Student Search Engine",
      description:
        "A React-based search application that allows users to search and filter through student data, featuring integration with multiple data sources and real-time updates.",
      technologies: "React, JavaScript, APIs",
      image: "/images/brandbird.png",
      githubLink: "https://github.com/Jovana667/student-search-engine",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather application providing real-time weather data and forecasts for cities worldwide. Features include dynamic updates and search history.",
      technologies: "JavaScript, Weather API, Local Storage",
      image: "/images/Weather-Dashboard.png",
      githubLink: "https://github.com/Jovana667/Weather-Dashboard",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 py-20">
      <div className="project-section-wrapper">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-slate-800">
          Here are some of my <span className="text-red-400">projects</span>
        </h1>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="project-card-container">
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-overlay">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-sm text-gray-300 mb-8">
                  {project.technologies}
                </p>

                <div className="button-container flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
