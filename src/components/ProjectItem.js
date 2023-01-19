import React from "react";
// import { useNavigate } from "react-router-dom";
import Github from "@mui/icons-material/GitHub";

function ProjectItem({ image, name, id, url, gitHubUrl }) {
  // const navigate = useNavigate();
  return (
    <div>
      <div
        className="projectItem"
        onClick={() => {
          //navigate("/project/" + id);
          window.location.href = url;
        }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
      </div>
      <div className="projectGit">
        <a href={gitHubUrl} className="projectGitLink">
          <Github className="gitHubLink" />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
