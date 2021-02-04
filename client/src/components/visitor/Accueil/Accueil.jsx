import React from "react";
import "./accueil.css";
import photo from "../../../assets/photo.jpg";
import Fade from "react-reveal/Fade";

function Accueil() {
  return (
    <div className="accueil-container">
      <div className="first-container-accueil">
        <Fade cascade duration="2000">
          <h1>FLORIAN BÊME</h1>
          <h2>DEVELOPER FULLSTACK JUNIOR</h2>
        </Fade>
      </div>
      <img src={photo} alt="phote of me" />
      <div className="second-container-accueil mt-4 ">
        <p>Welcome on my portfolio.</p>
        <p>
          I am very happy to practice this art which is web development because
          it is very enriching.{" "}
        </p >
      </div>
    </div>
  );
}

export default Accueil;
