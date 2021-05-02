import React from "react";
import "./Portfolio.css";

const Project = ({ project }) => {
  return (
    <div className="project-div text-center m-4">
      <img src={project.img} alt="" />
      <h3 className="text-white pt-4">{project.name}</h3>
      <p className="text-white pt-4">{project.details}</p>
      <a
        className="btn btn-outline-primary me-2"
        target="_blank"
        href={project.live}
        rel="noreferrer"
      >
        Live
      </a>
      <a
        className="btn btn-outline-primary me-2"
        target="_blank"
        href={project.code}
        rel="noreferrer"
      >
        Code
      </a>
    </div>
  );
};

export default Project;
