import { Link } from "react-router-dom";
import "./styles/SeasonInfo.css";

export default function SeasonInfo() {
  const rules = [
    "Season: July 1 - August 31, 2026 (62 days)",
    "Waters: Federal waters (3-200 miles) off the Georgia coast",
    "Bag limit: 1 red snapper per person per day",
    "Size limit: No minimum size",
    "Trip registration: Required before departure via the VESL app (can be done up to 5 days in advance)",
    "Catch reporting: Required within 24 hours of trip departure time via VESL",
    "Must report: Both harvested and released red snapper",
    "Applies to: Private recreational anglers",
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>2026 Season Information</h2>

          <p className="lead">
            Georgia's 62-day red snapper season runs July 1 through August 31,
            2026 in federal waters. Here's everything you need to know before
            you fish.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Season Rules at a Glance</h3>
              <ul className="rules-list">
                {rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="card__title">How to Register &amp; Report</h3>
              <p className="card__body">
                <strong>Before your trip:</strong> Open the VESL app and create
                a trip report. You can do this up to 5 days in advance.
              </p>
              <p className="card__body">
                <strong>After your trip:</strong> Report all harvested and
                released red snapper within 24 hours of your departure time. It
                takes less than a minute.
              </p>
              <p className="card__body">
                <strong>Need the app?</strong> VESL is free on{" "}
                <a
                  href="https://apps.apple.com/us/app/vesl/id1540687104"
                  target="_blank"
                  rel="noreferrer"
                >
                  iPhone
                </a>
                ,{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.bluefindata.vesl&hl=en_US"
                  target="_blank"
                  rel="noreferrer"
                >
                  Android
                </a>
                , and desktop.
              </p>
              <div className="season-actions">
                <Link to="/how-it-works" className="btn">
                  Step-by-Step Instructions
                </Link>
                <a href="#" className="btn btn--secondary">
                  View an Instructional Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>Why Reporting Matters</h2>
          <p className="lead">
            For 15 years, data uncertainty kept federal red snapper seasons to
            just 1-2 days. VESL reporting provides the real-time, high-quality
            data needed to support longer seasons going forward.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">What Your Data Does</h3>
              <ul className="benefits-list">
                <li>
                  Provides real-time catch and trip information to fisheries
                  managers
                </li>
                <li>
                  Improves the accuracy of stock assessments used to set season
                  length
                </li>
                <li>
                  Reduces the data uncertainty that caused ultra-short seasons
                </li>
                <li>
                  Demonstrates that longer seasons work when paired with quality
                  data
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card__title">Future Seasons</h3>
              <p className="card__body">
                If Georgia demonstrates it can collect high-quality data through
                VESL, the EFP could be extended for two additional years: 2027
                and 2028. Your participation directly affects whether this
                continues.
              </p>
              <p className="card__body">
                CRD also continues operating{" "}
                <a href="https://coastalgadnr.org/MarineCarcass">
                  carcass-donation freezers
                </a>{" "}
                along the coast to collect age, size, and reproductive samples
                that complement electronic reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Stock Status</h2>

          <p className="lead">
            The 2024 SEDAR 73 stock assessment update indicates South Atlantic
            red snapper are not overfished and the stock is rebuilding ahead of
            schedule. Because fish retained under the EFP would otherwise be
            discarded, the program presents low risk when paired with mandatory
            reporting.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Resources</h3>
              <p className="card__body">
                <a
                  href="https://coastalgadnr.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Georgia DNR: Coastal Resources Division
                </a>
              </p>
              <p className="card__body">
                <a href="https://sedarweb.org" target="_blank" rel="noreferrer">
                  SEDAR 73 (2024) Stock Assessment
                </a>
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Questions?</h3>
              <p className="card__body">
                Email{" "}
                <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>{" "}
                or call <a href="tel:9122647218">912-264-7218</a> for help with
                reporting, the VESL app, or general questions.
              </p>
              <div className="season-actions">
                <Link to="/contact" className="btn">
                  Contact the Team
                </Link>
                <Link to="/faq" className="btn btn--secondary">
                  View FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
