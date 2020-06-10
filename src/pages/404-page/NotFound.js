import React from "react";
import { Link } from "react-router-dom";
import "./notfound.style.css"

const NotFounnd = () => {
    return (
        <div className="notFoundPage">
            <h1>404 error, Page not found.</h1>
            <Link to="/">Shop Here.</Link>     
        </div>
    )
}

export default NotFounnd;