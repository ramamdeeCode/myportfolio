import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/ramadhani-mdee/">
          <LinkedInIcon />
        </a>
        <a href="mailto:rmdee05@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/ramamdeeCode?tab=repositories">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 ramadhani mdee</p>
    </div>
  );
}

export default Footer;
