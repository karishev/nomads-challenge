import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle menu
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.hamburgerContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div> */}
      {isOpen && ( // Only display menu if isOpen is true
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${location.pathname === '/demo' ? styles.active : ''}`}>
            <Link to="/demo" className={styles.navLink}>
              Demo
            </Link>
          </li>
          <li className={`${styles.navItem} ${location.pathname === '/heatMap' ? styles.active : ''}`}>
            <Link to="/heatMap" className={styles.navLink}>
              HeatMap
            </Link>
          </li>
          <li className={`${styles.navItem} ${location.pathname === '/caseStudy' ? styles.active : ''}`}>
            <Link to="/caseStudy" className={styles.navLink}>
              Case Study
            </Link>
          </li>
          <li className={`${styles.navItem} ${location.pathname === '/solution' ? styles.active : ''}`}>
            <Link to="/solution" className={styles.navLink}>
              Solution
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
