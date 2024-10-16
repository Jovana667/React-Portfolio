import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    // Add your project details here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
