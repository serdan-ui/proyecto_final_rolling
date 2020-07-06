import React from 'react';
import {Route , Redirect } from "react-router-dom";
import isAuthenticated from "../Auth/isAuthenticated";


const RestrictedRoutes = ({ children, ...rest }) => (
  
<Route
{...rest}
render={() => {
  if (isAuthenticated() === "user"|| isAuthenticated()==="admin") {
    return <Redirect
    to="/main"
  />
  } else {
    return children;
    
  }
}}
/>
) ;

export default RestrictedRoutes ;
