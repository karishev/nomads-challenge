import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar.js";
import Demo from "./pages/demo/demo.js";
import { HeatMap } from "./pages/heatMap/heatMap.js";
import CaseStudy from "./pages/caseStudy/caseStudy.js";
import Solution from "./pages/solution/solution.js";
import Game from "./pages/game/game.js";
import { Landing } from "./pages/landing/landing.js";

function AppContent() {
	return (
		<div className="App">
			{/* <div style={{ height: "80px" }}> */}
			<Navbar />
			{/* </div> */}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/demo" element={<Demo />} />
				<Route path="/heatMap" element={<HeatMap />} />
				<Route path="/caseStudy" element={<CaseStudy />} />
				<Route path="/solution" element={<Solution />} />
				<Route path="/game" element={<Game />} />
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
