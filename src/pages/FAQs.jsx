import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./styles/FAQs.css";
import useFAQs from "../hooks/useFAQs.js";

// ─── Icon components ──────────────────────────────────────────────────────────

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

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="faq-search-icon"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ─── Search / highlight helpers ───────────────────────────────────────────────

/** Strip HTML tags to get plain text for search matching. */
function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Escape special regex characters. */
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Split a search query into lowercase tokens (≥ 2 chars).
 * Single-char tokens are ignored to reduce noise.
 */
function getTerms(query) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

/**
 * Returns true when every search term appears as a substring in the
 * FAQ's question or (tag-stripped) answer text.
 */
function faqMatchesTerms(faq, terms) {
  if (!terms.length) return true;
  const haystack = faq.q.toLowerCase() + " " + stripHtml(faq.a).toLowerCase();
  return terms.every((t) => haystack.includes(t));
}

/**
 * Render plain text with any matched term wrapped in a <mark>.
 * Uses the capturing-group split trick: after splitting with a
 * capturing group regex, matched text lands at every odd index.
 */
function HighlightedText({ text, terms }) {
  if (!terms.length) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="faq-highlight">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

/**
 * Inject <mark class="faq-highlight"> into an HTML string, but only
 * inside text nodes — never inside attribute values or tag names.
 * Splits on HTML tags (preserving them), highlights only text segments.
 */
function highlightHtml(html, terms) {
  if (!terms.length) return html;
  const pattern = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  return html
    .split(/(<[^>]+>)/)
    .map((seg) =>
      seg.startsWith("<")
        ? seg
        : seg.replace(pattern, '<mark class="faq-highlight">$1</mark>'),
    )
    .join("");
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FAQs() {
  const { faqs, loading, error } = useFAQs();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [copiedFragment, setCopiedFragment] = useState(null);

  const toastTimerRef = useRef(null);
  const searchInputRef = useRef(null);

  // ── Derived values ────────────────────────────────────────────────────────

  /** Active search tokens (≥ 2 chars, lowercase). */
  const terms = useMemo(() => getTerms(searchQuery), [searchQuery]);

  /** All unique tags across all FAQs, sorted A–Z. */
  const allTags = useMemo(() => {
    const set = new Set();
    faqs.forEach((f) => (f.tags ?? []).forEach((t) => set.add(t)));
    return [...set].sort();
  }, [faqs]);

  /** FAQs that pass both the active tag filter and the search query. */
  const filteredFaqs = useMemo(
    () =>
      faqs.filter((f) => {
        const tagOk = !activeTag || (f.tags ?? []).includes(activeTag);
        const termOk = faqMatchesTerms(f, terms);
        return tagOk && termOk;
      }),
    [faqs, activeTag, terms],
  );

  const isFiltering = terms.length > 0 || activeTag !== null;

  // ── Effect: open all matching items when a search is active ───────────────
  // We manipulate the DOM directly so React's reconciliation of other state
  // (tag selection, etc.) doesn't fight with the browser's open/closed state.
  useEffect(() => {
    if (terms.length === 0) return;
    filteredFaqs.forEach((f) => {
      if (!f.fragment) return;
      const el = document.getElementById(f.fragment);
      if (el) el.open = true;
    });
  }, [terms, filteredFaqs]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handlePermalink = useCallback((e, fragment) => {
    e.preventDefault();
    e.stopPropagation(); // don't toggle the <details>

    const url = new URL(window.location.href);
    url.hash = fragment;
    window.history.pushState(null, "", url);

    const el = document.getElementById(fragment);
    if (el) el.open = true;

    navigator.clipboard
      .writeText(url.href)
      .then(() => {
        setCopiedFragment(fragment);
        clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => setCopiedFragment(null), 2200);
      })
      .catch(() => {});
  }, []);

  /** Clicking a tag pill on an FAQ item sets (or toggles off) that tag filter. */
  const handleTagClick = useCallback((e, tag) => {
    e.preventDefault();
    e.stopPropagation(); // don't toggle the <details>
    setActiveTag((prev) => (prev === tag ? null : tag));
  }, []);

  /** Reset both the search query and the active tag filter. */
  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setActiveTag(null);
    searchInputRef.current?.focus();
  }, []);

  // ── Cleanup ───────────────────────────────────────────────────────────────

  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  // ── Hash-based auto-expand + scroll ───────────────────────────────────────

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

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <main className="content-container">
      <section className="section section--bg-page">
        <div className="section-inner">
          <h2>Frequently Asked Questions</h2>

          <p className="lead">
            Everything you need to know about the 2026 red snapper season, VESL,
            and reporting requirements.
          </p>

          {/* ── Search & filter controls ───────────────────────────────── */}
          <div className="faq-controls">
            {/* Search input */}
            <div className="faq-search-wrapper">
              <SearchIcon />
              <input
                ref={searchInputRef}
                type="search"
                className="faq-search-input"
                placeholder="Search questions and answers…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
              />
            </div>

            {/* Tag filter pills — only rendered once tags are available */}
            {allTags.length > 0 && (
              <div
                className="faq-tag-filters"
                role="group"
                aria-label="Filter by topic"
              >
                <button
                  className={`faq-tag-filter${!activeTag ? " faq-tag-filter--active" : ""}`}
                  onClick={() => setActiveTag(null)}
                  aria-pressed={!activeTag}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`faq-tag-filter faq-tag-filter--${tag.toLowerCase()}${activeTag === tag ? " faq-tag-filter--active" : ""}`}
                    onClick={() =>
                      setActiveTag((prev) => (prev === tag ? null : tag))
                    }
                    aria-pressed={activeTag === tag}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            {/* Result count / no-results message */}
            {isFiltering && !loading && (
              <p
                className="faq-result-count"
                aria-live="polite"
                aria-atomic="true"
              >
                {filteredFaqs.length === 0 ? (
                  <>
                    No questions match.{" "}
                    <button className="faq-clear-link" onClick={clearFilters}>
                      Clear filters
                    </button>
                  </>
                ) : (
                  <>
                    Showing <strong>{filteredFaqs.length}</strong> of{" "}
                    <strong>{faqs.length}</strong> questions
                    {terms.length > 0 && (
                      <>
                        {" — "}
                        <button
                          className="faq-clear-link"
                          onClick={clearFilters}
                        >
                          Clear
                        </button>
                      </>
                    )}
                  </>
                )}
              </p>
            )}
          </div>

          {/* ── Loading / error / empty states ────────────────────────── */}
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

          {/* ── FAQ accordion grid ────────────────────────────────────── */}
          {filteredFaqs.length > 0 && (
            <div className="faq-grid">
              {filteredFaqs.map((f, i) => (
                <details
                  key={f.fragment ?? i}
                  id={f.fragment ?? undefined}
                  className="faq-item"
                >
                  {/*
                    When a search is active we prevent the summary click
                    from toggling the <details> closed — items should stay
                    open so highlighted answer text remains visible.
                    Tag-pill and permalink clicks already call stopPropagation
                    so they are unaffected by this handler.
                  */}
                  <summary
                    onClick={
                      terms.length > 0 ? (e) => e.preventDefault() : undefined
                    }
                  >
                    {/* The body wraps question + tags in a column so tags
                        appear on a tidy second line below the question. */}
                    <span className="faq-summary-body">
                      <span className="faq-question-text">
                        <HighlightedText text={f.q} terms={terms} />
                      </span>

                      {(f.tags ?? []).length > 0 && (
                        <span className="faq-tags">
                          {(f.tags ?? []).map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              className={`faq-tag faq-tag--${tag.toLowerCase()}${activeTag === tag ? " faq-tag--selected" : ""}`}
                              onClick={(e) => handleTagClick(e, tag)}
                              aria-pressed={activeTag === tag}
                              aria-label={`Filter by ${tag}`}
                            >
                              {tag}
                            </button>
                          ))}
                        </span>
                      )}
                    </span>

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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: highlightHtml(f.a, terms),
                      }}
                    />
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
