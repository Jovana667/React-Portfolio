import React from "react";
import { ArrowDown } from "lucide-react";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        {/* Main Hero Card */}
        <div className="main-hero-card bg-slate">
          <div className="card-content">
            <h1 className="hero-title">
              Crafting Digital Solutions That Make an Impact
            </h1>
            <p className="hero-subtitle">
              Full stack applications that blend functionality with exceptional
              user experience. As a full-stack developer, I create comprehensive
              solutions from database design to user interfaces, ensuring clean,
              efficient, and well-documented code that scales with your needs.
            </p>
            <div className="features">
              <div className="feature-highlight">
                <span className="feature-dot coral"></span>
                End-to-end Solutions
              </div>
              <div className="feature-highlight">
                <span className="feature-dot turquoise"></span>
                Scalable Architecture
              </div>
            </div>
            <p className="cta-text">
              Ready to bring your vision to life? Let's create something amazing
              together.
            </p>
            <button onClick={scrollToContact} className="cta-button">
              Get Started <ArrowDown className="ml-2" size={20} />
            </button>
          </div>
          <div className="shape-accent"></div>
        </div>

        {/* Info Cards Grid */}
        <div className="info-cards-grid">
          {/* Personal Info Card */}
          <div className="info-card bg-yellow">
            <div className="info-icon">👩‍💻</div>
            <h3>Portfolio of Jovana</h3>
            <p>A full-stack developer based in Sydney, Australia.</p>
          </div>

          {/* Web Dev Card */}
          <div className="info-card bg-yellow">
            <div className="info-icon">💻</div>
            <h3>Web Design & Dev</h3>
            <p>
              Cleanly designed, conversion-focused, and built for easy updates.
            </p>
          </div>

          {/* UI/UX Card */}
          <div className="info-card bg-yellow">
            <div className="info-icon">🎨</div>
            <h3>Full Stack Development</h3>
            <p>Seamless web applications designed to wow your users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
