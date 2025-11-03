import React, { useState } from "react";
import "./button-circle-salmon.css"; 

const AccomButton = () => {

    return(
        <button className = "circle-cont"
        style = {{width: "10vw", height: "10vw"}}>
            <img src={`${import.meta.env.BASE_URL}assets/button/home.png`} className = "thumbnail" /> 
        </button>
    );
};

export default AccomButton;