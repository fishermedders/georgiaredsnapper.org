import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./styles/FAQs.css";
import useFAQs from "../hooks/useFAQs.js";

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function FAQs() {
  const { faqs, loading, error } = useFAQs();
  const location = useLocation();

  // Which fragment currently shows the "Link copied!" toast (null = none)
  const [copiedFragment, setCopiedFragment] = useState(null);
  const toastTimerRef = useRef(null);

  const handlePermalink = useCallback((e, fragment) => {
    e.preventDefault();
    e.stopPropagation(); // don't let the click toggle the details element

    // Build the full permalink URL and push it to history
    const url = new URL(window.location.href);
    url.hash = fragment;
    window.history.pushState(null, "", url);

    // Open the FAQ item (no scroll -- user is copying, not navigating)
    const el = document.getElementById(fragment);
    if (el) el.open = true;

    // Copy to clipboard and show toast
    navigator.clipboard
      .writeText(url.href)
      .then(() => {
        setCopiedFragment(fragment);
        clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => setCopiedFragment(null), 2200);
      })
      .catch(() => {
        // Clipboard API unavailable (e.g. non-HTTPS) -- open/scroll still works
      });
  }, []);

  // Clean up the timer on unmount
  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  // Auto-expand + scroll to the FAQ matching the URL hash.
  // Runs on mount, on hash change, and after faqs load so a hash present
  // before the fetch completes is still honoured.
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (!hash || faqs.length === 0) return;
    const el = document.getElementById(hash);
    if (!el) return;
    el.open = true;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, faqs]);

  return (
    <main className="content-container">
      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Everything you need to know about the 2026 red snapper season, VESL,
            and reporting requirements.
          </p>

          {loading && (
            <p className="u-center u-muted" style={{ padding: "2rem 0" }}>
              Loading FAQs...
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
                <details
                  key={f.fragment ?? i}
                  id={f.fragment ?? undefined}
                  className="faq-item"
                >
                  <summary>
                    <span className="faq-question-text">{f.q}</span>
                    {f.fragment && (
                      <a
                        href={`#${f.fragment}`}
                        className="faq-permalink"
                        aria-label={`Copy link to: ${f.q}`}
                        onClick={(e) => handlePermalink(e, f.fragment)}
                      >
                        <LinkIcon />
                      </a>
                    )}
                  </summary>
                  <div className="faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: f.a }} />
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Toast rendered outside all overflow:hidden containers */}
      {copiedFragment && (
        <div className="faq-copied-toast" role="status" aria-live="polite">
          Link copied!
        </div>
      )}
    </main>
  );
}
