import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";
import axios from "axios";
import { FETCH } from "../../../Fetch";


function Project() {
  const [dataProject, setDataProject] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${FETCH}/projects`)
      .then((res) => {
        setDataProject(res.data);
        setLoading(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
    <div className="project-container" id="pro" >
      <h2>PROJECT</h2>
      <div className="line"></div>
      <div className="container-card d-flex justify-content-center pb-5">
        {isLoading ? (
          dataProject
            .filter((res) => res.isActive === 1)
            .map((res) => (
              
              <ProjectCard
              key={res.id}
                img={res.project_img}
                title={res.project_name}
                date={res.project_date}
                alt={res.project_name}
                desc={res.project_description}
                link={res.project_url}
              />
            ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Project;
