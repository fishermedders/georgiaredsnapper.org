import { Link } from "react-router-dom";
import "./WhatIs.css";

export default function WhatIs() {
  return (
    <section
      className="section section--bg-white"
      aria-labelledby="what-is-heading"
    >
      <div className="section-inner">
        <h2 id="what-is-heading">What Is the Red Snapper Program?</h2>

        <p className="lead">
          Georgia DNR is operating an Exempted Fishing Permit (EFP) program that
          establishes a two-month recreational Red Snapper season beginning in
          2026. The program uses a state-managed electronic reporting app to
          register trips and collect catch &amp; effort data.
        </p>

        <div className="what-is-cards">
          <div className="what-is-card">
            <div className="what-is-card__icon">📅</div>
            <h3>Season Basics</h3>
            <p>
              Two-month season · 1 fish per person per day · No minimum size
              limit
            </p>
          </div>

          <div className="what-is-card">
            <div className="what-is-card__icon">📋</div>
            <h3>Mandatory Reporting</h3>
            <p>
              All participating anglers must register trips and report catch
              &amp; effort using the Georgia reporting app.{" "}
              <Link to="/season-info">View season details →</Link>
            </p>
          </div>

          <div className="what-is-card">
            <div className="what-is-card__icon">🤝</div>
            <h3>Regional Partners</h3>
            <p>
              GA DNR collaborates with South Atlantic partners including SC DNR,
              NC Marine Fisheries, and Yamaha Rightwaters.
            </p>
          </div>
        </div>

        <div className="what-is-ctas">
          <Link to="/about" className="btn">
            Learn More About the Program
          </Link>
          <Link to="/season-info" className="btn btn--secondary">
            Season Details &amp; Rules
          </Link>
        </div>
      </div>
    </section>
  );
}
