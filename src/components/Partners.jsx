import "./Partners.css";

const partners = [
  {
    name: "Georgia Department of Natural Resources",
    short: "GA DNR",
    src: "/logos/DNR_Logo.svg",
    href: "https://coastalgadnr.org",
  },
  {
    name: "Yamaha Rightwaters",
    short: "Yamaha Rightwaters",
    src: "/logos/yamaha.png",
    href: "https://www.yamahaboats.com/yamaha-rightwaters/",
  },
  {
    name: "NC Marine Fisheries",
    short: "NC Marine Fisheries",
    src: "/logos/nc-marine.png",
    href: "https://www.deq.nc.gov/about/divisions/marine-fisheries/managing-fisheries/red-snapper-exempted-fishing-permit-season-2026",
  },
  {
    name: "SC Department of Natural Resources",
    short: "SC DNR",
    src: "/logos/sc-dnr.png",
    href: "https://www.dnr.sc.gov/",
  },
  {
    name: "Florida Fish and Wildlife Conservation Commission",
    short: "FL FWC",
    src: "/logos/fl_fwc.png",
    href: "https://myfwc.com/fishing/saltwater/recreational/atlantic-red-snapper/",
  },
];

export default function Partners() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">Partners &amp; Funding</h3>
            <p className="footer-tagline">
              The Georgia Red Snapper Project is operated by the{" "}
              <strong>Georgia DNR Coastal Resources Division</strong> and
              supported by a grant from <strong>Yamaha Rightwaters</strong>.
            </p>
            <p className="footer-tagline">
              South Carolina, North Carolina, and Florida are collaborating
              through their own EFP applications.
            </p>
          </div>

          <div className="footer-logos" role="list" aria-label="Partner logos">
            {partners.map((p) => {
              const img = (
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="footer-logo-img"
                />
              );
              return (
                <div key={p.short} role="listitem" className="footer-logo">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={p.name}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            &copy; {new Date().getFullYear()} Georgia Department of Natural
            Resources. All rights reserved.
          </small>
          <small className="footer-photo-credit">
            Photography courtesy of{" "}
            <a
              href="https://returnemright.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Return 'Em Right
            </a>
          </small>
          <small className="footer-contact">
            <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>
            {" · toll-free "}
            <a href="tel:84476274357">844-SNAP-HELP</a> (8a.m. - 8p.m. EST)
          </small>
        </div>
      </div>
    </footer>
  );
}
