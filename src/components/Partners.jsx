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
  const names = partners.map((p) => p.short);
  const tagline =
    names.length <= 2
      ? names.join(" and ")
      : names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">Partners</h3>
            <p className="footer-tagline">
              <strong>GeorgiaRedSnapper.org</strong> is a project of the Georgia
              Department of Natural Resources, made in collaboration with{" "}
              <span className="footer-partners-text">{tagline}.</span>
            </p>
          </div>

          <div className="footer-logos" role="list" aria-label="Partner logos">
            {partners.map((p) => {
              const img = (
                <img
                  key={p.short}
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
        </div>
      </div>
    </footer>
  );
}
