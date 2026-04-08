import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    "Download VESL App",
    "Register Your Trip",
    "Report Your Catch",
    "Improve Georgia's Data",
  ];
  return (
    <section className="section how-it-works">
      <h2>How It Works</h2>
      <div className="step-container">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <span className="step-num">{i + 1}.</span> {step}
          </div>
        ))}
      </div>
    </section>
  );
}
