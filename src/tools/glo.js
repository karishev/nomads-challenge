import { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import data from "./custom.js";
import { Info } from "./countryInfo.js";

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
        hexBinPointWeight={(d) => d.properties.affected_population}
        hexBinResolution={2}
        hexAltitude={({ sumWeight }) => sumWeight * 0.000000025}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        onHexClick={(d) => {
          setCountry(`
        <b>${d.points.length}</b> disasters:<ul><li>
          ${d.points
            .slice()
            .sort((a, b) => b.properties.affected_population - a.properties.affected_population)
            .map((d) => d.properties.name)
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
