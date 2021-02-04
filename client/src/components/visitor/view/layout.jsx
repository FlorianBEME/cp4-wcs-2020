import React from "react";
import About from "../about/About";
import Accueil from "../Accueil/Accueil";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact";

function layout() {
  return (
    <div>
      <Accueil />
      <Project  id="pro"/>
      <About id="about"/>
      <Contact id="contact"/>
    </div>
  );
}

export default layout;
