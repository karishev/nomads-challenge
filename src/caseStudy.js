import React from "react";
import { Glob } from "./glo"; // Import your globe component

const CaseStudy = () => {
	return (
		<div>
			<h1>Case Study</h1>
			<Glob /> {/* Reuse the Glob component */}
		</div>
	);
};

export default CaseStudy;
