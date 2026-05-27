import { useState, useEffect, useRef } from "react";
import "./AnnouncementModal.css";

const DISMISS_KEY = "grsp_announcement_dismissed";
const SESSION_KEY = "grsp_announcement_seen";

export default function AnnouncementModal() {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const btnRef = useRef(null);

  // Show unless permanently dismissed (localStorage) or already seen this session
  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
    }
  }, []);

  // Move focus to the button when the modal opens
  useEffect(() => {
    if (visible) {
      btnRef.current?.focus();
    }
  }, [visible]);

  // Allow Escape key to dismiss — re-register whenever dontShow changes so
  // the handler always closes over the latest value
  useEffect(() => {
    if (!visible) return;
    const handler = (e) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible, dontShow]);

  // Prevent background scroll while open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function dismiss() {
    if (dontShow) {
      localStorage.setItem(DISMISS_KEY, "1");
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="ann-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ann-title"
      aria-describedby="ann-body"
    >
      <div className="ann-dialog">
        {/* Header */}
        <div className="ann-header">
          <div className="ann-icon" aria-hidden="true">
            {/* Info / gavel icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h2 className="ann-title" id="ann-title">
            Important Update Regarding the 2026 Season
          </h2>
        </div>

        <hr className="ann-divider" />

        {/* Body */}
        <p className="ann-body" id="ann-body">
          On May 21, 2026, a Federal court judge granted a preliminary
          injunction that stopped the implementation of the South Atlantic
          states Exempted Fishing Permits. At this time, it is not known if NOAA
          Fisheries will file an appeal, however, because Georgia&rsquo;s
          requested start date of July 1st is weeks away, Coastal Resources
          Division will continue to work on ensuring the agency is prepared
          should the injunction be lifted. Updates will be posted as more
          information is made available.
        </p>

        {/* Don't show again toggle */}
        <div className="ann-toggle-row">
          <label className="ann-toggle-label" htmlFor="ann-dont-show">
            <input
              id="ann-dont-show"
              type="checkbox"
              className="ann-toggle-input"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
            <span className="ann-toggle-text">Don't show this again</span>
          </label>
        </div>

        {/* Footer */}
        <div className="ann-footer">
          <button
            ref={btnRef}
            className="ann-btn"
            onClick={dismiss}
            type="button"
          >
            Continue to Site
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
