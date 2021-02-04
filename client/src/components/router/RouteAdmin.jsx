import React from "react";
import "../../components/admin/dashboard/assets/scss/dashboard.css";
import { Switch, Route, Redirect } from "react-router-dom";
import indexRoutes from "../admin/dashboard/routes/index";

const RouteAdmin = ({ component: Component, isAuth, ...rest }) => {
  return (
    <div>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              key="index"
              {...rest}
              render={(props) => {
                if (isAuth) {
                  return <Component {...rest} {...props} />;
                } else {
                  return (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: {
                          from: props.location,
                        },
                      }}
                    />
                  );
                }
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default RouteAdmin;
