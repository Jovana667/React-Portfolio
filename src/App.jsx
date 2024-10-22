import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Jovana</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
