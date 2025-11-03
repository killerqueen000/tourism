import React from "react";
import "./familyButton.css";

const FamilyButtons = ({ image, altext, desc }) => {
  return (
    <button className="Family-button">
      <div className="f-enlarge">
        <img src={image} alt={altext} className="family-img" />
      </div>
      <div className="overlayf"></div>
      <div className="family-txt">
        <h3>{desc}</h3>
      </div>
    </button>
  );
};

export default FamilyButtons;
