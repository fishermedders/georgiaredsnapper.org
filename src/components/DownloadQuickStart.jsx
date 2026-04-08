import "./DownloadQuickStart.css";

export default function DownloadQuickStart() {
  return (
    <section className="download-quickstart">
      <div className="download-quickstart-content">
        <div className="download-box">
          <div className="download-text">
            <h3>Download the VESL App</h3>
            <div className="store-buttons">
              <a href="#" className="store-btn">
                <img src="/apple.png" alt="App Store" />
                Download on the App Store
              </a>
              <a href="#" className="store-btn">
                <img src="/android.png" alt="Google Play" />
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="phone-mockup">
            <img src="/mockup.png" alt="VESL App Mockup" />
          </div>
        </div>

        <div className="quick-start-box">
          <h3>Quick Start Guide</h3>
          <ul>
            <li>
              <span>✔️</span> Easy Account Setup
            </li>
            <li>
              <span>✔️</span> Log Your Trips
            </li>
            <li>
              <span>✔️</span> Submit Reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
