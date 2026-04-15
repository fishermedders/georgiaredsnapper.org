import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * Responsive Navbar.jsx
 *
 * - Adds an accessible mobile toggle for the main navigation.
 * - Keeps desktop layout unchanged (logo left, links right) and adds
 *   mobile-friendly behaviors:
 *   - Toggle button (hamburger / close) to open/close the nav.
 *   - Closes the menu on outside click or on window resize above breakpoint.
 * - Uses ARIA attributes for accessibility: aria-expanded, aria-controls,
 *   role="menu"/"menuitem" for the opened panel (progressive enhancement).
 *
 * Note: Styling for `.navbar-toggle`, `.nav-links--open`, etc. should be
 * implemented in `Navbar.css`. This component provides the structure and
 * behavior only.
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const MENU_ID = "primary-navigation";
  const MOBILE_BREAKPOINT = 768; // px — keep in sync with CSS media queries

  // Close menu on Escape key when open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e) {
      if (!open) return;
      const target = e.target;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Close menu when crossing breakpoint to desktop
  useEffect(() => {
    function onResize() {
      if (typeof window === "undefined") return;
      if (window.innerWidth > MOBILE_BREAKPOINT && open) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Toggle handler
  function toggleMenu() {
    setOpen((v) => !v);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Logo area */}
        <Link
          to="/"
          className="navbar-logo"
          aria-label="Georgia Red Snapper home"
        >
          <img
            src="/GRSP_Logo.svg"
            alt="Georgia Red Snapper Logo"
            className="site-logo"
          />
          <img
            src="/logos/DNR_Logo.svg"
            alt="Georgia Department of Natural Resources"
            className="navbar-dnr-logo"
          />
        </Link>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className={`navbar-toggle ${open ? "is-open" : ""}`}
          aria-controls={MENU_ID}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
          type="button"
        >
          {/* Icon visuals — CSS can hide/show the appropriate parts or style them */}
          <svg
            className="icon icon--hamburger"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          <svg
            className="icon icon--close"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>

        {/* Nav links */}
        <ul
          id={MENU_ID}
          ref={menuRef}
          className={`nav-links ${open ? "nav-links--open" : ""}`}
          role="menu"
          aria-hidden={
            !open &&
            typeof window !== "undefined" &&
            window.innerWidth < MOBILE_BREAKPOINT
          }
        >
          <li role="none">
            <Link role="menuitem" to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              to="/how-it-works"
              onClick={() => setOpen(false)}
            >
              How it Works
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/faq" onClick={() => setOpen(false)}>
              FAQs
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              to="/season-info"
              onClick={() => setOpen(false)}
            >
              Season Info
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
