import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Georgia Red Snapper</h1>
          <p>The ultimate companion for coastal fishing and season tracking.</p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-ios">
              <span>Download on</span>
              <strong>App Store</strong>
            </a>
            <a href="#" className="btn btn-android">
              <span>Get it on</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
