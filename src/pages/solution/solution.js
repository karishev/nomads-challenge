import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import data from "./data.js";
import { Info } from "./countryInfo.js";
import styles from "./info.module.css";

export const CaseStudy = () => {
  const [equakes, setEquakes] = useState([]);
  const [country, setCountry] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [polygons, setPolygons] = useState([]);

  // Ref to access the Globe instance
  const globeEl = useRef();

  // Variables to control rotation speed
  const rotationSpeed = 0.1; // Smaller is slower

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

    const countriesNeeded = data.features.map(
      (feature) => feature.properties.name
    );

    const url =
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const newCountries = [];
        data.features.forEach((feature) => {
          if (countriesNeeded.includes(feature.properties.name)) {
            const newFeature = {
              ...feature,
              given: formattedData.find(
                (d) => d.data.name === feature.properties.name
              ),
            };
            newCountries.push(newFeature);
          }
        });
        setPolygons(newCountries);
      });
  }, []);

  useEffect(() => {
    const rotateGlobe = () => {
      if (!selectedMarker && globeEl.current) {
        // Get the current point of view, especially altitude
        const currentView = globeEl.current.pointOfView();

        // Ensure altitude is within limits (don't zoom out too far)
        // const newAltitude = Math.min(currentView.altitude, maxAltitude);

        globeEl.current.pointOfView({
          lat: currentView.lat, // Keep the same latitude
          lng: (currentView.lng + rotationSpeed) % 360, // Slowly rotate the longitude
          // altitude: newAltitude,
        });
      }
    };

    const interval = setInterval(rotateGlobe, 50); // Rotate the globe every 50ms

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [selectedMarker]);

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  const handleMarkerClick = (marker) => {
    setCountry(marker.data);
    if (selectedMarker === marker) {
      globeEl.current.controls().enabled = true;
      setSelectedMarker(null);
      setCountry("");
    } else {
      globeEl.current.controls().enabled = false;
      setSelectedMarker(marker);

      // Set the camera to the selected marker's location (snapping to the marker)
      // altitude: 2.2 is the zoom level
      // duration: 800 is the speed of the animation
      globeEl.current.pointOfView(
        { lat: marker.lat, lng: marker.lng, altitude: 2.2 },
        800
      );
    }
    console.info(marker);
  };

  // Zoom limits
  const handleZoom = ({ altitude }) => {
    // console.log(altitude);
    const minAltitude = 1.5; // Minimum zoom level
    const maxAltitude = 3; // Maximum zoom level
    const newAltitude = Math.max(minAltitude, Math.min(maxAltitude, altitude)); // Clamp altitude
    if (globeEl.current) {
      globeEl.current.pointOfView({ altitude: newAltitude });
    }
  };

  return (
    <div className={styles.container}>
      {country !== "" ? (
        <Info
          data={country}
          setClose={() => {
            if (globeEl.current) {
              globeEl.current.controls().enabled = true;
            }
            setSelectedMarker(null);
            setCountry("");
          }}
        />
      ) : (
        ""
      )}
      <div className={`${styles.globe} ${selectedMarker ? styles.move : ""}`}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          htmlElementsData={equakes}
          htmlElement={(d) => {
            const el = document.createElement("div");
            el.innerHTML = markerSvg;
            el.style.color = d === selectedMarker ? "green" : d.color;
            el.style.width =
              d === selectedMarker ? `${d.size * 1.5}px` : `${d.size}px`;

            el.style["pointer-events"] = "auto";
            el.style.cursor = "pointer";
            el.onclick = () => handleMarkerClick(d);

            return el;
          }}
          polygonsData={polygons}
          polygonAltitude={(d) => 0.01} // Slight altitude based on value for visual effect
          polygonCapColor={"rgba(0, 255, 100, 0.9)"} // More green and transparent
          polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
          polygonStrokeColor={() => "#000"} // Black border for visibility
          polygonsTransitionDuration={0}
          onPolygonClick={(d) => handleMarkerClick(d.given)}
          onZoom={handleZoom} // Limit zooming
          enablePointerInteraction={!selectedMarker}
        />
      </div>
    </div>
  );
};

export default CaseStudy;
