import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>Services</section>
      <section id='About'>About</section>
      <section id='Portfolio'>portfolio</section>
      <section id='Contact'>contact</section>
    </>
  );
};

export default App;
