import React from "react";
import Footer from "../../footer/footer";
import Headerr from "../../header/header";
import "./island.css";
import IslandButtonLayout from "../../button/island/islandbuttonLayout";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";
import { useTranslation } from "react-i18next";
import "../../../i18n"

const Island = () => {
  const {t} = useTranslation();
  const base = import.meta.env.BASE_URL;
  return (
    <div className="island-container">
      <Headerr
          backgroundImage={`${base}assets/header/beach-header.svg`}
          style={{ backgroundSize: "100vw" }}
        />
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="islanddHeader">
        <div className="island-container-2">
          <div className="island-text-1">
            <LinearSlideSC duration={1} direction="bottom">
              <h2>{t("island.intro.h2")}</h2>
            </LinearSlideSC>
            <LinearSlideSC duration={1.1} direction="bottom">
              <p>
                {t("island.intro.p")}
              </p>
            </LinearSlideSC>
          </div>
          <div className="island-layout-button">
            <IslandButtonLayout />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Island;
