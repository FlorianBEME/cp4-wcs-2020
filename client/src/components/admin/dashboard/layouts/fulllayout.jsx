import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header/header.jsx";
import Sidebar from "../components/sidebar/sidebar.jsx";
import AdminRoutes from "../routes/routingAdmin.jsx";
import "./fullayout.css";

const Fulllayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  props.history.listen((location, action) => {
    if (
      window.innerWidth < 767 &&
      document
        .getElementById("main-wrapper")
        .className.indexOf("show-sidebar") !== -1
    ) {
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
    }
  });

  useEffect(() => {
    const updateDimensions = () => {
      let element = document.getElementById("main-wrapper");
      setWidth(window.innerWidth);
      if (width < 1170) {
        element.setAttribute("data-sidebartype", "mini-sidebar");
        element.classList.add("mini-sidebar");
      } else {
        element.setAttribute("data-sidebartype", "full");
        element.classList.remove("mini-sidebar");
      }
    };
    if (document.readyState === "complete") {
      updateDimensions();
    }
    window.addEventListener("resize", updateDimensions.bind(this));
    window.addEventListener("load", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("load", updateDimensions.bind(this));
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  }, [width]);

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.location.reload();
  };

  /*--------------------------------------------------------------------------------*/
  /* Theme Setting && Layout Options wiil be Change From Here                       */
  /*--------------------------------------------------------------------------------*/
  return (
    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
      className="fullpage"
    >
      <Header />

      <Sidebar {...props} routes={AdminRoutes} />

      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch>
            {AdminRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              } else {
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Fulllayout;
