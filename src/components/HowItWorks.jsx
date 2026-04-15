import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    "Download VESL App",
    "Register Your Trip",
    "Report Your Catch",
    "Improve Georgia's Data",
  ];

  return (
    <section
      id="how-it-works"
      className="section how-it-works section--bg-blue-soft section--edge-to-edge"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-inner">
        <h2 id="how-it-works-heading">How It Works</h2>

        <nav
          className="steps-row"
          role="list"
          aria-label="Steps to participate and report"
        >
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              <div
                className="step-item"
                role="listitem"
                aria-posinset={i + 1}
                aria-setsize={steps.length}
              >
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="step-label">{step}</span>
              </div>

              {/* Render a simple arrow between steps (decorative) */}
              {i < steps.length - 1 && (
                <span className="step-arrow" aria-hidden="true">
                  <svg
                    width="28"
                    height="18"
                    viewBox="0 0 28 18"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M1 9h22M22 9l-6-6M22 9l-6 6"
                      fill="none"
                      stroke="#244e86"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
