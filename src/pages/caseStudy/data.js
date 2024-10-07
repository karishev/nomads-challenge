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
				effects: "Increased poverty, Healthcare barriers",
				death_toll: 12405,
				missing: 5600,
				affected_population: 2790000,
				impact: "The disaster exacerbated existing gender inequalities, as women faced significant barriers in accessing relief and recovery resources, impacting their livelihoods and overall well-being.",
				gender_data:
					"<ul><li>Women and children were disproportionately affected, with reports indicating that 61% of casualties were female and higher child mortality rates among girls than boys.</li><li>A survey conducted by Oxfam International reported that only 20% of women had equal access to relief aid in the immediate aftermath of the tsunami.</li></ul>",
				plot: "India.png",
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
				effects: "Displacement, Food Insecurity",
				death_toll: 84537,
				missing: 53836,
				affected_population: 5500000,
				impact: "Women, especially in rural areas, faced <b>disproportionately higher risks</b> during and after the cyclone.",
				gender_data:
					"<ul><li>61% of the casualties were female, with some villages seeing 2:1 death of women compared to men</li><li>Child mortality rates were higher among young girls than boys</li></ul> ",
				plot: "myanmar.png",
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
				impact: "Nigeria is getting hotter and drier. These climate disasters <b>disrupt access to schools and disproportionately affect girls, who often face barriers to attendance</b>.",
				gender_data:
					"<ul><li>Each additional year a girl attends school can improve her country's resilience to climate disasters by 3.2 points on a vulnerability index.</li></ul> ",
				plot: "nigeria.png",
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
				effects: "Increased mortality, Access barriers, Displacement",
				death_toll: 6300,
				missing: 1061,
				affected_population: 16000000,
				impact: "<b>Typhoon Haiyan increased gender inequality in the Philippines by raising women's mortality rates and limiting their access to relief and education.</b>",
				gender_data:
					"<ul><li>71% of women felt unsafe in evacuation centers</li><li>A UN Women report highlighted that women made up 70% of the agricultural workforce in affected areas but struggled to access relief aid.</li></ul> ",
				plot: "Philipines.png",
			},
		},

		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [42.5903, 5.1521],
			},
			properties: {
				name: "Cyclone Gorky, Bangladesh 1991",
				affected_areas: ["Chittagong", "Cox's Bazar", "Noakhali"],
				death_toll: 138000,
				affected_population: 10000000,
				effects: "Severe destruction, food insecurity, displacement.",
				impact: "<b>Typhoon Haiyan increased gender inequality in the Philippines by raising women's mortality rates and limiting their access to relief and education.</b>",
				gender_data:
					"<ul><li>Around 90% of the fatalities were women. Mortality gap between women and men of 14:1 was in part due to restrictive gender roles that limited their mobility, lack of access to timely evacuation information</li></ul> ",
				plot: "Bangladesh.png",
			},
		},
	],
};

export default data;
