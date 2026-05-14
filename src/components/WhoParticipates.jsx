import { useState } from "react";
import { VESL_URL } from "../utils/constants.js";
import "./WhoParticipates.css";

const RESULTS = {
  private: {
    color: "blue",
    heading: "You will need a few things.",
    items: [
      "A valid Georgia recreational fishing license and Saltwater Information Program (SIP) Permit",
      "A VESL trip registration, created before you leave the dock",
      "A completed VESL catch report, submitted within 24 hours of departure",
    ],
    note: null,
  },
  charterCaptain: {
    color: "blue",
    heading: "As the captain, you are responsible for reporting.",
    items: [
      "Your Georgia Saltwater Fishing Guide license",
      "Your South Atlantic Snapper-Grouper Charter/Headboat permit",
      "A VESL catch report covering your entire party, submitted within 24 hours",
    ],
    note: null,
  },
  charterPassenger: {
    color: "green",
    heading: "You don't need to do anything individually.",
    items: [
      "No personal fishing license required for red snapper",
      "No VESL account or registration required",
      "No catch reporting required on your end",
    ],
    note: "Your captain's licenses cover your party. Just fish and enjoy the trip.",
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
              Captain / operator
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
              <li key={i}>{item}</li>
            ))}
          </ul>
          {result.note && <p className="quiz-result__note">{result.note}</p>}
          {resultKey !== "charterPassenger" && (
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
