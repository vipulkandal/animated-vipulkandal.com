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
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <section id='Portfolio'>
        <Portfolio />
      </section>

      <section id='Skills'>
        <Skills />
      </section>

      <section id='Experience'>
        <ExperienceTimeline />
      </section>

      <section id='Contact'>
        <Contact />
      </section>
    </>
  );
};

export default App;
