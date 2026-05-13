import { useLocation } from "react-router-dom";
import { VESL_URL } from "../utils/constants.js";
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
          After 15 years of one and two-day seasons, Georgia anglers now have
          two full months to harvest red snapper in federal waters. Anglers must
          use Bluefin Data's VESL reporting platform to record their trips and
          report their catch.
        </p>

        <div
          className="hero-ctas hero-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href={VESL_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Waitlist Now
          </a>
        </div>

        <ul
          className="hero-features hero-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <li>1 fish per person per day · No minimum size</li>
          <li>
            Free VESL app and website: register once, then report each trip
          </li>
          <li>Your data helps build longer future seasons</li>
        </ul>
      </div>
    </section>
  );
}
