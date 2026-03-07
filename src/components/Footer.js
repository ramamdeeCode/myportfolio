import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ramadhani-mdee/"
            className="footer__link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:rmdee05@gmail.com"
            className="footer__link"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/ramamdeeCode?tab=repositories"
            className="footer__link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
        <p className="footer__copy">&copy; 2026 Ramadhani Mdee</p>
      </div>
    </footer>
  );
}

export default Footer;
