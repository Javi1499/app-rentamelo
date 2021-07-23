import React from 'react';
import { Route } from "react-router";
import { Redirect } from 'react-router-dom';
import { getToken } from "../helpers";

const PrivateRoute = ({component:Component, ...props}) => {
    return <Route {...props}>{getToken()? <Component/>:<Redirect to="/login"/>}</Route>

}
 
export default PrivateRoute;