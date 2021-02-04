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

function Skills() {
  const [dataSkills, setDataSkills] = useState();
  const [isLoading, setLoading] = useState(false);
  const [getSkills, setSkills] = useState({
    skill_name: "",
    skill_img: "",
    isActive: 0,
  });

  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");
  let res;

  useEffect(() => {
    axios
      .get(`${FETCH}/Skills`)
      .then((res) => {
        setDataSkills(res.data);
        setLoading(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  });

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirmation de suppression",
      message: "Êtes-vous sur de vouloir supprimer ce skill ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios.delete(`${FETCH}/skills/${id}`).catch(function (erreur) {
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
    axios.post(`${FETCH}/skills`, getSkills).catch(function (error) {
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
    setSkills({
      ...getSkills,
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
      setSkills({ ...getSkills, skill_img: res.filePath });
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
      .put(`${FETCH}/skills/${id}`, { isActive: checked })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-toggle-switch mr-2"> </i>
          Ajout d'un Skill
        </CardTitle>
        <CardBody className="form">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              //   clear("input1", "input2", "input3", "input4", "input5");
            }}
            className="sub-container-form-com"
          >
            <div className="large-container-form ">
              <div className="sub-container-form-com ">
                <label htmlFor="skill_name">Name :</label>
                <input
                  className="input-com"
                  type="text"
                  name="skill_name"
                  id="input1"
                  value={getSkills.skill_name}
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
              </div>
            </div>
            <button type="submit" className="btn-13 ">
              Valider
            </button>
          </form>
        </CardBody>
      </Card>
      {isLoading
        ? dataSkills.map((res) => (
            <Accordion className="" key={res.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls=""
                id=""
              >
                <Typography className="mail-oververflow">
                  {res.skill_name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="width100  mb-2">
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
                      <img src={res.skill_img} alt={res.skill_name} />
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

export default Skills;
