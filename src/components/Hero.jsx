import { useLocation } from "react-router-dom";
import "./Hero.css";

const HERO_IMAGE = "/hero.png";

export default function Hero() {
  const { key } = useLocation();

  return (
    <section
      key={key}
      className="hero"
      aria-label="Hero"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <span
          className="kicker hero-fade-in"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            animationDelay: "0.1s",
          }}
        >
          July 1 - August 31, 2026
        </span>
        <h1
          className="hero-title hero-fade-in"
          style={{ animationDelay: "0.25s" }}
        >
          Georgia's First 62-Day Red Snapper Season
        </h1>
        <p
          className="hero-lead hero-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          After 15 years of one- and two-day seasons, Georgia anglers now have
          two full months to harvest red snapper in federal waters. Anglers must
          register their trips and report their catch with the free VESL app.
        </p>

        <div
          className="hero-ctas hero-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="https://apps.apple.com/us/app/vesl/id1540687104"
            className="store-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download VESL on the App Store"
          >
            <img src="/apple.png" alt="" />
            <span>App Store</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bluefindata.vesl&hl=en_US"
            className="store-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get VESL on Google Play"
          >
            <img src="/android.png" alt="" />
            <span>Google Play</span>
          </a>
        </div>

        <ul
          className="hero-features hero-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <li>1 fish per person per day · No minimum size</li>
          <li>
            Free VESL app: register once then report each trip in under a minute
          </li>
          <li>Your data helps build longer future seasons</li>
        </ul>
      </div>
    </section>
  );
}
