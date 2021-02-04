import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="container-nav-bar">
      <div className="d-flex justify-content-between align-items-center">
        <div className="title-navbar">Florian Bême</div>
        <div className="d-flex container-menu">
          <div className="menu-item">
            <a href="#pro">Project</a>
          </div>
          <div className="menu-item">
            <a href="#about">About</a>
          </div>
          <div className="menu-item">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
