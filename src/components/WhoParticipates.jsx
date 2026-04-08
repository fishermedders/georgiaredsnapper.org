import "./WhoParticipates.css";

export default function WhoParticipates() {
  return (
    <section className="section who-needs">
      <h2>Who Needs to Participate?</h2>
      <div className="compare-grid">
        <div className="compare-box required">
          <header>REQUIRED</header>
          <ul>
            <li>Recreational Snapper Anglers</li>
            <li>Charter Captains</li>
            <li>Headboats</li>
          </ul>
        </div>
        <div className="compare-box not-required">
          <header>NOT REQUIRED</header>
          <ul>
            <li>Not Targeting Snapper</li>
            <li>State Waters Only</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
