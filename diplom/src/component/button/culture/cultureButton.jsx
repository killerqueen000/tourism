import React from "react";
import "./cultureButton.css";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";

const CultureButton = ({ image, altext, desc, flexdirection }) => {
  const cultureContainerStyle = {
    display: "flex",
    flexDirection: flexdirection,
  };
  return (
    <button className="culture-button" style={cultureContainerStyle}>
      <img src={image} alt={altext} className="background-img" />
      <div className="overlay"></div>
      <div className="txt" style={cultureContainerStyle}>
        <LinearSlideSC duration={1} direction={flexdirection === "row" ? "left" : "right"}>
          <h2>{desc}</h2>
        </LinearSlideSC>
      </div>
    </button>
  );
};

export default CultureButton;
