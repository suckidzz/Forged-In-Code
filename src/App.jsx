import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import ThesisRecommender from "./pages/projects/ThesisRecommender";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

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
