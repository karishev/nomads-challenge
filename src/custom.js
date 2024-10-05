const data = {
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [82.9319, 11.7401],
      },
      properties: {
        name: "Tsunami in India 2004",
        affected_areas: [
          "Tamil Nadu",
          "Andhra Pradesh",
          "Andaman and Nicobar Islands",
        ],
        death_toll: 12405,
        missing: 5600,
        affected_population: 2790000,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [95.3829, 16.8256],
      },
      properties: {
        name: "Nargis Cyclone 2008 in Myanmar",
        affected_areas: ["Irrawaddy Delta", "Yangon"],
        death_toll: 84537,
        missing: 53836,
        affected_population: 5500000,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.6753, 9.082],
      },
      properties: {
        name: "Nigeria (Climate Change Impact)",
        affected_areas: ["Nationwide"],
        effects: "Increased temperatures, flooding",
        gender_disparity: "Girls more affected in education",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [125.6, 11.046],
      },
      properties: {
        name: "Typhoon Haiyan in Philippines 2013",
        affected_areas: ["Leyte", "Samar", "Eastern Visayas"],
        death_toll: 6300,
        missing: 1061,
        affected_population: 16000000,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [69.3451, 30.3753],
      },
      properties: {
        name: "Pakistan (Climate Change Impact)",
        affected_areas: ["Sindh", "Punjab", "Khyber Pakhtunkhwa"],
        effects: "Flooding, heatwaves",
        gender_disparity: "Female-headed households more vulnerable",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [149.0124, -37.0201],
      },
      properties: {
        name: "Australian Bushfires 2020",
        affected_areas: ["New South Wales", "Victoria", "Queensland"],
        death_toll: 33,
        affected_population: 3000000,
        wildlife_impact: "Estimated 3 billion animals affected",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [42.5903, 5.1521],
      },
      properties: {
        name: "Horn of Africa Drought 2011",
        affected_areas: ["Somalia", "Ethiopia", "Kenya"],
        death_toll: 260000,
        affected_population: 13000000,
        effects: "Severe food insecurity, displacement",
      },
    },
  ],
};

export default data;
