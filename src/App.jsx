import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Languages from "./components/Languages";
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
        {/* Languages Section */}
        <section
          id="languages"
          className="min-h-screen bg-slate-700 text-cream-100"
        >
          <Languages />
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen bg-slate-700 text-cream-100"
        >
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
