import "./WhoParticipates.css";

export default function WhoParticipates() {
  return (
    <section className="section section--bg-soft" aria-labelledby="who-heading">
      <div className="section-inner">
        <h2 id="who-heading">Who Must Participate?</h2>

        <p className="lead">
          Participation in the state's electronic reporting program is mandatory
          for all anglers fishing under the EFP in federal waters off Georgia's
          coast.
        </p>

        <div className="compare-grid">
          <div className="compare-box compare-box--required">
            <header>Required</header>
            <ul>
              <li>
                Private recreational anglers fishing for Red Snapper during the
                EFP season
              </li>
              <li>For-hire captains and guides operating under the EFP</li>
              <li>
                Any participant retaining Red Snapper during the two-month
                season
              </li>
            </ul>
          </div>

          <div className="compare-box compare-box--not-required">
            <header>Not Required</header>
            <ul>
              <li>Anglers not fishing for Red Snapper during the EFP season</li>
              <li>
                Fishing exclusively in state waters not covered by the EFP
              </li>
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
