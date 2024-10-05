import React from "react";
import "./App.css";
import { AudioPlayerProvider } from "./AudioContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Usse Routes and Route instead of Switch
import Navbar from "./navbar"; // Import the Navbar component
import Demo from "./demo"; // Import all your pages
import { HeatMap } from "./heatMap";
import CaseStudy from "./caseStudy";
import Solution from "./solution";

function App() {
	return (
		<Router>
			<div className="App">
				<AudioPlayerProvider>
					<Navbar /> {/* Add the Navbar */}
					<Routes>
						{" "}
						{/* Replace Switch with Routes */}
						<Route path="/demo" element={<Demo />} />{" "}
						{/* Replace component prop with element */}
						<Route path="/heatMap" element={<HeatMap />} />
						<Route path="/caseStudy" element={<CaseStudy />} />
						<Route path="/solution" element={<Solution />} />
					</Routes>
				</AudioPlayerProvider>
			</div>
		</Router>
	);
}

export default App;
