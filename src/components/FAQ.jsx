import { Link } from "react-router-dom";
import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      q: "When is the season?",
      a: "July 1 through August 31, 2026. 62 days in federal waters off Georgia.",
    },
    {
      q: "What's the bag and size limit?",
      a: "1 red snapper per person per day. There is no minimum size limit.",
    },
    {
      q: "Do I really have to use the app?",
      a: "Yes. Registering your trip and reporting your catch through VESL is mandatory. It takes less than a minute.",
    },
  ];

  return (
    <section
      className="section section--bg-white"
      aria-labelledby="faq-teaser-heading"
    >
      <div className="section-inner">
        <h2 id="faq-teaser-heading">Common Questions</h2>

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
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
