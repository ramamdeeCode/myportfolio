import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../styles/Navbar.css";

function Navbar({ theme, onToggleTheme }) {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const navLinks = [
    { to: "/myportfolio", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
  ];

  return (
    <header className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="navbar__inner">
        <Link to="/myportfolio" className="navbar__logo" aria-label="Home">
          RM
        </Link>

        <nav className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link ${location.pathname === to ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            onClick={onToggleTheme}
            className="navbar__theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <LightModeIcon aria-hidden />
            ) : (
              <DarkModeIcon aria-hidden />
            )}
          </button>
          <button
            type="button"
            className="navbar__menu-btn"
            onClick={() => setExpandNavbar((prev) => !prev)}
            aria-expanded={expandNavbar}
            aria-label="Toggle menu"
          >
            {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
      </div>

      {expandNavbar && (
        <div className="navbar__mobile">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__mobile-link ${location.pathname === to ? "active" : ""}`}
              onClick={() => setExpandNavbar(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
