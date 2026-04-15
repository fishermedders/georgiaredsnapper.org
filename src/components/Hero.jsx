import React from "react";
import "./Hero.css";

/**
 * Hero.jsx
 *
 * Updated to remove VESL-specific branding and reference the official
 * Georgia state reporting application. Visual treatment (blurred
 * background + dark overlay) is implemented in CSS using pseudo-elements
 * on `.hero` (e.g. `.hero::before` / `.hero::after`).
 *
 * Keep the section layout and accessibility landmarks consistent with the
 * rest of the site.
 */

const HERO_IMAGE =
  "https://images.captainexperiences.com/blog_images/878/C58h0OR093yXptXOAnMHN9pPDitTKBpKea7KuuJE.jpg";

export default function Hero() {
  return (
    <section
      className="hero section section--bg-image section--edge-to-edge"
      aria-label="Georgia Red Snapper hero"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <div
        className="section-inner hero-inner"
        role="region"
        aria-labelledby="hero-heading"
      >
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker">Coastal Fishing · Season Tracking</span>
            <h1 id="hero-heading">Georgia Red Snapper Project</h1>
            <p className="lead">
              The official Georgia reporting app: register trips, report
              catches, and help improve recreational fisheries management across
              state and federal waters.
            </p>

            <div className="hero-ctas">
              <a
                href="#download"
                className="store-btn"
                aria-label="Download on the App Store"
              >
                <img src="/apple.png" alt="App Store" />
                <span className="label">Download on the App Store</span>
              </a>

              <a
                href="#download"
                className="store-btn"
                aria-label="Get it on Google Play"
              >
                <img src="/android.png" alt="Google Play" />
                <span className="label">Get it on Google Play</span>
              </a>
            </div>

            <ul className="hero-features" aria-hidden="false">
              <li>Quick trip registration — on or offline</li>
              <li>
                Mandatory trip and catch reporting for participating seasons
              </li>
              <li>
                Improves data for longer, more predictable fishing seasons
              </li>
            </ul>
          </div>

          <aside className="hero-media" aria-hidden="true">
            <div className="phone-mockup">
              <img src="/GRSP_Logo.svg" alt="Georgia Red Snapper logo" />
            </div>
          </aside>
        </div>

        <a
          className="hero-scroll"
          href="#how-it-works"
          aria-label="Scroll to How It Works"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 16.5l-6-6 1.4-1.4L12 13.7l4.6-4.6L18 10.5z"
              fill="#ffffff"
              opacity="0.95"
            />
          </svg>
          <span className="visually-hidden">Scroll down</span>
        </a>
      </div>
    </section>
  );
}
