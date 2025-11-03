import React from "react";
import "./squarebutton.css";
import { Link } from "react-router-dom";

const SquareButton = ({imageSrc, altText,label, dest}) => {
  return (
    <Link to={dest}> 
        <button className="buttonsquare">
      <div className="img-container">
        <img src={imageSrc} alt={altText} />
        <div className="overlay"></div>
      </div>
      <span>{label}</span>
    </button>
    </Link>

  );
};

export default SquareButton;
