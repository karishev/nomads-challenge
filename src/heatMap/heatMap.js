import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
// import countryData from "./heatMapData.js"; // Import the updated country data
import styles from "./heatMap.module.css"; // Import the CSS module
import precomputedData from "./precomputedData.json";

export const HeatMap = () => {
	// const [precomputedData, setPrecomputedData] = useState({});
	const [countries, setCountries] = useState([]);
	const [year, setYear] = useState(1995);
	const [sliderPosition, setSliderPosition] = useState(18.5); // To track the slider thumb position
	const minYear = 1995;
	const maxYear = 2022;

	useEffect(() => {
		setCountries(precomputedData[year] || []);
	}, [year]);

	// Adjusted color scale to emphasize the range from green to red
	const colorScale = d3
		.scaleLinear() // Use a linear scale for smoother transitions
		.domain([0.5, 10, 20]) // Set key points for color mapping
		.range(["green", "yellow", "red"]); // Map 0 -> green, 10 -> yellow, 20 -> red

	// Function to handle slider change and position update
	const handleSliderChange = (e) => {
		const value = Number(e.target.value);
		setYear(value);
		const percent = ((value - minYear) / (maxYear - minYear)) * 100;
		setSliderPosition(percent); // Update position of the indicator
	};

	return (
		<>
			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				polygonsData={countries}
				polygonAltitude={(d) => 0.01 + 0.001 * d.properties.value} // Slight altitude based on value for visual effect
				polygonCapColor={(d) =>
					d.properties.value === 0
						? "rgba(50, 50, 50, 1)"
						: colorScale(d.properties.value)
				}
				polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
				polygonStrokeColor={() => "#111"}
				polygonsTransitionDuration={0} // Transition effect when changing year
				onPolygonClick={(d) => console.log(d)}
			/>

			<div className={styles.infoContainer}>
				<h2>Gender Inequality Index (GII) Heat Map</h2>
				<p>
					This heat map illustrates the levels of gender inequality
					across different countries over time. The GII measures
					disparities between men and women in key dimensions,
					including reproductive health, empowerment, and labor market
					participation. Darker colors indicate higher inequality,
					where women face greater disadvantages in these areas. Use
					this map to explore how gender inequality changes
					geographically and over the years, highlighting regions that
					require targeted interventions to achieve gender equity
				</p>
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
