import React from "react";
import { Redirect, Link } from "react-router-dom";
import { isAuthenticated } from "../../auth/helper/auth-data";
import "./utils.css";


const {user} = isAuthenticated();


const performRedirect = (didRedirect) => {
    if(didRedirect){
        if(user && user.role === 1){
            return <Redirect to="/farmer/dashboard" />
        }else{
            return <Redirect to="/shop" />
        }     
    }
    if(isAuthenticated()){
        return <Redirect to="/" />
    }
}

const loadingMessage = (loading) => {
    return (
      loading && (
        <div>
          <h2 className="loading">Loading...</h2>
        </div>
      )
    );
  };

  const successMessage = (success) => {
    return (
        <div>
        <div
        style={{ display: success ? "" : "none"}}   
        className="successMessage"    
        >
        <span> 
        <Link to="/signin" className="span">Sign In </Link>Here.</span>
        </div>
        </div>
    )
}

const errorMessage = (error) => {
    return (
        <div>
        <div
        style={{ display: error ? "" : "none"}}
        >
        <span className="errorMessage">*{error}</span>
        </div>
        </div>
    )
}


export { performRedirect, loadingMessage, successMessage, errorMessage }