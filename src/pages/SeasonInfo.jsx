import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import "./styles/SeasonInfo.css";

export default function SeasonInfo() {
  const currentSeason = {
    status: "Authorized (EFP)",
    description:
      "A two-month recreational Red Snapper season in federal waters off Georgia’s coast will be implemented beginning in 2026 and aligned with NOAA MRIP two-month sampling waves.",
    dates:
      "Will occur in one MRIP wave pair in 2026 (May–June, July–August, or September–October).",
    bagLimit: "1 Red Snapper per person per day",
    sizeLimit: "No minimum size limit",
  };

  const keyRules = [
    "All participating anglers (private and for-hire) must register trips and report catch and effort using the new Georgia state electronic reporting smartphone application.",
    "Anglers must obtain a trip authorization number prior to fishing for Red Snapper under the EFP.",
    "A required post-trip report must be submitted after each trip, including harvest, releases, fishing effort, and approximate location or depth fished.",
    "Carcass-donation stations will continue to operate along the coast to collect biological samples (age, size, reproductive information).",
    "Anglers found out of compliance with reporting or authorization requirements may be denied future participation in the EFP.",
    "Requirements and reporting procedures apply consistently to private anglers and for-hire operations.",
  ];

  const whyThisMatters = [
    "Creates a longer, more predictable recreational season for Georgia anglers compared with recent years.",
    "Aligning the season with MRIP sampling waves improves the precision of recreational estimates.",
    "Real-time electronic reporting will provide higher-quality data than traditional survey methods.",
    "Continued biological sampling supports science-based management and stock assessment.",
  ];

  const resources = [
    {
      title: "Georgia DNR - Coastal Resources Division",
      href: "https://gadnr.org",
    },
    {
      title: "SEDAR 73 (2024) — South Atlantic Red Snapper assessment",
      href: "https://sedarweb.org",
    },
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Season Information — EFP-Authorized Red Snapper Season</h2>

          <p className="lead">
            The Georgia Department of Natural Resources (DNR) Coastal Resources
            Division has received authorization to operate a two-month
            recreational Red Snapper season in federal waters off Georgia's
            coast beginning in 2026 under an Exempted Fishing Permit (EFP).
            Below you'll find the season basics, mandatory reporting
            requirements, and how the program will support improved fisheries
            management.
          </p>

          <div className="grid grid--cols-2" style={{ gap: 18, marginTop: 18 }}>
            <div className="card">
              <h3 className="card__title">Season Summary</h3>
              <div style={{ marginTop: 8 }}>
                <p style={{ margin: 0 }}>
                  <strong>Status:</strong> {currentSeason.status}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>What:</strong> {currentSeason.description}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>When:</strong> {currentSeason.dates}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Bag limit:</strong> {currentSeason.bagLimit}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Size limit:</strong> {currentSeason.sizeLimit}
                </p>
              </div>

              <div style={{ marginTop: 12 }}>
                <Link
                  to="/faqs"
                  className="btn btn--secondary"
                  style={{ marginRight: 8 }}
                >
                  FAQs
                </Link>
                <Link to="/how-it-works" className="btn">
                  How to Report
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="card__title">
                Mandatory Reporting & Authorizations
              </h3>
              <ul style={{ marginTop: 8 }}>
                {keyRules.map((r) => (
                  <li key={r} style={{ marginBottom: 8 }}>
                    {r}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 8 }}>
                The state-managed electronic reporting platform will be
                available as a smartphone application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>Why This Approach</h2>
          <p className="lead">
            The EFP-authorized program is designed to extend recreational access
            while producing more precise and timely data to support fisheries
            management decisions.
          </p>

          <div className="grid grid--cols-2" style={{ marginTop: 12 }}>
            <div className="card">
              <h3 className="card__title">Management Benefits</h3>
              <ul style={{ marginTop: 8 }}>
                {whyThisMatters.map((b) => (
                  <li key={b} style={{ marginBottom: 8 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="card__title">Biological Sampling</h3>
              <p className="card__body">
                CRD will continue operating carcass-donation freezers along the
                coast to collect age, size, and reproductive information from
                harvested fish. These samples complement electronic reporting
                and help refine stock assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Stock Status & Risk</h2>

          <p className="lead">
            The 2024 SEDAR 73 update indicates South Atlantic Red Snapper are
            not overfished and that overfishing may no longer be occurring.
            Because retained fish under the EFP would otherwise be discarded,
            and overall recreational effort is not expected to increase, the
            authorized EFP presents a low risk to the stock when paired with the
            required reporting and monitoring.
          </p>

          <div style={{ marginTop: 12 }}>
            <h3 className="card__title">Next Steps & Renewals</h3>
            <p className="card__body">
              Georgia requested prompt approval from the U.S. Department of
              Commerce to allow program development ahead of the 2026 season.
              The state anticipates applying for two additional years of EFP
              renewals covering 2027 and 2028 to continue testing and refining
              the program.
            </p>
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <p className="u-muted" style={{ marginBottom: 12 }}>
              Need personalized assistance?
            </p>
            <Link to="/contact" className="btn">
              Contact Fisheries Team
            </Link>
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 className="card__title">Resources</h3>
            <div className="grid grid--cols-3" style={{ marginTop: 12 }}>
              {resources.map((r) => (
                <div key={r.title} className="card">
                  <h4 style={{ marginTop: 0 }}>{r.title}</h4>
                  <p className="card__body">
                    <a href={r.href} target="_blank" rel="noreferrer">
                      Visit resource
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
