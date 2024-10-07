import React from "react";
import "./demo.css";

const Demo = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				paddingTop: "80px",
				backgroundColor: "#12293E",
			}}
		>
			<div className="videoContainer">
				<iframe
					width="80%"
					height="800"
					src="https://www.youtube.com/embed/4zuBMBL7-zY"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{ padding: "30px 50px" }}
				></iframe>
				<h3>
					The climate crisis is not <span>“gender neutral”</span>
				</h3>
			</div>
			<p className="captionContainer">
				Women and men are affected differently by weather and climate,
				and therefore need gender-sensitive information and services,
				WMO Secretary-General Celeste Saulo said in a keynote address.
				Women and girls are most affected by climate change due to
				limited mobility, caregiving roles, and pregnancy risks. They
				face challenges in securing food, water, and fuel, often forcing
				girls to leave school. Climate disasters also increase health
				risks and expose women to violence and exploitation.
				<br />
				<br />
				80% of people displaced by climate change are women. This
				emphasizes that "sustainability and gender equality can no
				longer be viewed in isolation" (TEAM LEWIS Foundation, 2022)
			</p>
		</div>
	);
};

export default Demo;
