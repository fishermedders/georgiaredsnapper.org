import { Link } from "react-router-dom";
import "./styles/HowItWorks.css";

export default function HowItWorksPage() {
  const workflowSteps = [
    {
      title: "Onboard with VESL",
      body: (
        <>
          VESL is the free reporting app that Georgia DNR uses to collect data
          on the season. It is accessible through apps on iPhone and Android, as
          well as through their website. Register by{" "}
          <a
            href="https://bfdl.ink/to/red-snapper?and=Georgia"
            target="_blank"
            rel="noopener noreferrer"
          >
            visiting the VESL website
          </a>
          . You&rsquo;ll create an account the first time you open it.
        </>
      ),
    },
    {
      title: "Create a Trip Report Before You Go",
      body: "Before heading out, register your trip in VESL. You can do this up to 5 days in advance. Enter basic trip details like the date, and departure location.",
    },
    {
      title: "Go Fishing: July 1 Through August 31",
      body: "The 2026 season runs from July 1 through August 31 in federal waters off Georgia. You may keep 1 red snapper per person per day with no minimum size limit.",
    },
    {
      title: "Report Your Catch Within 24 Hours",
      body: "After your trip, open VESL and report what you caught, including both harvested and released fish. You must submit your report within 24 hours of your trip departure time. Anglers will need to complete open trip reports, including for trips that are cancelled before opening a new trip.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>How to Participate</h2>
          <p className="lead">
            Reporting through VESL is mandatory for anglers fishing for red
            snapper under the EFP. Here's exactly what you need to do. It's
            straightforward and takes very little time.
          </p>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Step by Step</h2>

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
              <h3 className="card__title">Know the Rules</h3>
              <p className="card__body">
                1 fish per person per day, no minimum size, July 1 - Aug 31
                only. See <Link to="/season-info">Season Information</Link> for
                full details.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">Need Help?</h3>
              <p className="card__body">
                Email{" "}
                <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>{" "}
                or call toll-free <a href="tel:84476274357">844-SNAP-HELP</a>{" "}
                for technical support with VESL or reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
