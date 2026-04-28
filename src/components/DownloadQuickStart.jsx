import { Link } from "react-router-dom";
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
            <h3 id="download-heading">Download the VESL App</h3>
            <p>
              VESL is the free app you'll use to register trips and report your
              catch. It's available on iPhone, Android, and desktop. Reporting
              takes less than a minute.
            </p>
            <div className="download-buttons">
              <a
                href="https://apps.apple.com/us/app/vesl/id1540687104"
                className="store-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download VESL on the App Store"
              >
                <img src="/apple.png" alt="" />
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bluefindata.vesl&hl=en_US"
                className="store-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get VESL on Google Play"
              >
                <img src="/android.png" alt="" />
                <span>Google Play</span>
              </a>
            </div>
            <p className="download-support">
              Need help? Email{" "}
              <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>{" "}
              or call <a href="tel:9122647218">912-264-7218</a>.
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
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
