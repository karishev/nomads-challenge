
import styles from "./info.module.css";

export const Info = ({ country_name }) => {
  // console.log(props);

  return (
    <div className="country_info">
      <div dangerouslySetInnerHTML={{ __html: country_name }} />
      <div>
        <h4>Recordings</h4>
        <ul className={styles.recordings}></ul>
      </div>
    </div>
  );
};
