import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Toolbox from "./components/sections/Toolbox";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

import ThesisRecommender from "./components/projects/ThesisRecommender";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Toolbox />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/thesis-recommender"
          element={<ThesisRecommender />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
