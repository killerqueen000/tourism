import React from "react";
import "./nature.css";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import Headerr from "../../header/header";
import NatureButton from "./natureButton";
import Footer from "../../footer/footer";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";

const Nature = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="nature-container">
      <div className="natureHeader">
        <Headerr
          backgroundImage={`${base}assets/header/hneature.png`}
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

      <div className="nature-container-2">
        <div className="nature-text-1">
          <LinearSlideSC duration={1} direction="bottom">
            <h2> Step into Malaysia’s natural paradise</h2>
          </LinearSlideSC>

          <LinearSlideSC duration={1} direction="bottom">
            <p>Let nature embrace your soul.</p>
          </LinearSlideSC>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}assets/nature/ts-1.jpg`}
          alt="tasik-cermin"
          style={{ width: "100vw" }}
        />
        <div className="nature-text-2">
          <p>
            Wander through the fragrant fields of Cameron Highland Lavender
            Farm, uncover the golden beauty of Ladang Kenaf, explore the
            mystical depths of Gua Tempurung, and stand in awe of the majestic
            Mount Kinabalu. In Malaysia, nature’s wonders are waiting to fill
            your heart with unforgettable moments
          </p>
        </div>
        <NatureButton showOverlay={false} />
        <Footer />
      </div>
    </div>
  );
};

export default Nature;
