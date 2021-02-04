import React, { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";
import { FETCH } from "../../../Fetch";
import Study from "./study/Study";
import Skills from "./skills/skill";

function About() {
  const [dataStudy, setDataStudy] = useState();
  const [isLoading, setLoading] = useState(false);

  const [dataSkills, setDataSkills] = useState();
  const [isLoadingSkills, setLoadingSkills] = useState(false);

  useEffect(() => {
    axios
      .get(`${FETCH}/studys`)
      .then((res) => {
        setDataStudy(res.data);
        setLoading(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${FETCH}/skills`)
      .then((res) => {
        setDataSkills(res.data);
        setLoadingSkills(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
    <div className="about" id="about">
      <h2>ABOUT</h2>
      <div className="line"></div>
      <div className="about-container-main">
        <div className="about-card-conainer">
          <div className="container-card-about mt-3  ">
            <h3>Who's this guy?</h3>
            <p>
              {" "}
              Hello, my name is Florian !<br /> After having worked ten years in
              the catering industry, I chose to do of my passion my job. Being
              eager to develop my skills, I decided to launch myself into the
              challenge of my retraining. I have just finished my course at the
              Wild Code Shool and I am starting an internship in business in
              order to put into practice all the skills acquired in the field!
            </p>
          </div>
          <div className="container-card-about mt-3">
            <h3>Study</h3>
            {dataStudy ? (
              dataStudy
                .filter((res) => res.isActive === 1)
                .map((res) => (
                  <Study
                    url={res.study_url}
                    name={res.study_name}
                    date={res.study_date}
                    desc={res.study_description}
                    alt={res.study_name}
                  />
                ))
            ) : (
              <div>Chargement</div>
            )}
          </div>
          <div className="container-card-about mt-3">
            <h3>Skills</h3>
            <div className="skills-container">
              {isLoadingSkills ? (
                dataSkills
                  .filter((res) => res.isActive === 1)
                  .map((res) => (
                    <Skills
                      key={res.id}
                      img={res.skill_img}
                      name={res.skill_name}
                      alt={res.skill_name}
                    />
                  ))
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
