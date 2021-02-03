import React, { Fragment } from "react";
import "./dashboard/assets/scss/dashboard.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Navbar/Logo";

const RouteLogin = ({ component: Component, isAuth, ...rest }) => {
  return (
    <div>
      <Switch>
        <Route
          key="index"
          {...rest}
          render={(props) => {
            if (isAuth === null) {
              return (
                <Fragment>
                  <Navbar />
                  <Logo />
                  <Component {...rest} {...props} />
                  <Footer />
                </Fragment>
              );
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/panel",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
      </Switch>
    </div>
  );
};

export default RouteLogin;
