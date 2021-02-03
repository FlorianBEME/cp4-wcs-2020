import React from "react";
import "./projectcard.css";
import Super from "../../../assets/super.jpg"

function ProjectCard(props) {
  return (
    <div className="card-project d-flex align-items-center flex-column">
      <img src={Super} alt={props.alt} />
      <h3 className="mt-3">{props.title}TITRE</h3>
      <div >
        <p className="date">{props.date}09/09/2020</p>
        <p className="text-justify desc">
          {props.desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sed eros ullamcorper, elementum urna sit amet, porta justo.
          Aliquam commodo scelerisque risus, eu vulputate ligula efficitur ac.
          Ut sit amet dui pulvinar, blandit quam ac, imperdiet tortor. Nam
          pulvinar maximus metus quis venenatis. Nullam et metus mi. Duis
          dignissim{" "}
        </p>
      </div>
      <div class="button" id="button-6">
                <div id="spin"></div>
                <a
                  href={props.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Let's Go!
                </a>
              </div>
    </div>
  );
}

export default ProjectCard;
