import React, { useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero__content reveal">
          <p className="hero__label">Software Developer</p>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Ramadhani</span>
          </h1>
          <p className="hero__tagline">
            I build products that positively change the world. Focused on
            full-stack web development with a passion for learning and clean,
            user-centered solutions.
          </p>
          <div className="hero__links">
            <a
              href="https://www.linkedin.com/in/ramadhani-mdee/"
              className="hero__social"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:rmdee05@gmail.com"
              className="hero__social"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://github.com/ramamdeeCode?tab=repositories"
              className="hero__social"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="hero__gradient" aria-hidden="true" />
      </section>

      <section className="skills" id="skills" ref={skillsRef}>
        <h2 className="skills__title reveal">Skills</h2>
        <div className="skills__grid">
          <article className="skills__card reveal">
            <h3 className="skills__card-title">Front-End</h3>
            <p className="skills__card-text">
              JavaScript, React (Router, Hooks), HTML5, CSS3
            </p>
          </article>
          <article className="skills__card reveal">
            <h3 className="skills__card-title">Back-End</h3>
            <p className="skills__card-text">
              Node.js, PostgreSQL, Express
            </p>
          </article>
          <article className="skills__card reveal">
            <h3 className="skills__card-title">Tools & Testing</h3>
            <p className="skills__card-text">
              Mocha, Chai, Git, GitHub, Heroku, Vercel
            </p>
          </article>
          <article className="skills__card reveal">
            <h3 className="skills__card-title">More</h3>
            <p className="skills__card-text">
              RESTful APIs, unit testing, algorithms & data structures, Java
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
