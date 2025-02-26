import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          Positivus
          <span className="logo-dot">.</span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger"></span>
        </button>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link
              to="/contact"
              className="cta-button"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
