import React from "react";
import Headerr from "../../header/header";
import Footer from "../../footer/footer";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import "./postcard.css";
import PostcardLandscape from "./postcardLandscape";

const Postcard = () => {
  const LandscapeP = [
    {
      Img: "/assets/postcard/landscape/1.png",
      hreff: "",
      altText: "landscape image 1",
    },
    {
      Img: "/assets/postcard/landscape/2.png",
      hreff: "",
      altText: "landscape image 2",
    },
    {
      Img: "/assets/postcard/landscape/3.png",
      hreff: "",
      altText: "landscape image 3",
    },
    {
      Img: "/assets/postcard/landscape/4.png",
      hreff: "",
      altText: "landscape image 4",
    },
    {
      Img: "/assets/postcard/landscape/5.png",
      hreff: "",
      altText: "landscape image 5",
    },
    {
      Img: "/assets/postcard/landscape/6.png",
      hreff: "",
      altText: "landscape image 6",
    },
    {
      Img: "/assets/postcard/landscape/7.png",
      hreff: "",
      altText: "landscape image 7",
    },
    {
      Img: "/assets/postcard/landscape/8.png",
      hreff: "",
      altText: "landscape image 8",
    },
    {
      Img: "/assets/postcard/landscape/9.png",
      hreff: "",
      altText: "landscape image 9",
    },
    {
      Img: "/assets/postcard/landscape/10.png",
      hreff: "",
      altText: "landscape image 10",
    },
  ];

  const PotraitP = [
    {
      Img: "/assets/postcard/potrait/p1.png",
      hreff: "",
      altText: "potrait image 1",
    },
    {
      Img: "/assets/postcard/potrait/p2.png",
      hreff: "",
      altText: "potrait image 2",
    },
    {
      Img: "/assets/postcard/potrait/p3.png",
      hreff: "",
      altText: "potrait image 3",
    },
    {
      Img: "/assets/postcard/potrait/p4.png",
      hreff: "",
      altText: "potrait image 4",
    },
    {
      Img: "/assets/postcard/potrait/p5.png",
      hreff: "",
      altText: "potrait image 5",
    },
  ];
  return (
    <div className="postcard-container">
      <div className="scroll-button-cs">
        <ScrollUpButtonCs />
      </div>

      <div className="scroll-up-button-container">
        <ScrollUpButton />
      </div>

      <div className="postcardHeader">
        <Headerr backgroundImage={""} style={{ backgroundSize: "100vw" }} />
      </div>
      <div style={{ paddingTop: "190px", backgroundColor: "#8A3225" }}></div>

      <div className="postcard-background">
        <div className="postcard-text-1">
          <h2>Chose your own personalized greetings from Malaysia!</h2>
        </div>
        <div className="postcard-button-img-wrap">
          <div className="postcard-button">
            <a href="#Choose">
              <button>BROWSE</button>
            </a>
          </div>
          <div style={{ flex: "2" }}></div>
          <img src={`${import.meta.env.BASE_URL}assets/postcard/pic.png`} alt="postcard img" />
        </div>
      </div>

      <div className="postcard-container-2">
        <div className="postcard-choose-design">
          <div id="Choose" className="choose-design">
            <div className="postcard-images">
              <a href="#Landscape">
                <img src={`${import.meta.env.BASE_URL}assets/postcard/11.png`} alt="postcard1" />
              </a>
              <a href="#Potrait">
                <img src={`${import.meta.env.BASE_URL}assets/postcard/6.png`} alt="postcard2" />
              </a>
            </div>
          </div>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <h2
              style={{
                fontFamily: "Montserrat Alternates",
                letterSpacing: "5px",
                color: "black",
                fontSize: "40px",
              }}
            >
              Choose your desire design
            </h2>
          </div>
        </div>

        <div
          id="Landscape"
          style={{ width: "80vw", margin: "auto", paddingTop: "80px" }}
        >
          <div className="landscape-grid">
            {LandscapeP.map((item) => (
              <PostcardLandscape
                key={item.altText}
                Img={item.Img}
                hreff={item.hreff}
                altText={item.altText}
              />
            ))}
          </div>
        </div>

        <div
          id="Potrait"
          style={{ width: "80vw", margin: "auto", paddingTop: "80px" }}
        >
          <div className="landscape-grid">
            {PotraitP.map((item) => (
              <PostcardLandscape
                key={item.altText}
                Img={item.Img}
                hreff={item.hreff}
                altText={item.altText}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Postcard;
