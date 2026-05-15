import { Link } from "react-router-dom";
import { VESL_URL } from "../utils/constants.js";
import "./DownloadQuickStart.css";

export default function DownloadQuickStart() {
  return (
    <section
      id="download"
      className="section section--bg-white"
      aria-labelledby="download-heading"
    >
      <div className="section-inner">
        <div className="download-layout">
          <div className="download-panel">
            <h3 id="download-heading">Onboard with VESL</h3>
            <p>
              Before you fish, you need a free VESL account. Onboarding takes
              just a few minutes and only needs to be done once. Use the link
              below to get started.
            </p>
            <p>
              You can then access VESL anytime through their mobile app (iPhone
              or Android) or directly through their website, whichever is most
              convenient for you.
            </p>
            <div className="download-buttons">
              <a
                href={VESL_URL}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to register with the VESL Reporting Platform
              </a>
            </div>
            <p className="download-support">
              Need help? Email{" "}
              <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>{" "}
              or call toll-free <a href="tel:84476274357">844-SNAP-HELP</a>{" "}
              (8a.m. - 8p.m. EST).
            </p>
          </div>

          <aside className="quicklinks-panel" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/how-it-works">
                  Step-by-step reporting instructions
                </Link>
              </li>
              <li>
                <Link to="/season-info">
                  Season dates, bag limits &amp; rules
                </Link>
              </li>
              <li>
                <Link to="/faq">Frequently asked questions (FAQs)</Link>
              </li>
              <li>
                <Link to="/contact">Contact the project team</Link>
              </li>
              <li>
                <Link to="https://safmc.net/best-fishing-practices/">
                  Learn about Best Fishing Practices for Red Snapper and Federal
                  Gear Requirements
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
