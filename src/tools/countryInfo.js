import styles from "./info.module.css";

export const Info = ({ data, setClose }) => {
  // console.log(props);

  return (
    <div className={styles.country_info}>
      <div onClick={setClose} className={styles.close}>
        <img src="/close_button.svg" alt="close" />
      </div>
      <h2>{data.name}</h2>
      <div>
        <ul className={styles.recordings}>
          {data.affected_areas ? (
            <li>Affected Areas: {data.affected_areas.join(", ")}</li>
          ) : (
            ""
          )}
          {data.death_toll ? <li>Death Toll: {data.death_toll}</li> : ""}
          {data.missing ? <li>Missing: {data.missing}</li> : ""}
          {data.affected_population ? (
            <li>Affected Population: {data.affected_population}</li>
          ) : (
            ""
          )}
        </ul>
        {data.effects ? <p>{data.effects}</p> : ""}
        {data.impact ? (
          <p dangerouslySetInnerHTML={{ __html: data.impact }} />
        ) : (
          ""
        )}
        {data.gender_data ? (
          <p dangerouslySetInnerHTML={{ __html: data.gender_data }} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
