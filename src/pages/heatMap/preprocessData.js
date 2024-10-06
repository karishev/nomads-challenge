import fs from "fs";
import fetch from "node-fetch";
import countryData from "./climateHeatMapData.js"; // Adjust path as necessary

const minYear = 1995;
const maxYear = 2022;
const url =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const dataByYear = {};
    for (let y = minYear; y <= maxYear; y++) {
      const filteredData = countryData.filter((c) => c.year === y);
      dataByYear[y] = data.features.map((d) => {
        const countryValue =
          filteredData.find((c) => c.country === d.properties.name)?.value || 0;
        return {
          ...d,
          properties: {
            ...d.properties,
            value: countryValue,
          },
        };
      });
    }
    fs.writeFileSync("./precomputedData.json", JSON.stringify(dataByYear));
    console.log("Data preprocessed and saved.");
  });
