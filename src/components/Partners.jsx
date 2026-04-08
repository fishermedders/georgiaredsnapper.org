import "./Partners.css";

export default function Partners() {
  const partnerLogos = [
    { name: "GA DNR", src: "/logos/dnr.jpg" },
    { name: "NOAA Fisheries", src: "/logos/noaa.png" },
    { name: "Yamaha Rightwaters", src: "/logos/yamaha.jpg" },
    { name: "NC Marine Fisheries", src: "/logos/nc-marine.jpg" },
    { name: "SC DNR", src: "/logos/sc-dnr.jpg" },
  ];

  return (
    <footer className="partners-section">
      <div className="partners-container">
        <span className="partners-label">Partners:</span>
        <div className="logo-strip">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="partner-logo">
              <img src={logo.src} alt={`${logo.name} logo`} title={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
