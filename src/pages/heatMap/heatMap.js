import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import styles from "./heatMap.module.css";
import GCIData from "./gciData.json";
import genderData from "./genderData.json"; // Assuming you have this file
import climateData from "./climateData.json"; // Assuming you have this file

export const HeatMap = () => {
	const [countries, setCountries] = useState([]);
	const [year, setYear] = useState(1995);
	const [hoveredCountry, setHoveredCountry] = useState(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [sliderPosition, setSliderPosition] = useState(18.5);
	const [selectedData, setSelectedData] = useState("GCI"); // Default data selection

	const minYear = 1995;
	const maxYear = 2022;

	const globeEl = useRef();
	const rotationSpeed = 0.1;
	let rotationAngle = 0;

	// Update countries data based on selected year and dataset
	useEffect(() => {
		let data;
		switch (selectedData) {
			case "Gender Data":
				data = genderData[year] || [];
				break;
			case "Climate Data":
				data = climateData[year] || [];
				break;
			case "GCI":
			default:
				data = GCIData[year] || [];
				break;
		}
		setCountries(data);
	}, [year, selectedData]);

	// Globe rotation effect
	useEffect(() => {
		const rotateGlobe = () => {
			if (globeEl.current) {
				rotationAngle += rotationSpeed;
				globeEl.current.pointOfView({
					lat: globeEl.current.pointOfView().lat,
					lng:
						(globeEl.current.pointOfView().lng + rotationSpeed) %
						360,
				});
			}
		};

		const interval = setInterval(rotateGlobe, 50);
		return () => clearInterval(interval);
	}, []);

	// Track mouse movement for tooltip positioning
	const handleMouseMove = (event) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const colorScale = d3
		.scaleLinear()
		.domain([80, 70, 30])
		.range(["green", "yellow", "red"]);

	const handleSliderChange = (e) => {
		const value = Number(e.target.value);
		setYear(value);
		const percent = ((value - minYear) / (maxYear - minYear)) * 100;
		setSliderPosition(percent);
	};

	// Handle data selection buttons
	const handleDataSelection = (dataType) => {
		setSelectedData(dataType);
	};

	// Conditional content for the info container
	const infoContent = {
		GCI: {
			title: "Gender Climate Index (GCI) Heat Map",
			description:
				"This heat map relates the two indexes and we can see a clear correlation: countries with higher preparedness for the climate change have better gender equality, and countries with lower gender equality are more affected by the climate change",
		},
		"Gender Data": {
			title: "Gender GII (Gender Inequality Index) Heat Map",
			description:
				"This heat map illustrates the levels of gender inequality across different countries over time. The GII measures disparities between men and women in key dimensions, including reproductive health, empowerment, and labor market participation. Darker colors indicate higher inequality, where women face greater disadvantages in these areas. Use this map to explore how gender inequality changes geographically and over the years, highlighting regions that require targeted interventions to achieve gender equity",
		},
		"Climate Data": {
			title: "Climate ND-Gain Heat Map",
			description:
				"This heat map shows the climate resilience of countries across the world over time, based on the ND-Gain Index. The ND-Gain measures a country's vulnerability to climate change and its readiness to improve resilience. Darker colors indicate lower resilience, meaning higher vulnerability and less capacity to adapt. Explore the map to understand how different countries are prepared to face climate challenges and where there is the most need for climate adaptation efforts",
		},
	};

	return (
		<>
			{/* Data Selection Options */}
			<div className={styles.dataSelection}>
				<button
					className={
						selectedData === "Gender Data" ? styles.active : ""
					}
					onClick={() => handleDataSelection("Gender Data")}
				>
					Gender Data
				</button>
				<button
					className={
						selectedData === "Climate Data" ? styles.active : ""
					}
					onClick={() => handleDataSelection("Climate Data")}
				>
					Climate Data
				</button>
				<button
					className={selectedData === "GCI" ? styles.active : ""}
					onClick={() => handleDataSelection("GCI")}
				>
					GCI
				</button>
			</div>

			<Globe
				ref={globeEl}
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				polygonsData={countries}
				polygonAltitude={(d) => 0.01 + 0.001 * d.properties.value}
				polygonCapColor={(d) =>
					d.properties.value === 0
						? "rgba(50, 50, 50, 1)"
						: colorScale(d.properties.value)
				}
				polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
				polygonStrokeColor={() => "#111"}
				polygonsTransitionDuration={0}
				onPolygonHover={(d) => {
					setHoveredCountry(d ? d.properties : null);
				}}
				onPolygonClick={(d) => console.log(d)}
			/>

			{/* Tooltip for hovered country */}
			{hoveredCountry && (
				<div
					className={styles.tooltip}
					style={{
						left: mousePosition.x + 10 + "px",
						top: mousePosition.y + 10 + "px",
					}}
				>
					<strong>{hoveredCountry.name}</strong>
					<br />
					Index Score: {hoveredCountry.value.toFixed(2)}
				</div>
			)}

			{/* Info Container with dynamic content */}
			<div className={styles.infoContainer}>
				<h2>{infoContent[selectedData].title}</h2>
				<p>{infoContent[selectedData].description}</p>
			</div>

			{/* Slider to select year */}
			<div className={styles.sliderContainer}>
				<div className={styles.sliderBox}>
					{/* Slider value indicator */}
					<div
						className={styles.indicator}
						style={{
							left: `calc(0.29vw * ${sliderPosition} + 35vw + 0.5rem)`,
						}}
					>
						{year}
					</div>

					{/* Text for min year */}
					<span
						className={styles.sliderLabel}
						onClick={() => {
							setYear(minYear);
							setSliderPosition(0);
						}}
					>
						{minYear}
					</span>
					<input
						type="range"
						min={minYear}
						max={maxYear}
						step="1"
						value={year}
						onChange={handleSliderChange}
						className={styles.slider}
					/>
					{/* Text for max year */}
					<span
						className={styles.sliderLabel}
						onClick={() => {
							setYear(maxYear);
							setSliderPosition(100);
						}}
					>
						{maxYear}
					</span>
				</div>
			</div>
		</>
	);
};

export default HeatMap;
