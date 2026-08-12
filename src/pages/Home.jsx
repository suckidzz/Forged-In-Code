import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import Journey from "../components/sections/Journey";
import Projects from "../components/sections/Projects";
import Toolbox from "../components/sections/Toolbox";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Journey />
        <Projects />
        <Toolbox />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Home;
