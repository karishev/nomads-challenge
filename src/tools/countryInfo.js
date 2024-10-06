import styles from "./info.module.css";

export const Info = ({ data }) => {
  // console.log(props);

  return (
    <div className="country_info">
      <div>{data.name}</div>
      <div>
        <ul className={styles.recordings}>
          <li>Affected Areas: {data.affected_areas.join(", ")}</li>
          <li>Death Toll: {data.death_toll}</li>
          <li>Missing: {data.missing}</li>
          <li>Affected Population: {data.affected_population}</li>
        </ul>
      </div>
    </div>
  );
};
