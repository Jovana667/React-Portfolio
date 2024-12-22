import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <Navigation />

      <main className="pt-16">
        {" "}
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen bg-slate-600 text-cream-100"
        >
          <About />
        </section>
        {/* Portfolio Section */}
        <section id="work" className="min-h-screen bg-slate-700 text-cream-100">
          <Work />
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen bg-slate-700 text-cream-100"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
