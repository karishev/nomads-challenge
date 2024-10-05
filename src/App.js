import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Usse Routes and Route instead of Switch
import Navbar from "./navbar/navbar.js"; // Import the Navbar component
import Demo from "./demo.js"; // Import all your pages
import { HeatMap } from "./heatMap/heatMap.js";
import CaseStudy from "./caseStudy.js";
import Solution from "./solution.js";
import { Landing } from "./landing/landing.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Replace Switch with Routes */}
          <Route path="/demo" element={<Demo />} />{" "}
          {/* Replace component prop with element */}
          <Route path="/heatMap" element={<HeatMap />} />
          <Route path="/caseStudy" element={<CaseStudy />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
