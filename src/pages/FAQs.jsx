import "./styles/FAQs.css";
import useFAQs from "../hooks/useFAQs.js";

export default function FAQs() {
  const { faqs, loading, error } = useFAQs();

  return (
    <main className="content-container">
      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Everything you need to know about the 2026 red snapper season, the
            VESL app, and reporting requirements.
          </p>

          {loading && (
            <p className="u-center u-muted" style={{ padding: "2rem 0" }}>
              Loading FAQs…
            </p>
          )}

          {!loading && error && (
            <p
              className="u-center"
              style={{ padding: "2rem 0", color: "var(--color-danger)" }}
            >
              Unable to load FAQs. Please try refreshing the page.
            </p>
          )}

          {!loading && !error && faqs.length === 0 && (
            <p className="u-center u-muted" style={{ padding: "2rem 0" }}>
              No FAQs available right now. Check back soon.
            </p>
          )}

          {faqs.length > 0 && (
            <div className="faq-grid">
              {faqs.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: f.a }} />
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
