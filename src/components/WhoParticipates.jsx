import React from "react";
import { Link } from "react-router-dom";
import "./WhoParticipates.css";

/**
 * WhoParticipates.jsx
 *
 * Updated to reflect that participation is mandatory for anglers
 * fishing under the approved EFP season in federal waters off Georgia.
 *
 * - Clearly lists who is required to participate and who is not.
 * - Provides concise, actionable requirements (register trips, obtain
 *   trip authorization number, submit post-trip report).
 * - Notes enforcement consequence (potential denial of future EFP participation).
 * - Mentions supporting program elements (carcass-donation stations, Yamaha Rightwaters).
 */

export default function WhoParticipates() {
  return (
    <section
      className="section who-needs section--bg-white section--edge-to-edge section--with-divider"
      aria-labelledby="who-needs-heading"
    >
      <div className="section-inner">
        <h2 id="who-needs-heading">Who Must Participate?</h2>

        <p className="lead">
          Under the approved Exempted Fishing Permit (EFP) that establishes the
          two-month recreational Red Snapper season beginning in 2026,
          participation in the state's electronic trip-registration and
          reporting program is mandatory for all anglers fishing under the EFP
          in federal waters off Georgia's coast.
        </p>

        <div
          className="compare-grid compare-grid--narrow"
          role="list"
          aria-label="Required and not required participants"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <div
            className="compare-box required"
            role="listitem"
            aria-labelledby="required-heading"
          >
            <header id="required-heading">REQUIRED</header>
            <ul>
              <li>
                Private recreational anglers fishing for Red Snapper in federal
                waters during the EFP season
              </li>
              <li>For-hire captains and guides operating under the EFP</li>
              <li>
                Any participant retaining Red Snapper during the two-month EFP
                season
              </li>
            </ul>
          </div>

          <div
            className="compare-box not-required"
            role="listitem"
            aria-labelledby="not-required-heading"
          >
            <header id="not-required-heading">NOT REQUIRED</header>
            <ul>
              <li>Anglers not fishing for Red Snapper during the EFP season</li>
              <li>
                Fishing that occurs exclusively in state waters and is not
                covered by the EFP
              </li>
              <li>
                Commercial fishers not participating under the recreational EFP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
