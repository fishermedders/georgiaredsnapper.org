import React from "react";
import { Link } from "react-router-dom";
import "./DownloadQuickStart.css";

/**
 * DownloadQuickStart.jsx
 *
 * Condensed summary used on the Home page. Avoids repeating workflow or
 * regulatory details — links to dedicated pages for full instructions
 * (HowItWorks, SeasonInfo) and contact information.
 */

export default function DownloadQuickStart() {
  return (
    <section
      id="download"
      className="download-quickstart"
      aria-labelledby="download-heading"
    >
      <div className="download-quickstart-content section-inner">
        <div className="download-box">
          <div className="download-text">
            <h3 id="download-heading">Official Georgia Reporting App</h3>

            <p className="lead">
              Use the official state reporting app to register trips and submit
              catch & effort reports during the EFP season. The app supports
              offline logging and later synchronization.
            </p>

            <div className="store-buttons" aria-hidden="false">
              <a
                href="#"
                className="store-btn"
                aria-label="Download on the App Store"
              >
                <img src="/apple.png" alt="App Store" />
                <span className="label">App Store</span>
              </a>

              <a
                href="#"
                className="store-btn"
                aria-label="Get it on Google Play"
              >
                <img src="/android.png" alt="Google Play" />
                <span className="label">Google Play</span>
              </a>
            </div>
          </div>

          <div className="phone-mockup" aria-hidden="true">
            <img src="/mockup.png" alt="Reporting app preview on phone" />
          </div>
        </div>

        <aside className="quick-start-box" aria-label="Quick links">
          <h3>Quick links</h3>

          <ul>
            <li>
              <Link to="/how-it-works">How the reporting workflow works</Link>
            </li>
            <li>
              <Link to="/season-info">Season details, bag & size limits</Link>
            </li>
            <li>
              <Link to="/contact">Contact the project team</Link>
            </li>
          </ul>
        </aside>
      </div>
      <br />
    </section>
  );
}
