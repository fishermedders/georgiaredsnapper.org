import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    { num: 1, label: "Register with VESL" },
    { num: 2, label: "Register Your Trip Before You Go" },
    { num: 3, label: "Fish: July 1 Through August 31" },
    { num: 4, label: "Report Your Catch Within 24 Hours" },
  ];

  return (
    <section
      id="how-it-works"
      className="section section--bg-soft"
      aria-labelledby="how-heading"
    >
      <div className="section-inner">
        <h2 id="how-heading">How It Works</h2>

        <div
          className="steps-row"
          role="list"
          aria-label="Steps to participate"
        >
          {steps.map((step, i) => (
            <div className="step-wrapper" key={step.num}>
              <div className="step-item" role="listitem">
                <span className="step-num" aria-hidden="true">
                  {step.num}
                </span>
                <span className="step-label">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="step-arrow" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l6 7-6 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
