import { Link } from "react-router-dom";
import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      q: "Is reporting required?",
      a: "Yes. Trip registration and post-trip reporting are required for all EFP season participants.",
    },
    {
      q: "What's the bag limit?",
      a: "1 Red Snapper per person per day, with no minimum size limit under the EFP.",
    },
    {
      q: "What about cell service?",
      a: "The reporting app supports offline logging and will sync automatically when you reconnect.",
    },
  ];

  return (
    <section
      className="section section--bg-white"
      aria-labelledby="faq-teaser-heading"
    >
      <div className="section-inner">
        <h2 id="faq-teaser-heading">Quick FAQs</h2>

        <p className="lead">
          Short answers to common questions. For detailed guidance, visit the
          full FAQs page.
        </p>

        <div className="faq-teaser-grid">
          {faqs.map((f, i) => (
            <div key={i} className="faq-teaser-card">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <div className="u-center" style={{ marginTop: "1.5rem" }}>
          <Link to="/faq" className="btn">
            Read All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
