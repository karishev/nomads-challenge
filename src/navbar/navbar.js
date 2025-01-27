import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true); // State to toggle menu
	const location = useLocation(); // Get current location

	// const toggleMenu = () => {
	//   setIsOpen(!isOpen);
	// };

	return (
		<nav className={styles.navbar}>
			{/* <div className={styles.hamburgerContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div> */}
			<div className={styles.logo}>
				<a href="/">
					<h2>nomads</h2>
				</a>
			</div>

			{isOpen && ( // Only display menu if isOpen is true
				<ul className={styles.navList}>
					<Link to="/demo" className={styles.navLink}>
						<li
							className={`${styles.navItem} ${
								location.pathname === "/demo"
									? styles.active
									: ""
							}`}
						>
							Demo
						</li>
					</Link>

					<Link to="/heatMap" className={styles.navLink}>
						<li
							className={`${styles.navItem} ${
								location.pathname === "/heatMap"
									? styles.active
									: ""
							}`}
						>
							HeatMaps
						</li>
					</Link>

					<Link to="/caseStudy" className={styles.navLink}>
						<li
							className={`${styles.navItem} ${
								location.pathname === "/caseStudy"
									? styles.active
									: ""
							}`}
						>
							Case Study
						</li>
					</Link>
					<Link to="/solution" className={styles.navLink}>
						<li
							className={`${styles.navItem} ${
								location.pathname === "/solution"
									? styles.active
									: ""
							}`}
						>
							Solution
						</li>
					</Link>

					<Link to="/game" className={styles.navLink}>
						<li
							className={`${styles.navItem} ${
								location.pathname === "/game"
									? styles.active
									: ""
							}`}
						>
							Game
						</li>
					</Link>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
