import "./Partners.css";

const partners = [
  {
    name: "Georgia Department of Natural Resources",
    short: "GA DNR",
    src: "/logos/DNR_Logo.svg",
    href: "https://gadnr.org",
  },
  {
    name: "Yamaha Rightwaters",
    short: "Yamaha Rightwaters",
    src: "/logos/yamaha.webp",
    href: null,
  },
  {
    name: "NC Marine Fisheries",
    short: "NC Marine Fisheries",
    src: "/logos/nc-marine.png",
    href: null,
  },
  {
    name: "SC Department of Natural Resources",
    short: "SC DNR",
    src: "/logos/sc-dnr.png",
    href: null,
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
              supported by a $300,000 grant from{" "}
              <strong>Yamaha Rightwaters</strong>. South Carolina, North
              Carolina, and Florida are collaborating through their own EFP
              applications.
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
          <small className="footer-contact">
            <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>
            {" · "}
            <a href="tel:9125555555">912-555-5555</a>
          </small>
        </div>
      </div>
    </footer>
  );
}
