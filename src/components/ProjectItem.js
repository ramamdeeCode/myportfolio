import React, { useEffect, useRef } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GithubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ image, name, url, gitHubUrl }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="project-card reveal" ref={cardRef}>
      <a
        href={url}
        className="project-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="project-card__image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="project-card__overlay">
          <span className="project-card__cta">View project</span>
          <OpenInNewIcon className="project-card__icon" />
        </div>
      </a>
      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <a
          href={gitHubUrl}
          className="project-card__github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} source code on GitHub`}
        >
          <GithubIcon />
          <span>Source</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectItem;
