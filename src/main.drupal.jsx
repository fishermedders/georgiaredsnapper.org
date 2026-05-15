import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const BASE = "/RedSnapper";

// ── Hash → pretty-URL normalisation ──
// Drupal sub-route pages redirect to the main page with a hash that
// encodes the intended route.  Two formats are supported:
//
//   #about          → /about          (plain page route)
//   #faq/vesl-app   → /faq#vesl-app   (page route + in-page fragment)
//
// The second format lets FAQ dummy pages preserve the permalink
// fragment so the correct accordion item auto-expands on load.
const _hash = window.location.hash.slice(1); // strip leading '#'
if (_hash) {
  const slash = _hash.indexOf("/");
  if (slash !== -1) {
    // e.g. "faq/vesl-app" → /BASE/faq#vesl-app
    const page = _hash.slice(0, slash);
    const subfragment = _hash.slice(slash + 1);
    window.history.replaceState(null, "", `${BASE}/${page}#${subfragment}`);
  } else {
    // e.g. "about" → /BASE/about
    const pretty = _hash.startsWith("/") ? _hash : `/${_hash}`;
    window.history.replaceState(null, "", `${BASE}${pretty}`);
  }
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
