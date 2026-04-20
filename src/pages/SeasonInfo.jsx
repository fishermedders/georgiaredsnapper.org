import { Link } from "react-router-dom";
import "./styles/SeasonInfo.css";

export default function SeasonInfo() {
  const keyRules = [
    "All anglers must register trips and report catch/effort using the Georgia electronic reporting app.",
    "Obtain a trip authorization number prior to fishing for Red Snapper under the EFP.",
    "Submit a post-trip report including harvest, releases, effort, and approximate location.",
    "Carcass-donation stations operate along the coast for biological sampling.",
    "Anglers out of compliance may be denied future EFP participation.",
    "Requirements apply consistently to private anglers and for-hire operations.",
  ];

  const benefits = [
    "Longer, more predictable recreational season compared with recent years.",
    "Aligning with MRIP sampling waves improves precision of recreational estimates.",
    "Real-time electronic reporting provides higher-quality data than traditional surveys.",
    "Continued biological sampling supports science-based stock assessment.",
  ];

  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Season Information</h2>

          <p className="lead">
            Georgia DNR Coastal Resources Division has received authorization to
            operate a two-month recreational Red Snapper season in federal
            waters beginning in 2026 under an Exempted Fishing Permit (EFP).
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Season Summary</h3>
              <p className="card__body">
                <strong>Status:</strong> Authorized (EFP)
              </p>
              <p className="card__body">
                <strong>Season:</strong> Two-month period aligned with one MRIP
                wave pair in 2026 (May–June, July–August, or September–October)
              </p>
              <p className="card__body">
                <strong>Bag limit:</strong> 1 Red Snapper per person per day
              </p>
              <p className="card__body">
                <strong>Size limit:</strong> No minimum size limit
              </p>
              <div className="season-actions">
                <Link to="/how-it-works" className="btn">
                  How to Report
                </Link>
                <Link to="/faq" className="btn btn--secondary">
                  FAQs
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="card__title">
                Mandatory Reporting &amp; Authorizations
              </h3>
              <ul className="rules-list">
                {keyRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>Why This Approach</h2>
          <p className="lead">
            The EFP program is designed to extend recreational access while
            producing more precise and timely data for fisheries management.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Management Benefits</h3>
              <ul className="benefits-list">
                {benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="card__title">Biological Sampling</h3>
              <p className="card__body">
                CRD will continue operating carcass-donation freezers along the
                coast to collect age, size, and reproductive data from harvested
                fish. These samples complement electronic reporting and help
                refine stock assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Stock Status &amp; Next Steps</h2>

          <p className="lead">
            The 2024 SEDAR 73 update indicates South Atlantic Red Snapper are
            not overfished and the stock is rebuilding. Because retained fish
            under the EFP would otherwise be discarded, the program presents low
            risk when paired with required reporting.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Next Steps &amp; Renewals</h3>
              <p className="card__body">
                Georgia requested prompt approval from the U.S. Department of
                Commerce to begin development ahead of the 2026 season. The
                state anticipates applying for two additional years of EFP
                renewals covering 2027 and 2028.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Resources</h3>
              <p className="card__body">
                <a href="https://gadnr.org" target="_blank" rel="noreferrer">
                  Georgia DNR — Coastal Resources Division
                </a>
              </p>
              <p className="card__body">
                <a href="https://sedarweb.org" target="_blank" rel="noreferrer">
                  SEDAR 73 (2024) — South Atlantic Red Snapper Assessment
                </a>
              </p>
            </div>
          </div>

          <div className="u-center season-contact-cta">
            <Link to="/contact" className="btn">
              Contact Fisheries Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
