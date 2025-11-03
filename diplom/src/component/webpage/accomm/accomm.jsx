import React from "react";
import "./accomm.css";
import HeaderMain from "../../header/headermain";
import Footer from "../../footer/footer";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import AccommButton1 from "../../button/accomm/accommButton";
import BannerYellow from "../../banner and vid/bannerYellow";
import AButton from "../../button/accomm/AButton";

const Accomm = () => {
  const base = import.meta.env.BASE_URL;
  const BannerYellowAccomm = [
    {
      imageSrc: `${base}assets/accomm/icon.png`,
      altext: "icon.png",
      header: "Unique places to stay",
      par: "Stay like a local! Experience varieties of cultural in the unique houses in Malaysia! ",
      flexDirection: "row-reverse",
    },
  ];
  return (
    <div className="accomm-container">
      {" "}
      <HeaderMain />
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="accomm-banner">
        <img src={`${import.meta.env.BASE_URL}assets/accomm/accomm1.png`} alt="rumah-kampung" />
        <div className="accomm-text-1">
          <h1>Accommodation</h1>
          <p>Find accommodation for your stay in Malaysia</p>
        </div>
      </div>
      <div className="type-of-accomm">
        <h2>Type of Accommodation</h2>
        <div className="line"></div>
        <p>See options which are available for a goodnight sleep.</p>
      </div>
      <AccommButton1 />
      <div className="banner-yellow-accomm-1">
        {BannerYellowAccomm.map((item) => (
          <BannerYellow
            imageSrc={item.imageSrc}
            altext={item.altext}
            header={item.header}
            par={item.par}
            flexDirection={item.flexDirection}
          />
        ))}
      </div>
      <div style={{ padding: "50px" }}></div>
      <AButton />
      <Footer />
    </div>
  );
};

export default Accomm;
