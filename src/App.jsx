import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section id='About'>About</section>
      <section id='Portfolio'>portfolio</section>
      <section id='Contact'>contact</section>
    </>
  );
};

export default App;
