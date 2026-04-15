import React from "react";
import { Link } from "react-router-dom";
import "./styles/About.css";

export default function About() {
  return (
    <main className="content-container">
      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>About the Georgia Red Snapper Program</h2>

          <p className="lead">
            The Georgia Department of Natural Resources (DNR) is operating a
            state-managed program under an Exempted Fishing Permit (EFP) that
            will establish a two-month recreational Red Snapper season in
            federal waters beginning in 2026. The program uses a Georgia
            electronic reporting platform to register trips and collect catch,
            discard, effort, and location information. Participation
            requirements apply to anglers fishing under the EFP and are
            described on the Season Information and How It Works pages.
          </p>

          <div className="grid grid--cols-2" style={{ marginTop: 20 }}>
            <div className="card">
              <h3 className="card__title">What this is</h3>
              <p className="card__body">
                A coordinated, state-led program operating under an Exempted
                Fishing Permit (EFP) that establishes a two-month recreational
                Red Snapper season and uses a state-managed electronic reporting
                platform to collect trip and catch data.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Why it matters</h3>
              <p className="card__body">
                Improved electronic reporting produces higher-quality data to
                support science-based management and enables longer, more
                predictable seasons for recreational anglers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-page section--edge-to-edge">
        <div className="section-inner">
          <h2>Quick Links</h2>

          <p className="lead">
            Use the links below for procedural steps, season rules, and answers
            to common questions.
          </p>

          <div className="info-links" style={{ marginTop: 14 }}>
            <div className="grid grid--cols-3" style={{ gap: 12 }}>
              <div className="card">
                <h4 className="card__title" style={{ marginTop: 0 }}>
                  How It Works
                </h4>
                <p className="card__body" style={{ marginBottom: 12 }}>
                  Step-by-step workflow for registering trips, logging catches,
                  and submitting post-trip reports.
                </p>
                <p style={{ marginTop: 6 }}>
                  <Link to="/how-it-works" className="btn">
                    View instructions
                  </Link>
                </p>
              </div>

              <div className="card">
                <h4 className="card__title" style={{ marginTop: 0 }}>
                  Season Information
                </h4>
                <p className="card__body" style={{ marginBottom: 12 }}>
                  Official season dates, bag & size limits, carcass-donation
                  sampling locations, and compliance requirements.
                </p>
                <p style={{ marginTop: 6 }}>
                  <Link to="/season-info" className="btn btn--secondary">
                    Season details
                  </Link>
                </p>
              </div>

              <div className="card">
                <h4 className="card__title" style={{ marginTop: 0 }}>
                  FAQs
                </h4>
                <p className="card__body" style={{ marginBottom: 12 }}>
                  Answers to common questions about reporting, privacy, and
                  program compliance.
                </p>
                <p style={{ marginTop: 6 }}>
                  <Link to="/faq" className="btn btn--tertiary">
                    Read FAQs
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
