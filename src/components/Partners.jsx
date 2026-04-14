import React from "react";
import "./Partners.css";

export default function Partners() {
  const partnerLogos = [
    {
      name: "GA DNR",
      src: "/logos/dnr.jpg",
      alt: "Georgia Department of Natural Resources",
    },
    {
      name: "NC Marine Fisheries",
      src: "/logos/nc-marine.jpg",
      alt: "North Carolina Marine Fisheries",
    },
    {
      name: "SC DNR",
      src: "/logos/sc-dnr.jpg",
      alt: "South Carolina Department of Natural Resources",
    },
    {
      name: "Yamaha Rightwaters",
      src: "/logos/yamaha.jpg",
      alt: "Yamaha Rightwaters",
    },
  ];

  return (
    <footer className="partners-section" aria-labelledby="partners-heading">
      <div className="partners-container">
        <div
          className="logo-strip"
          role="list"
          aria-label="Project partner logos"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginTop: 12,
          }}
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              role="listitem"
              className="partner-logo"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.name}
                loading="lazy"
                style={{
                  height: 48,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
