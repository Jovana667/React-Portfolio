import React from "react";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-container">
        <button
          onClick={() => scrollToSection("home")}
          className="nav-button meet"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="nav-button about"
        >
          Meet Jovana
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="nav-button work"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-button contact"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
