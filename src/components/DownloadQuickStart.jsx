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
            <h3 id="download-heading">Get the Official Reporting App</h3>
            <p>
              Use the Georgia reporting app to register trips and submit catch
              &amp; effort reports during the EFP season. The app supports
              offline logging and syncs when you reconnect.
            </p>
            <div className="download-buttons">
              <a
                href="#"
                className="store-btn"
                aria-label="Download on the App Store"
              >
                <img src="/apple.png" alt="" />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="store-btn"
                aria-label="Get it on Google Play"
              >
                <img src="/android.png" alt="" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          <aside className="quicklinks-panel" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/how-it-works">How the reporting workflow works</Link>
              </li>
              <li>
                <Link to="/season-info">
                  Season details, bag &amp; size limits
                </Link>
              </li>
              <li>
                <Link to="/faq">Frequently asked questions</Link>
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
