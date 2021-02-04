import React from "react";
import "./accueil.css";
import photo from "../../../assets/photo.jpg";

function Accueil() {
  return (
    <div className="accueil-container">
      <div className="first-container-accueil">
        <h1>FLORIAN BÊME</h1>
        <h2>DEVELOPER FULLSTACK JUNIOR</h2>
      </div>
      <img src={photo} alt="phote of me" />
      <div className="second-container-accueil mt-4 ">
        <p>Welcome on my portfolio.</p>
        <p>
          I am very happy to practice this art which is web development because
          it is very enriching.{" "}
        </p>
      </div>
    </div>
  );
}

export default Accueil;
