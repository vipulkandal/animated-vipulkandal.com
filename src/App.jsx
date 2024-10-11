import "./app.scss";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <Portfolio />
      {/* <section id='Services'>
        <Parallax type='services' />
      </section> */}
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
