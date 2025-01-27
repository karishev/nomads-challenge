import React from "react";

const Game = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<iframe
				loading="lazy"
				title="Solution"
				style={{
					position: "absolute",
					width: "100%",
					height: "110%",
					top: "0",
					left: "0",
					border: "none",
				}}
				src="https://www.canva.com/design/DAGSwebHLcU/I5u6ehrhwwuwAPyK6ce5Dg/view?embed"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default Game;
