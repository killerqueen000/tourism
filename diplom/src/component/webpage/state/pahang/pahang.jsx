import React from "react";
import "./../stateTemp.css";
import HeaderMain from "../../../header/headermain";
import ScrollUpButton from "../../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../../button/ScrollUpButtonCs";
import Footer from "../../../footer/footer";
import MapView from "../../../map/map";
import CarouselRegion from "../../../carousel/carousellState";
import data from "../../../../data/region/carouselState.json";
import VacayAni from "../../../../animationStuff/vacayani";
import markerData from "../../../../data/region/mapviewState.json";

const Pahang = () => {
  const base = import.meta.env.BASE_URL;
  const pahangSlide = data.Pahang.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const pahangMarker = markerData.Pahang;
  return (
    <div className="perlis-container">
      <HeaderMain />
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="perlis-vid">
        <video
          src={`${import.meta.env.BASE_URL}assets/state/pahang/pahang.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>Pahang A State of Lush Highlands</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={pahangSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Pahang is the largest state in Peninsular Malaysia and is well-known
          for its natural attractions, including rainforests, mountains and
          beaches. It is home to some of the country’s most accessible outdoor
          action - National Park (Taman Negara), Tioman Island, and Mount Tahan
          (highest mountain in Peninsular Malaysia). Its capital, Kuantan, is a
          popular gateway to the east coast of Peninsular Malaysia.
        </p>
        <p>
          In the 15th century, Pahang became part of the Melaka Sultanate, where
          it prospered and was much sought-after by the Johor Sultanate, Aceh,
          the Portuguese and the Dutch. Pahang was eventually ruled by the Johor
          Sultanate for 200 years. When the Johor Sultanate gradually lost its
          control and influence, Bendahara Wan Ahmad proclaimed himself as the
          Sultan of Pahang. In 1888, he was forced to sign a treaty by the
          British, which brought the state under the control of a British
          Resident. Pahang became part of the Federation of Malaya in 1948, and
          in 1963, it joined the other states in the peninsular to form the
          Federation of Malaysia.
        </p>
        <p>
          Pahang’s rich biodiversity makes it a desirable destination for
          ecotourism, which contributes to the growth of its tourism industry.
        </p>
        <p>
          <a
            href="https://www.visitpahang.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Pahang website
          </a>{" "}
          today to discover the top tourist attractions in Perlis!
        </p>
      </div>

      <div className="perlis-content">
        <div className="perlis-text-map">
          <div className="perlis-map">
            <div className="perlis-ani">
              <VacayAni />
              <h1>Point of Interest</h1>
            </div>

            <MapView
              position={[3.97, 102.43]}
              zoom={8.2}
              markers={pahangMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pahang;
