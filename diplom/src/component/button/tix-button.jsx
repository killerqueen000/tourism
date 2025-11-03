import React, { useState } from "react";
import "./button-circle-salmon.css"; 
import { Link } from "react-router-dom";

const TixButton = () => {

    return(
        <Link to="/postcard">
        <button className = "circle-cont"
        style = {{width:"10vw", height: "10vw"}}>
            <img src={`${import.meta.env.BASE_URL}assets/button/tix.png`} className = "thumbnail" /> 
        </button>
        </Link>
    );
};

export default TixButton;