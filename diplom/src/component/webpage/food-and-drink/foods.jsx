import React from "react";
import "./foods.css";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import FoodButtonLayout from "../../button/food button/foodbuttonLayout";
import Footer from "../../footer/footer";
import Headerr from "../../header/header";
import "../../../animationStuff/animation.css";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const Foods = () => {
  const base = import.meta.env.BASE_URL;
  const { t } = useTranslation();
  return (
    <div className="Food-container">
      {" "}
      <div className="foodHeader">
        <Headerr
          backgroundImage={`${base}assets/food/foodh.png`}
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
      <div className="food-container-2">
        <div className="food-text-1">
          <LinearSlideSC duration={1} direction="bottom">
            <h2>{t("food.intro.taste")}</h2>
          </LinearSlideSC>

          <LinearSlideSC duration={1.1} direction="bottom">
            <p>
              {t("food.intro.p1")}
            </p>
          </LinearSlideSC>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}assets/food/foodbanner.jpg`}
          alt="foodbanner"
          style={{ width: "100vw", padding: "40px 0" }}
        />

        <div className="food-text-2">
          <p style={{ paddingBottom: "40px" }}>
           {t("food.intro.p2")}
          </p>
          <p>
            {t("food.intro.p3")}
          </p>
        </div>

        <FoodButtonLayout />
        <Footer />
      </div>
    </div>
  );
};

export default Foods;
