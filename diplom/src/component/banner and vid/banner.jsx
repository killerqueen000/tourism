import React from "react";
import "./banner.css";
import Dokidoki from "../../animationStuff/dokidoki";
import { useTranslation } from "react-i18next";
import "../../i18n"

const Banner = ({openNewsletter}) => {
  const {t} = useTranslation();
  return (
    <div className="sign-up">
      <div className="sign-up-img">
        <img src={`${import.meta.env.BASE_URL}assets/banner/planning.png`} alt="banner-sign-up" />
      </div>


      <div className="sign-up-overlay">
        <img src={`${import.meta.env.BASE_URL}assets/h2p.png`} alt="h2" />
        <Dokidoki>
        <button className="button" onClick={openNewsletter}> {t("subscribe-button.sub")}</button>
        </Dokidoki>
      </div>


    </div>
  );
};

export default Banner;
