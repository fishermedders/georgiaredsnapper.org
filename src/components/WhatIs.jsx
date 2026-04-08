import "./WhatIs.css";

export default function WhatIs() {
  const cards = [
    {
      title: "Better Data, Better Fishing",
      text: "Testing new ways to manage red snapper with angler reported data.",
    },
    {
      title: "Who is Involved?",
      list: ["GA DNR & NOAA", "NC & SC Partners", "Yamaha Rightwaters"],
    },
    {
      title: "Why It Matters",
      list: ["Longer Seasons", "Less Derby Fishing", "Georgia Control"],
    },
  ];

  return (
    <section className="section what-is">
      <h2>What is the Red Snapper Project?</h2>
      <div className="card-grid">
        {cards.map((card, i) => (
          <div key={i} className="info-card">
            <h3>{card.title}</h3>
            {card.text && <p>{card.text}</p>}
            {card.list && (
              <ul>
                {card.list.map((item) => (
                  <li key={item}>✔️ {item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
