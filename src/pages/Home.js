import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ramadhani</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating
            products positively change the world.{" "}
          </p>
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
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Mocha, Chai, Git,
              GitHub
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, PostgreSQL, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
