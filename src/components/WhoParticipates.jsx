import React from "react";
import "./WhoParticipates.css";

/**
 * WhoParticipates.jsx
 *
 * - Wraps content in `.section-inner` so the section background can remain full-bleed
 *   while the content is constrained.
 * - Applies an explicit narrower constraint to the compare grid so this section
 *   doesn't feel too wide compared with the rest of the page.
 *
 * Note: the CSS file `WhoParticipates.css` still controls the visual appearance.
 * The inline style below ensures a narrower max width without requiring a CSS edit.
 */

export default function WhoParticipates() {
  return (
    <section
      className="section who-needs section--bg-white section--edge-to-edge section--with-divider"
      aria-labelledby="who-needs-heading"
    >
      <div className="section-inner">
        <h2 id="who-needs-heading">Who Needs to Participate?</h2>

        {/* Constrain the compare grid to a narrower width so the content doesn't stretch too wide */}
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
              <li>Recreational Snapper Anglers</li>
              <li>Charter Captains</li>
              <li>Headboats</li>
            </ul>
          </div>

          <div
            className="compare-box not-required"
            role="listitem"
            aria-labelledby="not-required-heading"
          >
            <header id="not-required-heading">NOT REQUIRED</header>
            <ul>
              <li>Not Targeting Snapper</li>
              <li>State Waters Only</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
