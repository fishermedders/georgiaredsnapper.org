import React from "react";
import { Link } from "react-router-dom";

/**
 * HowItWorks.jsx
 *
 * This page describes the user workflow for participating in Georgia's
 * electronic trip-registration and reporting program. Season-specific
 * regulatory details (dates, bag/size limits, official season status)
 * are intentionally not repeated here — see the Season Information page
 * for those rules.
 *
 * The page keeps a clear, step-by-step workflow that applies across seasons
 * and links to SeasonInfo for anything regulatory.
 */

export default function HowItWorks() {
  const workflowSteps = [
    {
      title: "Get the Reporting App",
      body: "Install the Georgia reporting app (iOS or Android) or use the state web portal. The app is the primary tool for trip registration, in-trip logging, and post-trip reporting.",
    },
    {
      title: "Register Your Account & Vessel",
      body: "Create an account and register your vessel or operator profile. Keeping your profile up to date helps ensure accurate reporting and efficient program administration.",
    },
    {
      title: "Check Season Requirements",
      body: "Visit the Season Information page to confirm whether a trip authorization is required for the current season and for authoritative regulatory details.",
    },
    {
      title: "Log the Trip",
      body: "At trip start (or shortly after), register the trip in the app with basic details (date, number of anglers, reporting area). The app supports offline logging and will sync when a connection is available.",
    },
    {
      title: "Record Catches & Releases",
      body: "During the trip, add any retained or released fish. Enter species and counts; optional biological fields can be provided when available to improve scientific value.",
    },
    {
      title: "Submit a Post‑Trip Report",
      body: "After returning, submit the post‑trip report including harvests, releases, effort, and approximate location or depth fished. Timely and accurate post‑trip reports are essential for data quality.",
    },
    {
      title: "Support Biological Sampling",
      body: "Where available, consider using carcass-donation stations and other sampling opportunities to support age, size, and reproductive data collection that complements electronic reporting.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>How the Reporting Workflow Works</h2>

          <p className="lead">
            This page explains the practical steps anglers follow to register
            trips and report catches using the state-managed reporting platform.
            For season dates, bag limits, size rules, and any season-specific
            regulatory requirements, please see the{" "}
            <Link to="/season-info">Season Information</Link> page.
          </p>

          <div className="grid grid--cols-2" style={{ marginTop: 20 }}>
            <div>
              <h3>Overview</h3>
              <p>
                The workflow is built around three simple phases: prepare
                (account and authorization), log (in-trip data), and report
                (post-trip submission). The platform is designed to be quick to
                use, work offline, and minimize distraction while on the water.
              </p>
            </div>

            <div>
              <h3>Who uses this?</h3>
              <p>
                Recreational anglers, charter operators, and headboats that are
                participating in the state's reporting program use this
                workflow. If you're unsure whether the current season or your
                trip is covered, check{" "}
                <Link to="/season-info">Season Information</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Step-by-step Workflow</h2>

          <div
            className="grid grid--cols-1"
            style={{ gap: 14, marginTop: 12 }}
            aria-live="polite"
          >
            {workflowSteps.map((s, i) => (
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
          <h2>Before You Head Out</h2>

          <div className="grid grid--cols-3" style={{ marginTop: 12 }}>
            <div className="card">
              <h3 className="card__title">Have Your App Ready</h3>
              <p className="card__body">
                Install the app, sign in, and confirm your profile and vessel
                information before departing.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Check Season Rules</h3>
              <p className="card__body">
                Visit <Link to="/season-info">Season Information</Link> for
                current dates, bag and size limits, and whether trip
                authorization is required for your trip.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Plan to Report</h3>
              <p className="card__body">
                Make reporting part of your routine: log catches during the trip
                (or immediately after) and submit a post‑trip report to complete
                the record.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
