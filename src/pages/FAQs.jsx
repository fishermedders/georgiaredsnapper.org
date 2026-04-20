import { Link } from "react-router-dom";
import "./styles/FAQs.css";

export default function FAQs() {
  const faqs = [
    {
      q: "When is the 2026 red snapper season?",
      a: "July 1 through August 31, 2026 — a 62-day season in federal waters off Georgia.",
    },
    {
      q: "What are the bag and size limits?",
      a: "1 red snapper per person per day. There is no minimum size limit.",
    },
    {
      q: "What is VESL and do I have to use it?",
      a: (
        <>
          VESL is a free app (available on iPhone, Android, and desktop) that
          you use to register trips and report your catch. Yes, using it is
          mandatory for everyone fishing for red snapper under the EFP.
        </>
      ),
    },
    {
      q: "When do I register my trip?",
      a: "Before you leave the dock. You can create a trip ticket in VESL up to 5 days in advance.",
    },
    {
      q: "When do I report my catch?",
      a: "Within 24 hours of your trip departure time. You must report both harvested and released red snapper. It takes less than a minute.",
    },
    {
      q: "What if I don't have cell service on the water?",
      a: (
        <>
          Register your trip before you leave (while you have service). VESL
          supports offline use for logging catches — data will sync when you
          reconnect. Make sure to register before departure since that requires
          a connection.
        </>
      ),
    },
    {
      q: "What happens if I don't report?",
      a: (
        <>
          Noncompliance can result in being denied future participation in the
          EFP program. Reporting is how we prove this model works — if the data
          is good, the EFP could be extended through 2027 and 2028.
        </>
      ),
    },
    {
      q: "Why has the season been so short in the past?",
      a: "Federal red snapper seasons in the South Atlantic have been limited to 1–2 days per year (sometimes zero) for the last 15 years, primarily due to uncertainty in the data used to manage the fishery. Better data from VESL can change that.",
    },
    {
      q: "Is this just Georgia?",
      a: (
        <>
          Georgia is one of four South Atlantic states participating. South
          Carolina, North Carolina, and Florida each submitted their own EFP
          applications. The states are collaborating to test better
          data-collection approaches.
        </>
      ),
    },
    {
      q: "Is this risky for the red snapper population?",
      a: "The 2024 SEDAR 73 stock assessment update shows South Atlantic red snapper are not overfished and the stock is rebuilding ahead of schedule. Because the fish retained under the EFP would otherwise be discarded, the program presents low risk when paired with mandatory reporting and monitoring.",
    },
    {
      q: "Where do I get help with the VESL app?",
      a: (
        <>
          Email <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>{" "}
          or call <a href="tel:9125555555">912-555-5555</a>. How-to videos are
          also available at GeorgiaRedSnapper.com.
        </>
      ),
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Everything you need to know about the 2026 red snapper season, the
            VESL app, and reporting requirements.
          </p>

          <div className="faq-grid">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
