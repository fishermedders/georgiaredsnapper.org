import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

/**
 * FAQ (teaser)
 *
 * Condensed FAQ used on the Home page. Displays a short set of high-level
 * Q&As and links to the full FAQ page for complete details.
 */

export default function FAQ() {
  return (
    <section
      className="faq-teaser section section--bg-white section--edge-to-edge"
      aria-labelledby="faq-teaser-heading"
    >
      <div className="section-inner">
        <h2 id="faq-teaser-heading">Quick FAQs</h2>

        <p className="lead">
          Short answers to common questions about the EFP season and reporting.
          For the full list and detailed guidance, visit the FAQs page.
        </p>

        <ul
          className="faq-teaser-list"
          style={{ marginTop: 12, lineHeight: 1.5 }}
        >
          <li>
            <strong>Is reporting required?</strong> Yes. Trip registration and
            post-trip reporting are required for anglers participating in the
            EFP season.
          </li>

          <li>
            <strong>Bag limit?</strong> 1 Red Snapper per person per day (no
            minimum size under the EFP).
          </li>

          <li>
            <strong>What about cell service?</strong> The reporting app supports
            offline logging and will sync when you reconnect.
          </li>
        </ul>

        <div style={{ marginTop: 16 }}>
          <Link to="/faq" className="btn">
            Read full FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
