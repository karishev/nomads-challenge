import React, { useEffect, useRef } from "react";
import styles from "./heatMap.module.css";

export function YearSlider({ minYear, maxYear, year, setYear }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Adjust scroll position when year changes
    const yearIndex = year - minYear;
    const position = yearIndex * 80; // 80 is the height of each year button
    if (sliderRef.current) {
      sliderRef.current.scrollTop =
        position - sliderRef.current.clientHeight / 2 + 40; // Centering the active year
    }
  }, [year, minYear]);

  useEffect(() => {
    // Handle scroll to update active year
    const handleScroll = () => {
      const index = Math.round(
        (sliderRef.current.scrollTop +
          sliderRef.current.clientHeight / 2 -
          40) /
          80
      );
      const newYear = minYear + index;
      if (year !== newYear) {
        setYear(newYear);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [year, minYear, setYear]);

  return (
    <div className={styles.rightSlider}>
      <div className={styles.yearSlider} ref={sliderRef}>
        <ul className={styles.yearList}>
          {[...Array(maxYear - minYear + 1)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => setYear(minYear + index)}
                className={`${
                  year === minYear + index ? styles.activeYear : ""
                } ${styles.yearButton}`}
              >
                {minYear + index}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
