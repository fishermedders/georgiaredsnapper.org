import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const BASE = "/RedSnapper1";

// ── Hash → pretty-URL normalisation ──
// Drupal sub-route pages (e.g. /RedSnapper/about) redirect to
// /RedSnapper#about.  Before React mounts we convert the hash back
// to the pretty path so BrowserRouter picks up the correct route
// and the address bar shows the canonical URL.
const hash = window.location.hash.slice(1); // strip leading '#'
if (hash) {
  const pretty = hash.startsWith("/") ? hash : `/${hash}`;
  window.history.replaceState(null, "", `${BASE}${pretty}`);
}

// ── Mount ──
createRoot(document.getElementById("grsp-root")).render(
  <StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// ── Reveal the page ──
// The Drupal embed bootstrap hides <body> with opacity:0 while it wipes
// Drupal's DOM and rebuilds the page.  We wait two animation frames so
// React has committed the initial paint, then fade the body in via the
// CSS transition the bootstrap set (transition: opacity 0.35s ease).
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});
