import React from "react";
import "./projectcard.css";
import Super from "../../../assets/super.jpg";

function ProjectCard(props) {
  return (
    <div className="card-project d-flex align-items-center flex-column">
      <img src={props.img} alt={props.alt} />
      <h3 className="mt-3">{props.title}</h3>
      <div>
        <p className="date">{props.date}</p>
        <p className="text-justify desc">
          {props.desc}
        </p>
      </div>
      <div class="button" id="button-6">
        <div id="spin"></div>
        <a href={props.link} rel="noreferrer" target="_blank">
          Let's Go!
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
