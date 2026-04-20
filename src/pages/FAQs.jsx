import { Link } from "react-router-dom";
import "./styles/FAQs.css";

export default function FAQs() {
  const faqs = [
    {
      q: "Where can I find the official season dates, bag limits, and size rules?",
      a: (
        <>
          Official season rules are on the{" "}
          <Link to="/season-info">Season Information</Link> page.
        </>
      ),
    },
    {
      q: "Is trip registration and reporting required?",
      a: (
        <>
          Yes — see the <Link to="/how-it-works">How It Works</Link> page for
          the step-by-step workflow.
        </>
      ),
    },
    {
      q: "What data do I need to report?",
      a: "Harvest and release counts, fishing effort (anglers/time), and approximate location or depth. Full details are on the How It Works page.",
    },
    {
      q: "What if I don't have cell service on the water?",
      a: (
        <>
          The app supports offline logging and syncs automatically when you
          reconnect. Obtain your trip authorization before departing — see{" "}
          <Link to="/season-info">Season Information</Link>.
        </>
      ),
    },
    {
      q: "How is my personal information handled?",
      a: (
        <>
          Personal data is protected and used only for management, compliance,
          or authorized research. Aggregated data supports stock assessments.
          Contact the team via the <Link to="/contact">Contact</Link> page with
          specific privacy questions.
        </>
      ),
    },
    {
      q: "What happens if I don't comply with reporting rules?",
      a: (
        <>
          Noncompliance can affect eligibility for future participation and may
          be referred to enforcement. See{" "}
          <Link to="/season-info">Season Information</Link> for details.
        </>
      ),
    },
    {
      q: "Is the program risky for the Red Snapper stock?",
      a: "The 2024 SEDAR 73 update indicates the stock is rebuilding and not overfished. Because retained fish would otherwise be discarded, the program presents low risk when paired with required reporting and monitoring.",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Concise answers to commonly asked questions. For full regulatory
            details and step-by-step instructions, use the links to navigate to
            dedicated pages.
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
