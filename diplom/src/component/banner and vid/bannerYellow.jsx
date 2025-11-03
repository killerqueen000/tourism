import React from "react";
import "./bannerYellow.css";
import LinearSlideSC from "../../animationStuff/linearSlideSC";

const BannerYellow = ({
  imageSrc,
  altext,
  header,
  par,
  flexDirection = "row",
}) => {

  return (
    <div className="container-yellow">
      <div className="flag-thumbnail" style={{ flexDirection: flexDirection }}>
        <LinearSlideSC
          duration={1.4}
          direction={flexDirection === "row" ? "left" : "right"}
        >
          <div
            className="slide-content"
            style={{
              display: "flex",
              flexDirection: flexDirection,
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img src={imageSrc} alt={altext} />
            <div className="text-1">
              <h1>{header}</h1>
              <p>{par}</p>
            </div>
          </div>
        </LinearSlideSC>
      </div>
    </div>
  );
};

export default BannerYellow;
