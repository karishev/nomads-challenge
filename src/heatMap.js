import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import countryData from "./heatMapData"; // Import the updated country data

export const HeatMap = () => {
  const [countries, setCountries] = useState([]);
  const [year, setYear] = useState(2000); // Initial year (e.g., 2000)
  const [sliderPosition, setSliderPosition] = useState(0); // To track the slider thumb position
  const minYear = 1995;
  const maxYear = 2022;

  // Load and filter data based on the selected year
  const [worldData, setWorldData] = useState(null);

  useEffect(() => {
    // Fetch world data only once
    if (!worldData) {
      fetch(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
      )
        .then((res) => res.json())
        .then((data) => {
          setWorldData(data);
        });
    }
  }, [worldData]);

  useEffect(() => {
    if (worldData) {
      const filteredData = countryData.filter((c) => c.year === year);
      setCountries(
        worldData.features.map((d) => {
          const countryValue =
            filteredData.find((c) => c.country === d.properties.name)?.value ||
            0;
          return {
            ...d,
            properties: {
              ...d.properties,
              value: countryValue,
            },
          };
        })
      );
    }
  }, [year, worldData]);

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

      {/* Slider to select year */}
      <div style={sliderContainerStyle}>
        {/* Slider value indicator */}
        <div
          style={{
            ...indicatorStyle,
            left: `calc(5.145 * ${sliderPosition}px + 0.051 * ${window.innerWidth}px)`,
          }}
        >
          {year}
        </div>

        {/* Text for min year */}
        <span style={sliderLabelStyle}>{minYear}</span>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          step="1"
          value={year}
          onChange={handleSliderChange}
          style={sliderStyle}
        />
        {/* Text for max year */}
        <span style={sliderLabelStyle}>{maxYear}</span>
      </div>
    </>
  );
};

// Styling for the slider container
const sliderContainerStyle = {
  position: "absolute",
  bottom: "100px",
  width: "50vh",
  left: "25vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Aligns min/max text on the sides
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px",
  borderRadius: "10px",
};

// Styling for the slider
const sliderStyle = {
  width: "70%", // Adjust width to leave space for min/max text
  cursor: "pointer",
  appearance: "none",
  background: "transparent", // Make the background transparent
};

// Styling for the min and max year labels
const sliderLabelStyle = {
  color: "white",
  fontSize: "16px",
  padding: "0 10px",
};

// Styling for the slider value indicator
const indicatorStyle = {
  position: "absolute",
  top: "-30px", // Position the indicator above the slider
  transform: "translateX(-50%)", // Center the indicator above the thumb
  backgroundColor: "#fff",
  padding: "5px 10px",
  borderRadius: "5px",
  color: "#000",
  fontSize: "14px",
  fontWeight: "bold",
  pointerEvents: "none", // Prevent interaction with the indicator
};

export default HeatMap;
