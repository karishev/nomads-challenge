import { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import data from "./custom";
import { Info } from "./countryInfo";

export const Glob = () => {
  const [equakes, setEquakes] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    // load data

    setEquakes(data.features);
  }, []);


  const weightColor = d3
    .scaleLinear()
    .domain([0, 30])
    .range(["lightblue", "darkred"])
    .clamp(true);

  return (
    <>
      {country !== "" ? <Info country_name={country} /> : ""}
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        hexBinPointsData={equakes}
        hexBinPointLat={(d) => d.geometry.coordinates[1]}
        hexBinPointLng={(d) => d.geometry.coordinates[0]}
        hexBinPointWeight={(d) => d.properties.mag}
        hexBinResolution={2}
        hexAltitude={({ sumWeight }) => sumWeight * 0.0025}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        onHexClick={(d) => {
          setCountry(`
        <b>${d.points.length}</b> earthquakes in the past month:<ul><li>
          ${d.points
            .slice()
            .sort((a, b) => b.properties.mag - a.properties.mag)
            .map((d) => d.properties.title)
            .join("</li><li>")}
        </li></ul>
      `);
        }}
        hexLabel={(d) => d}
      />
      ``
    </>
  );
};
