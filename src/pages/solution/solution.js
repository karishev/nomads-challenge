import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import data from "./data.js";
import { Info } from "./countryInfo.js";
import styles from "./info.module.css";

export const CaseStudy = () => {
	const [country, setCountry] = useState("");
	const [selectedPolygon, setSelectedPolygon] = useState(null);
	const [polygons, setPolygons] = useState([]);
	const globeEl = useRef();

	const rotationSpeed = 0.1;

	useEffect(() => {
		const formattedData = data.features.map((feature) => ({
			lat: feature.geometry.coordinates[1],
			lng: feature.geometry.coordinates[0],
			size: 30,
			color: "orange",
			data: feature.properties,
		}));

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
			if (!selectedPolygon && globeEl.current) {
				const currentView = globeEl.current.pointOfView();
				globeEl.current.pointOfView({
					lat: currentView.lat,
					lng: (currentView.lng + rotationSpeed) % 360,
				});
			}
		};

		const interval = setInterval(rotateGlobe, 50);

		return () => clearInterval(interval);
	}, [selectedPolygon]);

	const handlePolygonClick = (polygon) => {
		setCountry(polygon.given.data);
		if (selectedPolygon === polygon) {
			globeEl.current.controls().enabled = true;
			setSelectedPolygon(null);
			setCountry("");
		} else {
			globeEl.current.controls().enabled = false;
			setSelectedPolygon(polygon);

			globeEl.current.pointOfView(
				{
					lat: polygon.given.lat,
					lng: polygon.given.lng,
					altitude: 2.2,
				},
				800
			);
		}
	};

	const handleZoom = ({ altitude }) => {
		const minAltitude = 1.5;
		const maxAltitude = 3;
		const newAltitude = Math.max(
			minAltitude,
			Math.min(maxAltitude, altitude)
		);
		if (globeEl.current) {
			globeEl.current.pointOfView({ altitude: newAltitude });
		}
	};

	return (
		<div className={styles.container}>
			{country && (
				<Info
					data={country}
					setClose={() => {
						globeEl.current.controls().enabled = true;
						setSelectedPolygon(null);
						setCountry("");
					}}
				/>
			)}
			<div
				className={`${styles.globe} ${selectedPolygon ? styles.move : ""}`}
			>
				<Globe
					ref={globeEl}
					globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
					polygonsData={polygons}
					polygonAltitude={() => 0.05}
					polygonCapColor={(d) => d.given.data.color || "darkblue"}
					polygonSideColor={() => "rgba(0, 0, 0, 1)"}
					polygonStrokeColor={() => "#000"}
					polygonsTransitionDuration={0}
					onPolygonClick={handlePolygonClick}
					onZoom={handleZoom}
					enablePointerInteraction={!selectedPolygon}
				/>
			</div>
		</div>
	);
};

export default CaseStudy;
