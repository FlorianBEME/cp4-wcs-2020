import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Project.css";
import { confirmAlert } from "react-confirm-alert";
import "antd/dist/antd.css";
import { Switch } from "antd";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

import { FETCH } from "../../../../../../Fetch";

function Project() {
  const [dataProject,setDataProject]= useState();
  const [isLoading, setLoading] = useState(false);
  const [getProject, setProject] = useState({
    project_name: "",
    project_date: "",
    project_description: "",
    project_url: "",
    project_img: "",
    isActive: 0,
  });

  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");
  let res;

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
  });

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirmation de suppression",
      message: "Êtes-vous sur de vouloir supprimer ce commentaire ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios.delete(`${FETCH}/projects/${id}`).catch(function (erreur) {
              console.log(erreur);
            });
          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${FETCH}/projects`, getProject).catch(function (error) {
      console.log(error);
    });
  };

  function clear(input1, input2, input3, input4, input5) {
    document.getElementById(input1).value = "";
    document.getElementById(input2).value = "";
    document.getElementById(input3).value = "";
    document.getElementById(input4).value = "";
    document.getElementById(input5).value = "";
  }

  const handleChange = (event) => {
    setProject({
      ...getProject,
      [event.target.name]: event.target.value,
    });
  };

  const onChangePicture = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      res = await axios.post(`${FETCH}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      res = res.data;
      setProject({ ...getProject, project_img: res.filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const handleSubmitCheck = (id, checked) => {
    axios
      .put(`${FETCH}/projects/${id}`, { isActive: checked })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-toggle-switch mr-2"> </i>
          Ajout d'un Projet
        </CardTitle>
        <CardBody className="form">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              clear("input1", "input2", "input3", "input4", "input5");
            }}
            className="sub-container-form-com"
          >
            <div className="large-container-form ">
              <div className="sub-container-form-com ">
                <label htmlFor="project_name">Name :</label>
                <input
                  className="input-com"
                  type="text"
                  name="project_name"
                  id="input1"
                  value={getProject.project_name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="project_date">Date:</label>
                <input
                  className="input-com"
                  type="text"
                  name="project_date"
                  id="input2"
                  value={getProject.project_date}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="project_url">Url:</label>
                <input
                  className="input-com"
                  type="text"
                  name="project_url"
                  id="input3"
                  value={getProject.project_url}
                  onChange={handleChange}
                  required
                />
                <div className="d-flex flex-column mt-4">
                  <input
                    className="Part1-FormInputImg"
                    type="file"
                    onChange={(e) => onChangePicture(e)}
                    id="input4"
                    name="picture_user"
                    accept="image/png, image/jpeg"
                  />
                  <button
                    className="Part1-FormImgButton"
                    type="button"
                    onClick={(e) => {
                      handleUpload();
                    }}
                  >
                    Valider ma photo
                  </button>
                </div>

                <label htmlFor="project_description">Description :</label>
                <textarea
                  rows="7"
                  type="textarea"
                  name="project_description"
                  id="input5"
                  maxlength="350"
                  value={getProject.project_description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-13 ">
              Valider
            </button>
          </form>
        </CardBody>
      </Card>
      {isLoading
                  ? dataProject.map((res) => (
                      <Accordion className="" key={res.id}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls=""
                          id=""
                        >
                          <Typography className="mail-oververflow">
                            {res.project_name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="width100  mb-2" >
                            <div className=" flex mb-2">
                              <div className="box-date-icon">
                                <div className="mb-3">
                                  <Switch
                                    value="check"
                                    defaultChecked={res.isActive}
                                    onClick={(checked) =>
                                      handleSubmitCheck(res.id, checked)
                                    }
                                  />
                                  <RiDeleteBin6Line
                                    size="35"
                                    className="btn-message ml-2"
                                    onClick={() => handleDelete(res.id)}
                                  />
                                </div>
                                <div>{res.project_date}</div>
                                <div>{res.project_url}</div>
                                <div>{res.project_description}</div>
                                <img src={res.project_img} alt={res.project_name}/>
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  : null}
    </div>
  );
}

export default Project;
