import React from "react";
import { Link } from "react-router-dom";
//import "./HowItWorks.css"; // optional - create if you want page-specific styles

export default function HowItWorks() {
  const steps = [
    {
      title: "Download the VESL App",
      body: "Get the VESL app from the App Store or Google Play and create a free account. The app works offline and syncs when you have a connection.",
    },
    {
      title: "Register Your Trip",
      body: "Before or after you launch, open VESL and quickly log a trip. Basic details (date, location, anglers) are all that's required to start.",
    },
    {
      title: "Report Your Catch",
      body: "When you catch a red snapper, record the catch and relevant details in the app. Reports are simple, fast, and designed for minimal distraction while on the water.",
    },
    {
      title: "Contribute to Better Management",
      body: "Your submitted reports are aggregated with other angler data to help fisheries managers make more informed decisions about seasons and resource stewardship.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>How It Works</h2>

          <p className="lead">
            Participating is quick and straightforward. Below is a short
            walkthrough of the steps anglers follow to report trips and catches
            using the VESL app. Your contributions help improve science-based
            management and create better outcomes for recreational fishing.
          </p>

          <div className="grid grid--cols-2" style={{ marginTop: 20 }}>
            <div>
              <h3>Quick Overview</h3>
              <ul>
                <li>Download VESL and create an account</li>
                <li>Log trips with basic trip info</li>
                <li>
                  Report catches (species, count, size info when available)
                </li>
                <li>
                  Sync and contribute — data are used anonymously for management
                </li>
              </ul>
            </div>

            <div>
              <h3>Data Privacy & Use</h3>
              <p>
                All angler data collected via VESL are managed securely.
                Personal information is protected and reporting is used to
                produce anonymized summaries for fisheries management and
                research. If you have questions about data use, contact the
                project team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Step-by-step</h2>

          <div className="grid grid--cols-1" style={{ gap: 14, marginTop: 12 }}>
            {steps.map((s, i) => (
              <article key={s.title} className="card">
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div
                    style={{
                      minWidth: 36,
                      height: 36,
                      borderRadius: 999,
                      background:
                        "linear-gradient(180deg, var(--primary-blue, #2a5a8a), var(--primary-blue-dark, #24476a))",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      boxShadow: "0 6px 16px rgba(36,78,134,0.14)",
                    }}
                    aria-hidden
                  >
                    {i + 1}
                  </div>

                  <div>
                    <h3 style={{ margin: 0 }}>{s.title}</h3>
                    <p
                      style={{
                        marginTop: 8,
                        marginBottom: 0,
                        color: "var(--muted, #6b7280)",
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bg-page section--edge-to-edge">
        <div className="section-inner">
          <h2>Need Help?</h2>
          <p className="lead">
            If you have trouble using the app or questions about reporting, our
            team is here to assist. Visit the FAQs or get in touch directly.
          </p>

          <p style={{ marginTop: 12 }}>
            <Link to="/faqs" className="btn">
              Read FAQs
            </Link>{" "}
            <Link
              to="/contact"
              className="btn btn--secondary"
              style={{ marginLeft: 12 }}
            >
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
