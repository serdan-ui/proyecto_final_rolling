import React from 'react';
import {Route , Redirect } from "react-router-dom";
import isAuthenticated from "../Auth/isAuthenticated";


const PrivateAdmin = ({ children, ...rest }) => (
   
  <Route
  {...rest}
  render={() => {
    if (isAuthenticated() === "admin") {
      return children;
    } else {
     
      return <Redirect to="/main" />;
    }
  }}
/>
      
) ;

export default PrivateAdmin ;