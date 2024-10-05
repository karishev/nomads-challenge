import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false); // State to toggle menu

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav style={navbarStyle}>
			<div style={hamburgerContainerStyle}>
				<div style={hamburgerStyle} onClick={toggleMenu}>
					<div style={lineStyle}></div>
					<div style={lineStyle}></div>
					<div style={lineStyle}></div>
				</div>
			</div>
			{isOpen && ( // Only display menu if isOpen is true
				<ul style={ulStyle}>
					<li style={liStyle}>
						<Link to="/demo" style={aStyle}>
							Demo
						</Link>
					</li>
					<li style={liStyle}>
						<Link to="/heatMap" style={aStyle}>
							HeatMap
						</Link>
					</li>
					<li style={liStyle}>
						<Link to="/caseStudy" style={aStyle}>
							Case Study
						</Link>
					</li>
					<li style={liStyle}>
						<Link to="/solution" style={aStyle}>
							Solution
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

// Wrapping container for the hamburger to keep its position stable
const hamburgerContainerStyle = {
	width: "100%", // Ensure fixed width
	height: "30px", // Ensure fdixed height
	display: "flex",
	// alignItems: "center",
	justifyContent: "flex-end",
};

const hamburgerStyle = {
	cursor: "pointer",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	width: "30px",
	height: "20px",
	boxSizing: "border-box", // Ensures no overflow or size changes
	padding: "0",
	margin: "0",
};

const lineStyle = {
	height: "3px",
	width: "100%",
	backgroundColor: "white",
	margin: "2px 0",
	boxSizing: "border-box",
};

const navbarStyle = {
	position: "fixed",
	top: "10px",
	right: "20px",
	zIndex: 10, // Ensure it's above other elements
};

const ulStyle = {
	listStyleType: "none",
	padding: "10px",
	backgroundColor: "#333",
	borderRadius: "10px", // More rounded corners
	textAlign: "center",
};

const liStyle = {
	padding: "15px 0", // Increase padding for more spacing
	textTransform: "uppercase", // Make text uppercase for better emphasis
};

const aStyle = {
	color: "white", // Make text white
	textDecoration: "none", // Remove underline
	fontSize: "18px", // Increase font size
	fontWeight: "bold", // Make the text bold
	transition: "color 0.3s ease", // Smooth transition for hover effect
};

export default Navbar;
