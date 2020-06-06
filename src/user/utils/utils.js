import React from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../auth/helper/auth-data";

const {user} = isAuthenticated();


const performRedirect = ({didRedirect}) => {
    if(didRedirect){
        if(user && user.role === 1){
            return <Redirect to="/farmer/dashboard" />
        }
        return <Redirect to="/" />
        
    }
    if(isAuthenticated()){
        return <Redirect to="/" />
    }
}

export { performRedirect }