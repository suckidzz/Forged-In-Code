import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ThesisRecommender from "./pages/projects/ThesisRecommender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PROJECTS */}
        <Route
          path="/projects/thesis-recommender"
          element={<ThesisRecommender />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
