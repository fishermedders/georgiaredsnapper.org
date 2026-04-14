import React from "react";
import "./Partners.css";

/**
 * Partners.jsx
 *
 * Displays partner logos and a short summary of the multi-state partnership
 * and the role of Yamaha Rightwaters in funding the electronic reporting platform.
 *
 * Notes:
 * - The component emphasizes the multi-state collaboration (GA, SC, NC, FL)
 *   and that the EFP will establish a two-month recreational red snapper
 *   season beginning in 2026 with mandatory trip registration and
 *   electronic reporting supported by Yamaha Rightwaters.
 */

export default function Partners() {
  const partnerLogos = [
    {
      name: "GA DNR",
      src: "/logos/dnr.jpg",
      alt: "Georgia Department of Natural Resources logo",
    },
    {
      name: "Yamaha Rightwaters",
      src: "/logos/yamaha.jpg",
      alt: "Yamaha Rightwaters logo",
    },
    {
      name: "NC Marine Fisheries",
      src: "/logos/nc-marine.jpg",
      alt: "North Carolina Marine Fisheries logo",
    },
    {
      name: "SC DNR",
      src: "/logos/sc-dnr.jpg",
      alt: "South Carolina Department of Natural Resources logo",
    },
    {
      name: "FL FWC",
      src: "/logos/fl-fwc.jpg",
      alt: "Florida Fish and Wildlife Conservation Commission logo",
    },
  ];

  return (
    <footer className="partners-section" aria-labelledby="partners-heading">
      <div className="partners-container section-inner">
        <h2 id="partners-heading" className="partners-heading">
          Project Partners & Regional Collaboration
        </h2>

        <p className="partners-summary">
          The Georgia Department of Natural Resources is working with South
          Atlantic state partners to implement a coordinated Exempted Fishing
          Permit (EFP) program that establishes a two-month recreational Red
          Snapper season beginning in 2026. The partners listed below support
          regional coordination and the development of the state's electronic
          reporting platform.
        </p>

        <div
          className="logo-strip"
          role="list"
          aria-label="Partner organizations"
        >
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="partner-logo" role="listitem">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.name}
                className="partner-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="partners-note" style={{ marginTop: 12 }}>
          <strong>About the reporting platform:</strong> Partner organizations
          collaborate on developing the state-managed electronic reporting
          platform that collects harvest, discard, effort, and location data to
          support precise fisheries management. Visit partner sites for details
          about their individual roles.
        </div>
      </div>
    </footer>
  );
}
