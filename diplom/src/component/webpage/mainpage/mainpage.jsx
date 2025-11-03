import React from "react";
import HeaderMain from "../../header/headermain";
import Carousel1 from "../../carousel/carouselmp1";
import CalendarButton from "../../button/calendar-button copy";
import AccomButton from "../../button/accom-button";
import TixButton from "../../button/tix-button";
import MapRoute from "../../interactiveMap/interactivemapRoute";
import Banner from "../../banner and vid/banner";
import SquareButtonSection from "../../button/SquareButtonSection";
import Carousel2 from "../../carousel/carouselmp2";
import GridSns from "../../button/gridsns";
import ShortVidLayout from "../../banner and vid/shortVidLayout";
import Footer from "../../footer/footer";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import BannerYellowMainPage from "../../banner and vid/bannerYellowMainPage";
import LinearSlideSC from "../../../animationStuff/linearSlideSC";
import ButtonIg2Layout from "../../button/ButtonIg2Layout";
import "./mainpage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainPage = ({ openCalendar, openNewsletter }) => {
  const { t } = useTranslation();
  return (
    <div className="mainpage-container">
      <HeaderMain />
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>

      <div className="carousel-1">
        <Carousel1 />
      </div>
      <div className="first-button">
        <div className="button1">
          <span style={{ fontFamily: "Montserrat" }}>{t('main.calendar')}</span>
          <CalendarButton openCalendar={openCalendar} />
        </div>
        <div className="button2">
          <span style={{ fontFamily: "Montserrat" }}>{t('main.postcard')}</span>
          <TixButton />
        </div>
        <div className="button3">
          <span style={{ fontFamily: "Montserrat" }}>{t('main.accommodation')}</span>
          <Link to="/accom">
            <AccomButton />
          </Link>
        </div>
      </div>
      <div>
        <Banner openNewsletter={openNewsletter} />
      </div>
      <div className="text1" style={{ margin: "90px 0" }}>
        <LinearSlideSC duration={1.1} direction="bottom">
          <h1>{t('main.discover_title')}</h1>
        </LinearSlideSC>

        <LinearSlideSC duration={1.2} direction="bottom">
          <p>{t('main.discover_text')}</p>
        </LinearSlideSC>
      </div>
      <div className="map" style={{ marginBottom: "70px" }}>
        <MapRoute />
      </div>
      <div style={{ margin: "70px 0" }}>
        <BannerYellowMainPage />
      </div>
      <div>
        <SquareButtonSection />
      </div>
      <div className="Deal-package">
        <LinearSlideSC duration={1.1} direction="bottom">
          <h2>{t('main.deals_title')}</h2>
        </LinearSlideSC>
        <div className="line"></div>
        <LinearSlideSC duration={1.1} direction="bottom">
          <p>
           {t('main.deals_text')}
          </p>
        </LinearSlideSC>
      </div>
      <div className="carousel-2">
        <Carousel2 />
      </div>
      <div className="text-2">
        <LinearSlideSC duration={1.1} direction="bottom">
          <h2>{t('main.social_title')}</h2>
        </LinearSlideSC>

        <LinearSlideSC duration={1.2} direction="bottom">
          <p>
            {t('main.social_text')}
          </p>
        </LinearSlideSC>
        <div
          className="sns"
          style={{
            margin: "50px 0",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
          }}
        >
          <GridSns />
        </div>
      </div>
      <div>
        <ShortVidLayout />
      </div>
      <div>
        <ButtonIg2Layout />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
