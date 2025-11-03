import React from "react";
import "./family.css";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import Headerr from "../../header/header";
import FamilyButtonLayout from "../../button/family/familyButtonLayout";
import Footer from "../../footer/footer";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";

const Family = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="family-container">
      {" "}
      <div className="familyHeader">
        <Headerr
          backgroundImage={`${base}assets/family/headerfamily.png`}
          style={{ backgroundSize: "100vw" }}
        />
      </div>
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="family-container-2">
        <div className="family-text-1">
          <LinearSlideSC duration={1} direction="bottom">
            {" "}
            <h2>
               Create Unforgettable Memories Together with Your Loved Ones
            </h2>
          </LinearSlideSC>

          <LinearSlideSC duration={1} direction="bottom">
            <p>
              Create unforgettable memories together as you explore Malaysia’s
              vibrant culture, stunning landscapes, and exciting adventures –
              where every moment is a joy for all ages
            </p>
          </LinearSlideSC>
        </div>
        <FamilyButtonLayout />
        <Footer />
      </div>
    </div>
  );
};

export default Family;
