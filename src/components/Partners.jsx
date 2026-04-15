import React from "react";
import "./Partners.css";

/**
 * Partners.jsx
 *
 * Footer component that displays partner logos and a short professional
 * tagline. The logos are rendered responsively and the layout is accessible.
 *
 * Note: logo image files are expected to be in the project's `public/logos`
 * folder (or otherwise served from the paths below).
 */

export default function Partners() {
  const partners = [
    {
      name: "Georgia Department of Natural Resources",
      short: "GA DNR",
      src: "/logos/DNR_Logo.svg",
      href: "https://gadnr.org",
      alt: "Georgia Department of Natural Resources logo",
    },
    {
      name: "Yamaha Rightwaters",
      short: "Yamaha Rightwaters",
      src: "/logos/yamaha.webp",
      href: null,
      alt: "Yamaha Rightwaters logo",
    },
    {
      name: "NC Marine Fisheries",
      short: "NC Marine Fisheries",
      src: "/logos/nc-marine.jpg",
      href: null,
      alt: "North Carolina Marine Fisheries logo",
    },
    {
      name: "SC Department of Natural Resources",
      short: "SC DNR",
      src: "/logos/sc-dnr.jpg",
      href: null,
      alt: "South Carolina Department of Natural Resources logo",
    },
  ];

  // Build a readable partners list for the tagline: "A, B, and C"
  const partnerNamesForTagline = partners.map((p) => p.short);
  let partnersTagText = "";
  if (partnerNamesForTagline.length === 1) {
    partnersTagText = partnerNamesForTagline[0];
  } else if (partnerNamesForTagline.length === 2) {
    partnersTagText = `${partnerNamesForTagline[0]} and ${partnerNamesForTagline[1]}`;
  } else {
    partnersTagText =
      partnerNamesForTagline.slice(0, -1).join(", ") +
      `, and ${partnerNamesForTagline[partnerNamesForTagline.length - 1]}`;
  }

  return (
    <footer className="partners-section" aria-labelledby="partners-heading">
      <div className="partners-inner">
        <div className="partners-top">
          <div className="partners-brand">
            <h3 id="partners-heading" className="partners-title">
              Partners
            </h3>

            <p className="partners-tagline">
              <strong>GeorgiaRedSnapper.org</strong> is a website of the Georgia
              Department of Natural Resources. Made in collaboration with{" "}
              <span
                className="partners-list"
                style={{ color: "var(--primary-blue, #244e86)" }}
              >
                {partnersTagText}.
              </span>
            </p>
          </div>
        </div>

        <div
          className="logo-strip"
          role="list"
          aria-label="Project partner logos"
        >
          {partners.map((p) => (
            <div key={p.short} role="listitem" className="partner-logo">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.name}
                >
                  <img
                    src={p.src}
                    alt={p.alt || p.name}
                    loading="lazy"
                    className="partner-logo-img"
                    data-default-src={p.src}
                    onError={(e) => {
                      // prevent infinite loop if fallback also fails
                      if (!e.currentTarget.dataset.failed) {
                        e.currentTarget.dataset.failed = "true";
                        // Prefer the raster DNR logo as a known fallback for the GA DNR SVG
                        if (p.short === "GA DNR") {
                          e.currentTarget.src = "/logos/dnr.jpg";
                        } else {
                          // fallback to the original src (or you can point to a generic placeholder)
                          e.currentTarget.src =
                            e.currentTarget.dataset.defaultSrc;
                        }
                      }
                    }}
                  />
                </a>
              ) : (
                <img
                  src={p.src}
                  alt={p.alt || p.name}
                  loading="lazy"
                  className="partner-logo-img"
                  data-default-src={p.src}
                  onError={(e) => {
                    if (!e.currentTarget.dataset.failed) {
                      e.currentTarget.dataset.failed = "true";
                      if (p.short === "GA DNR") {
                        e.currentTarget.src = "/logos/dnr.jpg";
                      } else {
                        e.currentTarget.src =
                          e.currentTarget.dataset.defaultSrc;
                      }
                    }
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="partners-bottom" aria-hidden="true">
          <small className="partners-note">
            © {new Date().getFullYear()} Georgia Department of Natural Resources
          </small>
        </div>
      </div>
    </footer>
  );
}
