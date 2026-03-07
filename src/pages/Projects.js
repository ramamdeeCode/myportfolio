import React, { useEffect, useRef } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects">
      <div className="projects__header">
        <h1 className="projects__title reveal" ref={titleRef}>
          Projects
        </h1>
        <p className="projects__subtitle reveal">
          Things I've built — full-stack apps and demos.
        </p>
      </div>
      <div className="projects__grid">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            name={project.name}
            image={project.image}
            url={project.url}
            gitHubUrl={project.gitHubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
