import "./styles/Timeline.css";

const EFP_PDF_URL =
  "https://www.fisheries.noaa.gov/s3/2026-08/gadnr_rs-efp-application_07102026.pdf";
const PR_REQUEST_URL = "https://coastalgadnr.org/News/EFP251113";
const PR_APPROVAL_URL = "https://coastalgadnr.org/News/260501RedSnapper";
const PR_INJUNCTION_URL =
  "https://www.fisheries.noaa.gov/bulletin/noaa-fisheries-update-effective-immediately-no-recreational-red-snapper-fishing";

export default function Timeline() {
  return (
    <main className="content-container">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="section section--bg-gradient">
        <div className="section-inner tl-hero">
          <h1>Project Timeline</h1>
          <p className="lead">
            A chronological record of the Georgia Red Snapper Project, from the
            initial EFP application through today.
          </p>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section className="section section--bg-page">
        <div className="section-inner">
          <ol className="tl-container" aria-label="Project timeline">
            {/* ── Event 3: Injunction ────────────────── */}
            <li className="tl-event">
              <div className="tl-dot tl-dot--alert" aria-hidden="true" />
              <span className="tl-date">May 21, 2026</span>
              <div className="tl-card tl-card--alert">
                <h3 className="tl-card__title">
                  Federal Court Grants Preliminary Injunction
                </h3>
                <p className="tl-card__body">
                  A Federal court judge granted a preliminary injunction that
                  stopped the implementation of the South Atlantic states
                  Exempted Fishing Permits. At this time, it is not known if
                  NOAA Fisheries will file an appeal. Because Georgia's
                  requested start date of October 9th is weeks away, Coastal
                  Resources Division will continue to work on ensuring the
                  agency is prepared should the injunction be lifted. Updates
                  will be posted as more information is made available.
                </p>
                <div className="tl-card__link">
                  <a
                    href={PR_INJUNCTION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--secondary"
                  >
                    View Press Release
                  </a>
                </div>
              </div>
            </li>

            {/* ── Event 2: EFP Approved ──────────────── */}
            <li className="tl-event">
              <div className="tl-dot tl-dot--milestone" aria-hidden="true" />
              <span className="tl-date">May 1, 2026</span>
              <div className="tl-card">
                <h3 className="tl-card__title">
                  EFP Approved — Georgia Red Snapper Project Launched
                </h3>
                <p className="tl-card__body">
                  The Georgia DNR Coastal Resources Division officially
                  announced the launch of the Georgia Red Snapper Project,
                  granting anglers their longest access to federal red snapper
                  in over 15 years.
                </p>
                <ul className="tl-card__highlights">
                  <li>
                    Georgia anglers will have a{" "}
                    <strong>two-month season (July–August 2026)</strong> to fish
                    for red snapper in federal waters — the longest access in
                    over 15 years.
                  </li>
                  <li>
                    Implemented through the federal EFP requested in November
                    2025, allowing Georgia to operate outside normal federal
                    regulations for 2026.
                  </li>
                  <li>
                    If high-quality data are collected through{" "}
                    <strong>mandatory VESL electronic reporting</strong>, the
                    EFP could be extended for two additional years (2027–2028).
                  </li>
                  <li>
                    Two other Southeast states — South
                    Carolina and Florida — submitted their own EFP applications
                    in a regional collaboration to improve real-time
                    recreational fishing data.
                  </li>
                </ul>
                <div className="tl-card__link">
                  <a
                    href={PR_APPROVAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--secondary"
                  >
                    View Press Release
                  </a>
                </div>
              </div>
            </li>

            {/* ── Event 1: EFP Submitted ─────────────── */}
            <li className="tl-event">
              <div className="tl-dot tl-dot--milestone" aria-hidden="true" />
              <span className="tl-date">November 10, 2025</span>
              <div className="tl-card">
                <h3 className="tl-card__title">EFP Request Submitted</h3>
                <p className="tl-card__body">
                  The Georgia Department of Natural Resources (DNR) Coastal
                  Resources Division (CRD) submitted a federal Exempted Fishing
                  Permit (EFP) request to the U.S. Secretary of Commerce. The
                  proposal would establish a two-month recreational Red Snapper
                  season in federal waters off Georgia's coast beginning in
                  2026.
                </p>
                <div className="tl-card__link">
                  <a
                    href={PR_REQUEST_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--secondary"
                  >
                    View Press Release
                  </a>
                  <a
                    href={EFP_PDF_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--secondary"
                  >
                    View the EFP Proposal (PDF)
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
