import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo floating on the left */}
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Georgia Red Snapper Logo" />
        </Link>

        {/* Links floating to the right */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it Works</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/season-info">Season Info</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
