import { Link } from "react-router-dom";
import "./styles/HowItWorks.css";

export default function HowItWorksPage() {
  const workflowSteps = [
    {
      title: "Get the Reporting App",
      body: "Install the Georgia reporting app (iOS or Android) or use the state web portal. The app is the primary tool for trip registration, in-trip logging, and post-trip reporting.",
    },
    {
      title: "Register Your Account & Vessel",
      body: "Create an account and register your vessel or operator profile. Keeping your profile current ensures accurate reporting.",
    },
    {
      title: "Check Season Requirements",
      body: "Visit the Season Information page to confirm trip authorization requirements and current regulatory details.",
    },
    {
      title: "Log the Trip",
      body: "At trip start, register the trip with basic details (date, number of anglers, reporting area). The app supports offline logging.",
    },
    {
      title: "Record Catches & Releases",
      body: "During the trip, add any retained or released fish. Enter species and counts; optional biological fields improve scientific value.",
    },
    {
      title: "Submit a Post-Trip Report",
      body: "After returning, submit harvest, releases, effort, and approximate location or depth fished. Timely reports are essential for data quality.",
    },
    {
      title: "Support Biological Sampling",
      body: "Where available, use carcass-donation stations to support age, size, and reproductive data collection.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>How the Reporting Workflow Works</h2>
          <p className="lead">
            This page explains the practical steps for registering trips and
            reporting catches. For season dates, bag limits, and regulatory
            details, see <Link to="/season-info">Season Information</Link>.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Overview</h3>
              <p className="card__body">
                The workflow has three phases: prepare (account and
                authorization), log (in-trip data), and report (post-trip
                submission). The platform works offline and is designed to
                minimize distraction on the water.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">Who Uses This?</h3>
              <p className="card__body">
                Recreational anglers, charter operators, and headboats
                participating in the reporting program. If unsure whether your
                trip is covered, check{" "}
                <Link to="/season-info">Season Information</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Step-by-Step Workflow</h2>

          <div className="workflow-steps">
            {workflowSteps.map((s, i) => (
              <article key={s.title} className="card workflow-step">
                <div className="workflow-step__number">{i + 1}</div>
                <div className="workflow-step__content">
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__body">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Before You Head Out</h2>
          <div className="grid grid--cols-3">
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
                current dates, bag/size limits, and authorization requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">Plan to Report</h3>
              <p className="card__body">
                Log catches during the trip and submit a post-trip report to
                complete the record.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
