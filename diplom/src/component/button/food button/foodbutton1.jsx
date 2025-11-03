import React from "react";
import "./foodbutton1.css";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";
import { useTranslation } from "react-i18next";
import "../../../i18n"

const FoodButton1 = ({
  img,
  alt,
  h2,
  p,
  backgroundcolour,
  flexdirection,
}) => {
  const containerStyle = {
    backgroundColor: backgroundcolour || "#6E5235",
    display: "flex",
    flexDirection: flexdirection || "row",
  };
  const {t, i18n} = useTranslation();

  return (
    <div style={containerStyle}>
      <LinearSlideSC duration={2.1} >
        <button className="food-button-container" style={containerStyle}>
          <div className="food-img" style={containerStyle}>
            <img src={img} alt={alt} />
          </div>
          <div className="button-desc">
            <h2 style={{ fontSize: i18n.language === "ru" ? "20px" : "25px" }}>{h2}</h2>
            <p style={{ fontSize: i18n.language === "ru" ? "20px" : "25px" }}>{p}</p>
          </div>
        </button>
      </LinearSlideSC>
    </div>
  );
};

export default FoodButton1;
