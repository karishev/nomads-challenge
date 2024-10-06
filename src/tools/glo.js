import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import data from "./custom.js";
import { Info } from "./countryInfo.js";

export const Glob = () => {
  const [equakes, setEquakes] = useState([]);
  const [country, setCountry] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Ref to access the Globe instance
  const globeEl = useRef();

  useEffect(() => {
    // load data
    const formattedData = data.features.map((feature) => ({
      lat: feature.geometry.coordinates[1],
      lng: feature.geometry.coordinates[0],
      size: 20,
      color: "white",
      data: feature.properties,
    }));
    setEquakes(formattedData);
  }, []);

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  const handleMarkerClick = (marker) => {
    setCountry(marker.data);
    if (selectedMarker === marker) {
      setSelectedMarker(null);
      setCountry("");
    } else {
      setSelectedMarker(marker);
      
      // Set the camera to the selected marker's location (snapping to the marker)
      // altitude: 2.2 is the zoom level
      // duration: 800 is the speed of the animation
      globeEl.current.pointOfView({ lat: marker.lat, lng: marker.lng, altitude: 2.2 }, 800);
    }
    console.info(marker);
  };

  return (
    <>
      {country !== "" ? <Info data={country} /> : ""}
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        htmlElementsData={equakes}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = d === selectedMarker ? "red" : d.color;
          el.style.width = d === selectedMarker ? `${d.size * 1.5}px` : `${d.size}px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => handleMarkerClick(d);
          
          return el;
        }}
      />
    </>
  );
};
