import React from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";

function Project() {
  return (
    <div className="project-container" id="pro" >
      <h2>PROJECT</h2>
      <div className="line"></div>
      <div className="container-card d-flex justify-content-center">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;
