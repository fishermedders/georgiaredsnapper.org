import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css"; // reuse shared page tokens and utilities
import "./FAQs.css"; // optional page-specific styles (create if desired)

export default function FAQs() {
  const faqs = [
    {
      q: "Is reporting mandatory?",
      a: "Yes — reporting is required for recreational anglers targeting red snapper in Georgia state waters during open seasons. The VESL app makes it quick and simple to submit a report.",
    },
    {
      q: "How long does it take to submit a report?",
      a: "Most reports take less than 3 minutes to complete. The app supports offline logging and will sync automatically when a connection is available.",
    },
    {
      q: "Is my personal information shared?",
      a: "No. Personal information is kept private and secure. Data submitted for management and research are aggregated and anonymized before analysis.",
    },
    {
      q: "What happens if I don't have cell service?",
      a: "You can still log trips and catches offline in the app — your entries will be stored locally and automatically uploaded once you reconnect to a network.",
    },
    {
      q: "Can I edit a report after I submit it?",
      a: "Yes. The VESL app allows you to modify or correct submitted reports. See the app's help section for step-by-step instructions.",
    },
    {
      q: "Who has access to the data I submit?",
      a: "Project partners and authorized researchers access aggregated data for fisheries management and scientific evaluation. Individual-level personal identifiers are not shared publicly.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-page section--edge-to-edge">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Below are answers to common questions about the Georgia Red Snapper
            Project and how to report using the VESL mobile app. If you don't
            find what you're looking for, please reach out via the contact
            page.
          </p>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <div className="faq-grid" style={{ marginTop: 12 }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                className="faq-item"
                style={{ marginBottom: 12 }}
                aria-expanded="false"
              >
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <p className="u-muted" style={{ marginBottom: 12 }}>
              Still have a question?
            </p>
            <Link to="/contact" className="btn">
              Contact the Project Team
            </Link>
            {" "}
            <Link to="/about" className="btn btn--secondary" style={{ marginLeft: 12 }}>
              About the Project
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>Helpful Resources</h2>

          <div className="grid grid--cols-3" style={{ marginTop: 12 }}>
            <div className="card">
              <h3 className="card__title">VESL App Help</h3>
              <p className="card__body">
                Visit the VESL help pages in the app for step-by-step guidance on logging trips and reporting catches.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Season Information</h3>
              <p className="card__body">
                For the latest seasons, bag limits, and regulations, visit the season information page or your state fishery website.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Data & Research</h3>
              <p className="card__body">
                Learn more about how angler-reported data are used in fisheries science and management by reviewing project publications and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
