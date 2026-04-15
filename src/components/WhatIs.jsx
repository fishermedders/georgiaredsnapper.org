import React from "react";
import { Link } from "react-router-dom";
import "./WhatIs.css";

/**
 * WhatIs.jsx
 *
 * Condensed summary used on the Home page. Keeps copy short and links to
 * the About and Season Information pages for full details so information
 * is not repeated elsewhere on the site.
 */

export default function WhatIs() {
  return (
    <section
      className="section what-is section--bg-white section--edge-to-edge"
      aria-labelledby="what-is-heading"
    >
      <div className="section-inner">
        <h2 id="what-is-heading">What is the Red Snapper Project?</h2>

        <p className="lead" style={{ marginBottom: 12 }}>
          The Georgia DNR is operating an Exempted Fishing Permit (EFP) program
          that will establish a two-month recreational Red Snapper season
          beginning in 2026. The program uses a state-managed electronic
          reporting app to register trips and collect catch and effort data.
        </p>

        <div className="card-grid" style={{ marginTop: 8 }}>
          <div className="info-card">
            <h3>Season basics</h3>
            <p>
              Two-month season • 1 fish per person per day • No minimum size
              limit
            </p>
          </div>

          <div className="info-card">
            <h3>Mandatory reporting</h3>
            <p>
              Participating anglers must register trips and report catch &amp;
              effort using the state reporting app. For details on trip
              authorizations and required post-trip reports, see the{" "}
              <a href="/season-info">Season Information</a> page.
            </p>
          </div>

          <div className="info-card">
            <h3>Regional partners</h3>
            <p>
              GA DNR with South Atlantic partners. See the{" "}
              <Link to="/partners">Partners</Link> page for details about
              partner organizations and funding.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div
            className="btn-group"
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <Link
              to="/about"
              className="btn"
              style={{ flex: "1 1 140px", minWidth: 140, textAlign: "center" }}
            >
              Learn more
            </Link>

            <Link
              to="/season-info"
              className="btn btn--secondary"
              style={{ flex: "1 1 140px", minWidth: 140, textAlign: "center" }}
            >
              Season details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
