import React from "react";

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path_to_your_resume.pdf" download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
