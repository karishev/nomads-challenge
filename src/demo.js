import React from "react";

const Demo = () => {
	return (
		<div>
			<h1>Demo</h1>
			<video controls width="100%">
				<source src="../public/video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Demo;
