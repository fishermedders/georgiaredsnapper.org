import React from "react";
import "./Hero.css";

/**
 * Hero.jsx
 *
 * - Sets the section's inline background to the raw image only (no gradient).
 * - Visual treatment (blurred background layer + dark overlay) is implemented in CSS
 *   using pseudo-elements on the `.hero` selector (e.g. `.hero::before` / `.hero::after`).
 * - Keeps content constrained via `.section-inner` while the section background remains full-bleed.
 *
 * Notes:
 * - Ensure `Hero.css` contains the pseudo-element rules for `.hero::before` (blur layer)
 *   and `.hero::after` (dark overlay). This file intentionally does not apply gradients
 *   inline so the CSS can manage layering, blur, and overlay independently.
 */

const HERO_IMAGE =
  "https://images.captainexperiences.com/blog_images/878/C58h0OR093yXptXOAnMHN9pPDitTKBpKea7KuuJE.jpg";

export default function Hero() {
  return (
    <section
      className="hero section section--bg-image section--edge-to-edge"
      aria-label="Georgia Red Snapper hero"
      // Inline background intentionally contains only the image URL.
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
            <h1 id="hero-heading">Georgia Red Snapper</h1>
            <p className="lead">
              The VESL-powered companion for anglers: log trips, report catches,
              and help improve recreational fisheries management in Georgia.
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
              <li>Quick trip logging — on or offline</li>
              <li>Secure, privacy-first reporting</li>
              <li>Helps manage seasons & protect the resource</li>
            </ul>
          </div>

          <aside className="hero-media" aria-hidden="true">
            <div className="phone-mockup">
              <img src="/mockup.png" alt="VESL app preview on phone" />
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
