import React from "react";
import "./AButton.css";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";

const AButton = () => {
  return (
    <div className="accom-layout">
      <div className="accom-left-layout">
        <button>
          <img src={`${import.meta.env.BASE_URL}assets/accomm/rumahkayu.png`} alt="1" />
          <div className="accom-overlay"></div>
          <span>Kampung Style Stay</span>
        </button>
        <button>
          <img src={`${import.meta.env.BASE_URL}assets/accomm/blue.png`} alt="2" />
          <div className="accom-overlay"></div>
          <span>Historical Luxury Stay</span>
        </button>
      </div>
      <div className="accom-right-layout">
        <button className="accom-button-right">
          <img src={`${import.meta.env.BASE_URL}assets/accomm/glamping.png`} alt="3" />
          <div className="accom-overlay"></div>
          <span>Glamping</span>
        </button>
      </div>
    </div>
  );
};

export default AButton;
