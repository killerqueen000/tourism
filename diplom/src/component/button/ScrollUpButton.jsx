import React from "react";
import "./ScrollUpButton.css";

const ScrollUpButton = ({ElementId}) => {
  return (
      <button className="scroll-up-button" onClick={() => {
       window.scrollTo({top: 0, behavior: "smooth"})

      }}
      >
        <img src={`${import.meta.env.BASE_URL}assets/button/upArrow.png`} alt="scroll up" />
      </button>
  );
};

export default ScrollUpButton;
