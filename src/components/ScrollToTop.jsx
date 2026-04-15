import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop.jsx
 *
 * - Listens for route changes (via react-router's location) and scrolls the
 *   page to top. If the new location contains a hash (e.g. #section) this
 *   component will attempt to scroll the matching element into view instead.
 *
 * Usage:
 * - Render <ScrollToTop /> near the top of your app (for example inside App.jsx
 *   directly under the Router) so it can react to route changes.
 *
 * Notes:
 * - Uses smooth scrolling where supported.
 * - Defers hash scrolling briefly to allow the target element to render.
 */

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, attempt to scroll to that element.
    if (hash) {
      // Small delay to let the DOM update/render target element
      const id = hash.replace("#", "");
      const attemptScroll = () => {
        const el =
          document.getElementById(id) || document.querySelector(hash) || null;
        if (el) {
          // Use scrollIntoView for element targets
          try {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch (e) {
            // Fallback if browser doesn't support options
            el.scrollIntoView(true);
          }
        } else {
          // Fallback to top if target not found
          try {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } catch (e) {
            window.scrollTo(0, 0);
          }
        }
      };

      // Use requestAnimationFrame to wait until after paint, with a timeout
      // in case the element is inserted slightly later.
      let raf = requestAnimationFrame(attemptScroll);
      const t = setTimeout(attemptScroll, 120); // additional backup
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(t);
      };
    }

    // No hash: scroll to top on route change
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (e) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
}
