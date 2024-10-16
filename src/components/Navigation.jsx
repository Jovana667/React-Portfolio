import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav>
      {["About", "Portfolio", "Contact", "Resume"].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
