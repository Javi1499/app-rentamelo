import React from 'react';
import { Route } from "react-router";
import { Redirect } from 'react-router-dom';
import { getToken } from "../helpers";

const PrivateRouteChildren = ({children, ...props}) => {
    return <Route {...props}>{getToken()? <children/>:<Redirect to="/login"/>}</Route>

}
 
export default PrivateRouteChildren;