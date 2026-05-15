import { useState } from "react";
import { VESL_URL } from "../utils/constants.js";
import "./WhoParticipates.css";

const RESULTS = {
  private: {
    color: "blue",
    heading: "You will need a few things.",
    items: [
      "A valid <a href='https://georgiawildlife.com/licenses-permits-passes' target='_blank' rel='noopener noreferrer'>Georgia recreational fishing license</a> and <a href='https://coastalgadnr.org/SIP'>Saltwater Information Program</a> (SIP) Permit",
      "A VESL trip registration, created before you leave the dock",
      "A completed VESL catch report, submitted within 24 hours of departure",
    ],
    notes: [],
  },
  charterCaptain: {
    color: "blue",
    heading:
      "As the captain, you are responsible for reporting, and will need:",
    items: [
      "Your <a href='https://coastalgadnr.org/sites/default/files/crd/pdf/marfish/2026GuideLic.pdf'>Georgia Saltwater Fishing Guide license</a>",
      "Your <a href='https://www.fisheries.noaa.gov/southeast/resources-fishing/southeast-permits-information' target='_blank' rel='noopener noreferrer'>NOAA Federal South Atlantic Snapper-Grouper Charter/Headboat permit</a>",
      "Continue mandatory reporting through the <a href='https://www.fisheries.noaa.gov/southeast/recreational-fishing-data/southeast-hire-integrated-electronic-reporting-program' target='_blank' rel='noopener noreferrer'>Southeast For-Hire Integrated Electronic Reporting</a> (SEFHIER) Program as currently required by for-hire operators with South Atlantic federal fishing permits.",
    ],
    notes: [],
  },
  charterPassenger: {
    color: "green",
    heading:
      "If your captain has the optional Georgia For-Hire Customer License, you don't need to do anything individually.",
    items: [
      "No personal fishing license required for red snapper",
      "No VESL account or registration required",
      "No catch reporting required on your end",
    ],
    notes: [
      "Your captain's licenses cover your party. Just fish and enjoy the trip.",
      "NOTE: If your captain does not have the customer license, you will need a valid <a href='https://georgiawildlife.com/licenses-permits-passes' target='_blank' rel='noopener noreferrer'>Georgia recreational fishing license</a> and <a href='https://coastalgadnr.org/SIP'>Saltwater Information Program</a> (SIP) Permit.",
    ],
  },
};

function LicenseQuiz() {
  const [tripType, setTripType] = useState(null);
  const [role, setRole] = useState(null);

  const resultKey =
    tripType === "private"
      ? "private"
      : role === "captain"
        ? "charterCaptain"
        : role === "passenger"
          ? "charterPassenger"
          : null;

  const result = resultKey ? RESULTS[resultKey] : null;

  function reset() {
    setTripType(null);
    setRole(null);
  }

  return (
    <div className="license-quiz">
      <h3 className="license-quiz__heading">Do you need a license?</h3>
      <p className="license-quiz__sub">
        Answer two quick questions to find out what applies to you.
      </p>

      <div className="quiz-step">
        <p className="quiz-step__question">
          <span className="quiz-step__num">1</span>
          What type of trip are you taking?
        </p>
        <div className="quiz-step__options">
          <button
            className={`quiz-option${tripType === "private" ? " quiz-option--selected" : ""}`}
            onClick={() => {
              setTripType("private");
              setRole(null);
            }}
            type="button"
          >
            Private vessel
          </button>
          <button
            className={`quiz-option${tripType === "charter" ? " quiz-option--selected" : ""}`}
            onClick={() => {
              setTripType("charter");
              setRole(null);
            }}
            type="button"
          >
            For-hire charter
          </button>
        </div>
      </div>

      {tripType === "charter" && (
        <div className="quiz-step">
          <p className="quiz-step__question">
            <span className="quiz-step__num">2</span>
            What is your role on the charter?
          </p>
          <div className="quiz-step__options">
            <button
              className={`quiz-option${role === "captain" ? " quiz-option--selected" : ""}`}
              onClick={() => setRole("captain")}
              type="button"
            >
              Captain
            </button>
            <button
              className={`quiz-option${role === "passenger" ? " quiz-option--selected" : ""}`}
              onClick={() => setRole("passenger")}
              type="button"
            >
              Passenger / angler
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className={`quiz-result quiz-result--${result.color}`}>
          <p className="quiz-result__heading">{result.heading}</p>
          <ul className="quiz-result__list">
            {result.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          {result.notes?.map((note, i) => (
            <p
              key={i}
              className="quiz-result__note"
              dangerouslySetInnerHTML={{ __html: note }}
            />
          ))}
          {resultKey === "private" && (
            <a
              href={VESL_URL}
              className="btn quiz-result__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access VESL for free
            </a>
          )}
          <button className="quiz-reset" onClick={reset} type="button">
            Start over
          </button>
        </div>
      )}
    </div>
  );
}

export default function WhoParticipates() {
  return (
    <section className="section section--bg-soft" aria-labelledby="who-heading">
      <div className="section-inner">
        <h2 id="who-heading">Who Needs to Participate?</h2>

        <p className="lead">
          Reporting through VESL is mandatory, not optional. Every angler
          fishing for red snapper under the EFP must register their trip and
          report their catch. This is how we earn longer seasons in the future.
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
                Any angler retaining red snapper between July 1 and August 31,
                2026
              </li>
            </ul>
          </div>

          <div className="compare-box compare-box--not-required">
            <header>Not Required</header>
            <ul>
              <li>Anglers not fishing for red snapper during the EFP season</li>
              <li>Anglers fishing on a chartered fishing trip.</li>
              <li>
                Commercial fishers not participating under the recreational EFP
              </li>
            </ul>
          </div>
        </div>

        <LicenseQuiz />
      </div>
    </section>
  );
}
