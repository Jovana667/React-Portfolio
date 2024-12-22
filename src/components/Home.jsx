import React from "react";
import { ArrowDown } from "lucide-react";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="cards-layout">
          {/* Main Intro Card */}
          <div className="main-card bg-yellow">
            <h1 className="hero-title">
              Crafting Digital Solutions That Make an Impact
            </h1>
            <p className="hero-subtitle">
              Full stack applications that blend functionality with exceptional
              user experience. Clean, efficient, and thoughtfully engineered.
            </p>
            <button onClick={scrollToContact} className="cta-button">
              Let's Connect <ArrowDown className="ml-2" size={20} />
            </button>
            <div className="shape-accent"></div>
          </div>

          {/* Two Column Cards */}
          <div className="card-grid">
            <div className="feature-card bg-coral">
              <h3>Full Stack Development</h3>
              <p>
                Building end-to-end solutions with modern technologies and best
                practices. I create comprehensive solutions from database design
                to user interfaces.
              </p>
            </div>

            <div className="feature-card bg-turquoise">
              <h3>Clean Architecture</h3>
              <p>
                Writing maintainable, scalable code that grows with your needs.
                You can rely on me to deliver efficient and well-documented
                solutions.
              </p>
            </div>
          </div>

          {/* Bottom Full-Width Card
          <div className="details-card bg-slate">
            <h2>Code is in the details</h2>
            <p>
              My work is built on strong technical foundations, clean code
              practices, and industry-standard development patterns. Every
              project is crafted to meet your specific needs while ensuring
              scalability and maintainability.
            </p>
            <div className="shape-accent-small"></div>
          </div> */}

          {/* Final CTA Card */}
          <div className="cta-card bg-slate">
            <h2>Ready to solve real-world challenges?</h2>
            <p>
              Let's work together to create something amazing. Whether you need
              a full-stack application, API integration, or performance
              optimization, I'm here to help bring your vision to life.
            </p>
            <button onClick={scrollToContact} className="cta-button-alt">
              Get Started <ArrowDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
