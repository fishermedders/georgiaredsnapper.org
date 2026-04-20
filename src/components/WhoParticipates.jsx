import "./WhoParticipates.css";

export default function WhoParticipates() {
  return (
    <section className="section section--bg-soft" aria-labelledby="who-heading">
      <div className="section-inner">
        <h2 id="who-heading">Who Needs to Participate?</h2>

        <p className="lead">
          Using the VESL app is mandatory — not optional. Every angler fishing
          for red snapper under the EFP must register their trip and report
          their catch. This is how we earn longer seasons in the future.
        </p>

        <div className="compare-grid">
          <div className="compare-box compare-box--required">
            <header>Must Use VESL</header>
            <ul>
              <li>
                Private recreational anglers targeting red snapper in federal
                waters during the season
              </li>
              <li>
                For-hire captains and charter guides operating under the EFP
              </li>
              <li>
                Any angler retaining red snapper between July 1 and August 31,
                2026
              </li>
            </ul>
          </div>

          <div className="compare-box compare-box--not-required">
            <header>Not Required</header>
            <ul>
              <li>Anglers not fishing for red snapper during the EFP season</li>
              <li>Fishing that occurs exclusively in state waters</li>
              <li>
                Commercial fishers not participating under the recreational EFP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
