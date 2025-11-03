import React from "react";
import "./langkawi.css";
import ScrollUpButton from "../../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../../button/ScrollUpButtonCs";
import Footer from "../../../footer/footer";
import NavBarArticle from "../../../nav-bar-article/navBarArticle";
import Headerr from "../../../header/header";
import { useTranslation } from "react-i18next";
import "../../../../i18n"

const Langkawi = () => {
  const { t } = useTranslation();
  const NavbarTemp = [
    {
      href: "#Langkawi",
      content: t("island.langkawi.navbar.content1"),
    },
    {
      href: "#Best",
      content: t("island.langkawi.navbar.content2"),
    },
    {
      href: "#How",
      content: t("island.langkawi.navbar.content3"),
    },
  ];

  return (
    <div className="langkawi-container">
      <div className="langkawiHeader">
        <Headerr backgroundImage={""} style={{ backgroundSize: "100vw" }} />
      </div>
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>

      <div className="langkawi-container">
        <div className="langkawi-video">
          <div className="video-overlay">
        <h2> {t("island.langkawi.content.h2")}</h2>
            <hr
              style={{
                width: "30%",
                border: "none",
                borderTop: "3px solid",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <video src={`${import.meta.env.BASE_URL}assets/langkawi/langkawi.mp4`} loop muted autoPlay />
        </div>

        <div className="langkawi-text-1">
          <h2>
           {t("island.langkawi.content.h21")}
          </h2>
        </div>

        <div className="langkawi-article">
          <div className="langkawi-side-bar" style={{ marginTop: "47px" }}>
            <div className="langkawi-side-bar-summary">
              <p style={{ margin: "0", paddingTop: "15px" }}>{t("island.langkawi.content.summary")}</p>
            </div>
            <hr
              style={{
                width: "78%",
                color: "#4E7777",
                border: "none",
                borderTop: "2px solid",
              }}
            />

            <div className="langkawi-side-bar-content">
              {NavbarTemp.map((item) => (
                <NavBarArticle
                  key={item.href}
                  href={item.href}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="langkawi-main-article">
            <h2 id="Langkawi">{t("island.langkawi.content.h22")}</h2>
            <p>
              {t("island.langkawi.content.p1")}
            </p>
            <p>
              {t("island.langkawi.content.p2")}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/langkawi1.jpg`} alt="langkawi-1" />
              <figcaption>{t("island.langkawi.content.fig1")}</figcaption>
            </figure>
            <h2 id="Best">{t("island.langkawi.content.h222")}</h2>
            <p>
             {t("island.langkawi.content.p3")}
            </p>
            <h3>{t("island.langkawi.content.h23")}</h3>
            <p>
              {t("island.langkawi.content.p4")}
            </p>
            <p>
              {t("island.langkawi.content.p5")}
            </p>
            <p>
              {t("island.langkawi.content.p5")}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/langkawi2.jpg`} alt="langkawi2" />
              <figcaption>
                {t("island.langkawi.content.fig2")}
              </figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/langkawi3.jpg`} alt="langkawi3" />
              <figcaption>{t("island.langkawi.content.fig3")}</figcaption>
            </figure>
            <h2 id="How">{t("island.langkawi.content.h24")}</h2>
            <p>
              {t("island.langkawi.content.p6")}
            </p>
            <h3>{t("island.langkawi.content.h31")}</h3>
            <p>
              {t("island.langkawi.content.p7")}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/ets.jpg`} alt="ets.jpg" />
              <figcaption>
                {t("island.langkawi.content.fig4")}
              </figcaption>
            </figure>
            <h3>{t("island.langkawi.content.h32")}</h3>
            <p>
              {t("island.langkawi.content.p8")}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/ferry1.webp`} alt="ferry1" />
              <figcaption>
                {t("island.langkawi.content.fig5")}
              </figcaption>

              <img src={`${import.meta.env.BASE_URL}assets/langkawi/ferry2.png`} alt="ferry2" />
              <figcaption>{t("island.langkawi.content.fig6")}</figcaption>
            </figure>
            <p>
             {t("island.langkawi.content.p9")}
            </p>
            <h3>{t("island.langkawi.content.h33")}</h3>
            <p>
              {t("island.langkawi.content.p10")}
              <figure>
                <img src={`${import.meta.env.BASE_URL}assets/langkawi/bus.jpg`} alt="bus" />
                <figcaption>
                  {t("island.langkawi.content.fig7")}
                </figcaption>
              </figure>
            </p>
            <h3>{t("island.langkawi.content.h34")}</h3>
            <p>
              {t("island.langkawi.content.p11")}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/flight1.jpg`} alt="flight1" />
              <figcaption>
                {t("island.langkawi.content.fig8")}
              </figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/langkawi/fligh2.jpg`} alt="flight2" />
              <figcaption>{t("island.langkawi.content.fig9")}</figcaption>
            </figure>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Langkawi;
