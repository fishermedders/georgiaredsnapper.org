import { Link } from "react-router-dom";
import "./WhatIs.css";

export default function WhatIs() {
  return (
    <section
      className="section section--bg-white"
      aria-labelledby="what-is-heading"
    >
      <div className="section-inner">
        <h2 id="what-is-heading">What Is the Georgia Red Snapper Project?</h2>

        <p className="lead">
          The Georgia Red Snapper Project is a new initiative from the Georgia
          DNR Coastal Resources Division that opens a 62-day recreational red
          snapper season, July 1 through August 31, 2026, in federal waters
          (3-200 miles) off the Georgia coast.
        </p>

        <div className="what-is-cards">
          <div className="what-is-card">
            <div className="what-is-card__icon">📅</div>
            <h3>62-Day Season</h3>
            <p>
              July 1 - August 31, 2026. After 15 years of one- and two-day
              federal seasons, Georgia anglers now have two full months on the
              water.
            </p>
          </div>

          <div className="what-is-card">
            <div className="what-is-card__icon">📱</div>
            <h3>Report with the VESL App</h3>
            <p>
              All anglers must register trips prior to departure and report
              catch within 24 hours using the free VESL app. It takes less than
              a minute and works on mobile and desktop.
            </p>
          </div>

          <div className="what-is-card">
            <div className="what-is-card__icon">📊</div>
            <h3>Better Data, Longer Seasons</h3>
            <p>
              Real-time reporting through VESL improves stock assessments and
              reduces the data uncertainty that led to ultra-short seasons in
              the past.
            </p>
          </div>
        </div>

        <div className="what-is-ctas">
          <Link to="/about" className="btn">
            Learn More
          </Link>
          <Link to="/season-info" className="btn btn--secondary">
            Season Rules &amp; Details
          </Link>
        </div>
      </div>
    </section>
  );
}
