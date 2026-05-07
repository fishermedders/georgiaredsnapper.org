import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>About the Georgia Red Snapper Project</h2>

          <p className="lead">
            The Georgia Red Snapper Project is a new initiative from the Georgia
            DNR Coastal Resources Division that gives recreational anglers a
            62-day red snapper season in federal waters, the longest in over 15
            years.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Why This Matters</h3>
              <p className="card__body">
                For the last 15 years, federal red snapper seasons in the South
                Atlantic have been limited to just one or two days per year
                (sometimes zero) because of uncertainty in the data used to
                manage the fishery. This project changes that by pairing an
                expanded season with real-time electronic reporting through
                VESL, producing far better data than traditional survey methods.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">How It Works</h3>
              <p className="card__body">
                Georgia requested the EFP (Exempted Fishing Permit) from the
                U.S. Secretary of Commerce in November 2025. The permit allows
                Georgia to operate a two-month season (July 1 - August 31, 2026)
                with mandatory electronic reporting. If the state demonstrates
                it can collect high-quality data, the EFP could be extended for
                two additional years (2027 and 2028).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>A Regional Effort</h2>

          <p className="lead">
            Georgia isn't alone. South Carolina, North Carolina, and Florida
            each submitted their own EFP applications. Together, the four states
            are collaborating to test new approaches for collecting more
            accurate, real-time recreational fishing data on red snapper.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">
                Funded by{" "}
                <a
                  href="https://www.yamahaboats.com/yamaha-rightwaters/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yamaha Rightwaters
                </a>
              </h3>
              <p className="card__body">
                The initiative is supported by a $300,000 grant from Yamaha
                Rightwaters, a conservation program from Yamaha Motors focused
                on sustaining marine resources and recreational fishing
                opportunities.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">
                <a
                  href="https://coastalgadnr.org/MarineCarcass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biological Sampling
                </a>
              </h3>
              <p className="card__body">
                In addition to electronic reporting, CRD continues to operate
                carcass-donation freezers along the Georgia coast to collect
                age, size, and reproductive data from harvested fish. These
                samples complement VESL data and help refine stock assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Explore the Project</h2>

          <div className="grid grid--cols-3">
            <div className="card">
              <h4 className="card__title">How It Works</h4>
              <p className="card__body">
                Step-by-step instructions for downloading VESL, registering
                trips, and reporting your catch.
              </p>
              <p>
                <Link to="/how-it-works" className="btn">
                  View Instructions
                </Link>
              </p>
            </div>

            <div className="card">
              <h4 className="card__title">Season Information</h4>
              <p className="card__body">
                Official dates, bag and size limits, reporting deadlines, and
                everything you need to know before you fish.
              </p>
              <p>
                <Link to="/season-info" className="btn btn--secondary">
                  Season Details
                </Link>
              </p>
            </div>

            <div className="card">
              <h4 className="card__title">FAQs</h4>
              <p className="card__body">
                Answers to common questions about the season, the VESL app,
                reporting requirements, and more.
              </p>
              <p>
                <Link to="/faq" className="btn btn--secondary">
                  Read FAQs
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
