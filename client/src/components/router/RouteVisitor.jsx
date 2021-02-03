import React, { Fragment, useEffect } from "react";
import "../App.css";
import { Route } from "react-router-dom";


const RouteVisitor = ({ component: Component, ...rest }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          {/* <Navbar />
          <Component {...props} />
          <Footer /> */}
        </Fragment>
      )}
    />
  );
};

export default RouteVisitor;
