import React from "react";
import { Glob } from "./glo"; // Import your globe component

const Solution = () => {
	return (
		<div>
			<h1>Solution</h1>
			<Glob /> {/* Reuse the Glob component */}
		</div>
	);
};

export default Solution;
