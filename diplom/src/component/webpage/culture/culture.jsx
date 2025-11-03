import React from "react";
import "./culture.css";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import Headerr from "../../header/header";
import Footer from "../../footer/footer";
import CultureButtonLayout from "../../button/culture/cultureButtonLayout";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";

const Culture = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="culture-container">
      {" "}
      <div className="cultureHeader">
        <Headerr
          backgroundImage={`${base}assets/header/culture.png`}
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
      <div className="culture-container-2">
        <div className="culture-text-1">
          <LinearSlideSC direction="bottom" duration={1}>
            <h2>Discover the Diversity of Malaysia’s Cultures and Heritage</h2>
          </LinearSlideSC>

          <LinearSlideSC direction="bottom" duration={1.1}>
            <p>
              Be an explorer and experience the beauty of diversity in Malaysia
            </p>
          </LinearSlideSC>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}assets/culture/home_03.jpg`}
          alt="image dancing"
          style={{ width: "100vw" }}
        />
        <div className="culture-text-2">
          <p>
            The culture of Malaysia is diverse and a melange of influences from
            both the east and the west. With an eclectic population spanning
            various ethnic groups, Malaysia is a glorious melting pot of
            traditions and practices spanning generations. This, combined with
            western sensibilities, presents a unique juxtaposition that is a
            delight to experience. Dive into the unique culture of Malaysia with
            our comprehensive guide, and get started on the ultimate journey
            through Asia!
          </p>
        </div>

        <CultureButtonLayout />

        <Footer />
      </div>
    </div>
  );
};

export default Culture;
