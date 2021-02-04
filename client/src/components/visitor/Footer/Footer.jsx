import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>florianbme@gmail.com</p>
      <div className=" d-flex container-icons-footer justify-content-between pt-2 pb-2">
        <a href="https://github.com/FlorianBEME" target="_blank">
          <AiFillGithub className="icons-footer" size="30" />
        </a>
        <a href="https://fr.linkedin.com/in/florian-b%C3%AAme" target="_blank">
          <AiFillLinkedin className="icons-footer" size="30" />
        </a>
      </div>
      <p className="copyright mt-2 mb-2">© 2021 Florian Bême</p>
    </footer>
  );
}

export default Footer;
