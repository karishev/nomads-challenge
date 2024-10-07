import styles from "./info.module.css";

export const Info = ({ data, setClose }) => {
	// console.log(props);

	return (
		<>
			<div className={styles.country_info}>
				<div onClick={setClose} className={styles.close}>
					<img src="/close_button.svg" alt="close" />
				</div>
				<h2>{data.name}</h2>
				<div className={styles.overview}>
					<p>{data.overview}</p>
				</div>
			</div>
			<div className={styles.actionplans}>
				<div className={styles.actionplan}>
					<div>
						<h2>Action Plan:</h2>
						<ul>
							<li>
								<strong>{data.actionPlan[0][0]}</strong> :{" "}
								{data.actionPlan[0][1]}
							</li>
							<li>
								<strong>{data.actionPlan[1][0]}</strong> :{" "}
								{data.actionPlan[1][1]}
							</li>
						</ul>
					</div>
					<button className="explore-button">Explore more</button>
				</div>
			</div>
		</>
	);
};
