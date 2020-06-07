import React from "react";
import { Redirect, Link } from "react-router-dom";
import { isAuthenticated } from "../../auth/helper/auth-data";

const {user} = isAuthenticated();


const performRedirect = (didRedirect) => {
    if(didRedirect){
        if(user && user.role === 1){
            return <Redirect to="/farmer/dashboard" />
        }else{
            return <Redirect to="/" />
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
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const successMessage = (success) => {
    return (
        <div>
        <div
        style={{ display: success ? "" : "none"}}
        >
            New account is created successfully.
        <Link to="/signin">Login Here</Link>
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
            sorry, Try again.
        <Link to="/signup">Sign Up here</Link>
        </div>
        </div>
    )
}


export { performRedirect, loadingMessage, successMessage, errorMessage }