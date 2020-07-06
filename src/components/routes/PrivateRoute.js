import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "../Auth/isAuthenticated";

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (isAuthenticated() === "user"||isAuthenticated()==="admin") {
        return children;
      } else {
       
        return <Redirect to="/" />;
      }
    }}
  />
);

export default PrivateRoute;
