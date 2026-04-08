import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      q: "Is reporting mandatory?",
      a: "Yes, for all recreational anglers targeting red snapper in Georgia state waters during the season.",
    },
    {
      q: "How long does it take to report?",
      a: "Most reports take less than 3 minutes to complete via the VESL app.",
    },
    {
      q: "Is my data confidential?",
      a: "Yes. Your data is encrypted and used only for fisheries management and research purposes.",
    },
    {
      q: "Do I need a signal to report?",
      a: "The app allows you to log data offline; it will sync once you return to a service area.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>{faq.q}</summary>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
