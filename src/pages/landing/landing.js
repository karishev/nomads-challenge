import "./landing.css";

export const Landing = () => {
  return (
    <div>
      <img className="background" src="/background.png" alt="logo" />
      <div className="menu-container">
        <div className="title">
          <h1>Climate and Gender</h1>
          <p>
            Exploring the connection between Gender Inequality and Climate
            Change
          </p>
        </div>
        <a href="/demo">
          <button className="menu-button">Get Started</button>
        </a>
        {/* <ul className="menu">
          <li>
            <a href="/demo">Demo</a>
          </li>
          <li>
            <a href="/heat/climate">Global</a>
          </li>
          <li>
            <a href="/caseStudy">Local</a>
          </li>
          <li>
            <a href="/solution">Model</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
