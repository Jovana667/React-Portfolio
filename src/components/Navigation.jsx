import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="nav-links">
      {["About", "Portfolio", "Contact", "Resume"].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className="nav-button"
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
