import React, { useState } from "react";
import "./contact.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formAll, setFormAll] = useState({
    name_question: "",
    mail_question: "",
    message_question: "",
  });

  const handleChange = (event) => {
    setFormAll({ ...formAll, [event.target.name]: event.target.value });
  };

  
  return (
    <div className="contact-container" id="contact">
      <h2>CONTACT</h2>
      <div className="line"></div>

      <div className="container-form d-flex justify-content-center pb-5">
        <div class="container">
          <form
            className="form-contact"
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_5i5iv9o",
                  "template_jl4c4rq",
                  e.target,
                  "user_6qlZplw76sbWcE4kULprS"
                )
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
            }}
          >
            <div class="">
              <div class="">
                <div class="form-group">
                  <label for="last">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="user_name"
                    placeholder="Jean Durand"
                    onChange={handleChange}
                    id="last"
                  />
                </div>
              </div>
            </div>

            <div class="">
              <div class="form-group">
                <label for="mail">Email</label>
                <input
                  type="mail"
                  class="form-control"
                  name="user_email"
                  id="mail"
                  onChange={handleChange}
                  placeholder="durandjean@mail.com"
                />
              </div>
            </div>

            <div class="">
              <div class="form-group">
                <label for="text">Email address</label>
                <textarea
                  type="text"
                  class="form-control"
                  name="message"
                  id="text"
                  onChange={handleChange}
                  placeholder="your message"
                  name="message_question"
                />
              </div>
            </div>

            <button type="submit" class="btn btn-three">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
