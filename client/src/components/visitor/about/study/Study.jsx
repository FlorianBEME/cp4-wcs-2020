import React from "react";
import "./study.css";

function Study(props) {
  return (
    <div className="card-study">
      <div>
        <a href={props.url} target="_blank">
          <h4>{props.name}</h4>{" "}
        </a>
        <h5>{props.date}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Study;
