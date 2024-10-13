import "./app.scss";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import ExperienceTimeline from "./components/experienceTimeline/ExperienceTimeline";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <Portfolio />
      <Skills />
      <section id='Experience'>
        <ExperienceTimeline />
      </section>
      <Contact />
    </>
  );
};

export default App;
