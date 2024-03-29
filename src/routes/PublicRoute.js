import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../services/authService";

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() && restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
