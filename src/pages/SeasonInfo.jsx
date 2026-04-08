import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";
//import "./SeasonInfo.css";

export default function SeasonInfo() {
  // Placeholder data — replace with real season dates and rules as needed.
  const currentSeason = {
    status: "Open",
    startDate: "June 1, 2026",
    endDate: "August 31, 2026",
    bagLimit: "1 per person per day",
    sizeLimit: "Minimum size: 16 inches",
  };

  const quickRegulations = [
    "Possession and landing rules apply to both recreational and for-hire vessels.",
    "All red snapper caught must be reported via the VESL app during the open season.",
    "Follow state and federal regulations for size and bag limits; these may differ by area.",
    "Respect seasonal closures and area-based restrictions; check maps below.",
  ];

  const resources = [
    { title: "GA DNR Red Snapper Page", href: "https://gadnr.org" },
    {
      title: "NOAA Fisheries Regulations",
      href: "https://www.fisheries.noaa.gov",
    },
    { title: "VESL App Help", href: "#" },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Season Information</h2>

          <p className="lead">
            Find the current open/closed status, important regulation
            highlights, and helpful resources related to Georgia red snapper
            seasons. This page provides a quick reference, but always check
            official state and federal sources for the most current rules.
          </p>

          <div className="grid grid--cols-2" style={{ gap: 18, marginTop: 18 }}>
            <div className="card">
              <h3 className="card__title">Current Season</h3>
              <div style={{ marginTop: 8 }}>
                <p style={{ margin: 0 }}>
                  <strong>Status:</strong> {currentSeason.status}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Dates:</strong> {currentSeason.startDate} —{" "}
                  {currentSeason.endDate}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Bag limit:</strong> {currentSeason.bagLimit}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Size limit:</strong> {currentSeason.sizeLimit}
                </p>
              </div>

              <div style={{ marginTop: 12 }}>
                <Link
                  to="/faqs"
                  className="btn btn--secondary"
                  style={{ marginRight: 8 }}
                >
                  FAQs
                </Link>
                <Link to="/how-it-works" className="btn">
                  How to Report
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="card__title">Quick Regulation Highlights</h3>
              <ul style={{ marginTop: 8 }}>
                {quickRegulations.map((r) => (
                  <li key={r} style={{ marginBottom: 8 }}>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>Closed Areas & Maps</h2>
          <p>
            Certain areas may be closed or have special restrictions. View the
            interactive maps on the state website or contact the fisheries
            office for detailed geospatial boundaries.
          </p>

          <div style={{ marginTop: 16 }} className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Interactive Maps</h3>
              <p className="card__body">
                We recommend checking the official Georgia DNR and NOAA maps for
                the most up-to-date closure areas. These maps identify
                inshore/outshore boundaries and temporary closures.
              </p>
              <p style={{ marginTop: 8 }}>
                <a href="https://gadnr.org" className="btn btn--secondary">
                  View GA DNR Maps
                </a>
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Reporting Areas</h3>
              <p className="card__body">
                When reporting a trip or catch, please choose the reporting area
                that most closely matches your fishing location (e.g., inshore,
                nearshore, offshore).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Resources</h2>

          <div className="grid grid--cols-3" style={{ marginTop: 12 }}>
            {resources.map((r) => (
              <div key={r.title} className="card">
                <h3 className="card__title">{r.title}</h3>
                <p className="card__body">
                  <a href={r.href} target="_blank" rel="noreferrer">
                    Visit resource
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <p className="u-muted" style={{ marginBottom: 12 }}>
              Need personalized assistance?
            </p>
            <Link to="/contact" className="btn">
              Contact Fisheries Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
