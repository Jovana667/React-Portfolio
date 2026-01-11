import React from "react";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-home">
        <button
          onClick={() => scrollToSection("home")}
          className="nav-button home"
        >
          Jovana Vukovic
        </button>
      </div>
      <div className="nav-container">
        <button
          onClick={() => scrollToSection("languages")}
          className="nav-button meet"
        >
          Languages
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-button work"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-button contact"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
