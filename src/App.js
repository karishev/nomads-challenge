import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./navbar/navbar.js";
import Demo from "./demo.js";
import { HeatMap } from "./heatMap/heatMap.js";
import CaseStudy from "./caseStudy.js";
import Solution from "./solution.js";
import { Landing } from "./landing/landing.js";

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/heatMap" element={<HeatMap />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
