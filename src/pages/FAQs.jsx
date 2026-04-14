import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles/Home.css"; // shared tokens/utilities
import "./styles/FAQs.css";

/**
 * src/pages/FAQs.jsx
 *
 * Condensed FAQ page — removes long, repeated regulatory text and points users
 * to the dedicated pages for full procedural or regulatory details.
 *
 * Keep only unique, high-value Q&As here: privacy, offline behavior, compliance,
 * and where to find step-by-step instructions or official season rules.
 */

export default function FAQs() {
  const faqs = [
    {
      q: "Where can I find the official season dates, bag limits, and size rules?",
      a: (
        <>
          Official season rules (dates, bag/size limits, and any area closures)
          are maintained on the Season Information page. Visit{" "}
          <Link to="/season-info">Season Information</Link> for the
          authoritative details.
        </>
      ),
    },
    {
      q: "Is trip registration and reporting required to participate?",
      a: (
        <>
          Yes — participation requirements and whether a trip authorization is
          required are described on the Season Information and How It Works
          pages. For the step-by-step workflow that explains registering trips,
          obtaining authorizations, and submitting post‑trip reports, see{" "}
          <Link to="/how-it-works">How It Works</Link>.
        </>
      ),
    },
    {
      q: "What data do I need to report?",
      a: (
        <>
          Typical required fields include harvest and release counts, fishing
          effort (number of anglers/time), and an approximate location or depth.
          Full reporting fields and examples are shown on the How It Works page.
        </>
      ),
    },
    {
      q: "What if I don't have cell service while I'm on the water?",
      a: (
        <>
          The state reporting application supports offline logging so you can
          record catches while out of range; entries will sync automatically
          when you reconnect. Note: authorizations (when required) should be
          obtained before going offshore — check{" "}
          <Link to="/season-info">Season Information</Link>.
        </>
      ),
    },
    {
      q: "How is my personal information handled?",
      a: (
        <>
          Personal information collected for program administration is protected
          and used only for management, compliance follow-up, or authorized
          research. Aggregated and anonymized data products are used in stock
          assessments. For specific privacy questions, contact the project team
          via the <Link to="/contact">Contact</Link> page.
        </>
      ),
    },
    {
      q: "What happens if I don't comply with reporting or authorization rules?",
      a: (
        <>
          Noncompliance can affect eligibility for future participation in the
          program and may be referred to enforcement if warranted. For details
          about compliance expectations and consequences see{" "}
          <Link to="/season-info">Season Information</Link> and{" "}
          <Link to="/how-it-works">How It Works</Link>.
        </>
      ),
    },
    {
      q: "Is the program risky for the Red Snapper stock?",
      a: (
        <>
          The most recent assessments (SEDAR 73, 2024 update) indicate the South
          Atlantic Red Snapper stock is rebuilding and not overfished. Program
          design (required reporting and biological sampling) was intended to
          lower risk while providing longer, more predictable seasons. See{" "}
          <Link to="/season-info">Season Information</Link> for the assessment
          summary and references.
        </>
      ),
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-page section--edge-to-edge">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            This page provides concise answers to commonly asked questions. For
            full regulatory text, procedural instructions, and step‑by‑step
            guidance, use the links below to navigate to the dedicated pages.
          </p>

          <div className="faq-grid" style={{ marginTop: 12 }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                className="faq-item"
                style={{ marginBottom: 12 }}
              >
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <p style={{ marginTop: 8 }}>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
