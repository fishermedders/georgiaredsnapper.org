import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <main className="content-container">
      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>About the Georgia Red Snapper Project</h2>
          <p className="lead">
            The Georgia Red Snapper Project is a collaborative effort between
            state and federal partners, researchers, and anglers to improve
            fishery management through better data and community involvement.
            Using angler-reported data via the VESL app, the project tests new
            methods that can lead to longer seasons, better resource stewardship,
            and more predictable opportunities for recreational fishers.
          </p>

          <div className="grid grid--cols-3" style={{ marginTop: 20 }}>
            <div className="card">
              <h3 className="card__title">Our Mission</h3>
              <p className="card__body">
                To improve decision-making by increasing data quality and
                participation from recreational anglers, enabling adaptive and
                science-based fisheries management.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Partnerships</h3>
              <p className="card__body">
                This project brings together Georgia DNR, NOAA Fisheries,
                regional partners, and industry stakeholders to design,
                implement, and evaluate new reporting systems.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Why it Matters</h3>
              <p className="card__body">
                Angler-supplied reports supplement traditional surveys and
                at-sea sampling to provide a richer understanding of catch,
                effort, and temporal patterns that matter to managers and fishers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>How We Work With Anglers</h2>
          <p>
            Participation is voluntary but vital. Anglers help by downloading the
            VESL app, logging trips, and submitting catch reports. The data are
            aggregated and used only for management and research — personal
            information is kept private and secure.
          </p>

          <div className="grid grid--cols-3" style={{ marginTop: 18 }}>
            <div className="card">
              <h3 className="card__title">Download</h3>
              <p className="card__body">Get the VESL app from the App Store or Google Play.</p>
            </div>

            <div className="card">
              <h3 className="card__title">Log Trips</h3>
              <p className="card__body">Record your fishing trips quickly, even offline.</p>
            </div>

            <div className="card">
              <h3 className="card__title">Report Catches</h3>
              <p className="card__body">Submit catch reports to contribute to better science.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Project Contacts & Resources</h2>

          <div className="grid grid--cols-2" style={{ marginTop: 18 }}>
            <div>
              <h3 className="card__title">Contact the Team</h3>
              <p className="card__body">
                For questions about the project, data use, or participation,
                please contact the Georgia DNR fisheries team or use our
                contact page.
              </p>
              <p>
                <Link to="/contact" className="btn btn--secondary">
                  Contact Us
                </Link>
              </p>
            </div>

            <div>
              <h3 className="card__title">Related Resources</h3>
              <ul>
                <li>
                  <a href="/how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="/season-info">Season Information</a>
                </li>
                <li>
                  <a href="/faqs">Frequently Asked Questions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-page section--edge-to-edge">
        <div className="section-inner">
          <h2>Get Involved</h2>
          <p className="lead">
            Whether you're new to the VESL app or a regular contributor, your
            reporting makes a measurable difference. Learn more about how to
            participate and how the data are used to improve management.
          </p>

          <p style={{ marginTop: 12 }}>
            <Link to="/how-it-works" className="btn">
              Learn How It Works
            </Link>
            {" "}
            <Link to="/faqs" className="btn btn--secondary" style={{ marginLeft: 12 }}>
              Read FAQs
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
