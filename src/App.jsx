import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import ExperienceTimeline from "./components/experienceTimeline/ExperienceTimeline";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <section id="Home" style={{ scrollSnapAlign: "start" }}>
        <Navbar />
        <Hero />
      </section>

      <section id="Portfolio" style={{ scrollSnapAlign: "start" }}>
        <Portfolio />
      </section>

      <section id="Skills" style={{ scrollSnapAlign: "start" }}>
        <Skills />
      </section>

      <section id="Experience" style={{ scrollSnapAlign: "start" }}>
        <ExperienceTimeline />
      </section>

      <section id="Contact" style={{ scrollSnapAlign: "start" }}>
        <Contact />
      </section>
    </>
  );
};

export default App;
