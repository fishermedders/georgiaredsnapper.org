import { Link } from "react-router-dom";
import "./styles/About.css";

export default function About() {
  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>About the Georgia Red Snapper Program</h2>

          <p className="lead">
            The Georgia Department of Natural Resources (DNR) is operating a
            state-managed program under an Exempted Fishing Permit (EFP) that
            establishes a two-month recreational Red Snapper season in federal
            waters beginning in 2026. The program uses an electronic reporting
            platform to register trips and collect catch, discard, effort, and
            location data.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">What This Is</h3>
              <p className="card__body">
                A coordinated, state-led program operating under an EFP that
                establishes a two-month recreational Red Snapper season and uses
                a state-managed electronic reporting platform to collect trip
                and catch data.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Why It Matters</h3>
              <p className="card__body">
                Improved electronic reporting produces higher-quality data to
                support science-based management and enables longer, more
                predictable seasons for recreational anglers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Quick Links</h2>

          <p className="lead">
            Use the links below for procedural steps, season rules, and answers
            to common questions.
          </p>

          <div className="grid grid--cols-3">
            <div className="card">
              <h4 className="card__title">How It Works</h4>
              <p className="card__body">
                Step-by-step workflow for registering trips, logging catches,
                and submitting post-trip reports.
              </p>
              <p>
                <Link to="/how-it-works" className="btn">
                  View Instructions
                </Link>
              </p>
            </div>

            <div className="card">
              <h4 className="card__title">Season Information</h4>
              <p className="card__body">
                Official season dates, bag &amp; size limits, carcass-donation
                sampling locations, and compliance requirements.
              </p>
              <p>
                <Link to="/season-info" className="btn btn--secondary">
                  Season Details
                </Link>
              </p>
            </div>

            <div className="card">
              <h4 className="card__title">FAQs</h4>
              <p className="card__body">
                Answers to common questions about reporting, privacy, and
                program compliance.
              </p>
              <p>
                <Link to="/faq" className="btn btn--secondary">
                  Read FAQs
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
