import "./Hero.css";

const HERO_IMAGE = "/hero.webp";

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="Hero"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <span
          className="kicker"
          style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
        >
          Coastal Fishing · Season Tracking
        </span>
        <h1 className="hero-title">Georgia Red Snapper Program</h1>
        <p className="hero-lead">
          The official Georgia reporting app — register trips, report catches,
          and help build longer, more predictable fishing seasons.
        </p>

        <div className="hero-ctas">
          <a
            href="#download"
            className="store-btn"
            aria-label="Download on the App Store"
          >
            <img src="/apple.png" alt="" />
            <span>App Store</span>
          </a>
          <a
            href="#download"
            className="store-btn"
            aria-label="Get it on Google Play"
          >
            <img src="/android.png" alt="" />
            <span>Google Play</span>
          </a>
        </div>

        <ul className="hero-features">
          <li>Quick trip registration — on or offline</li>
          <li>Mandatory trip and catch reporting for EFP seasons</li>
          <li>Better data for longer, more predictable seasons</li>
        </ul>
      </div>
    </section>
  );
}
