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

const Putrajaya = () => {
  const base = import.meta.env.BASE_URL;
  const putrajayaSlide = data.Putrajaya.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const putrajayaMarker = markerData.Putrajaya;
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
          src={`${import.meta.env.BASE_URL}assets/state/putrajaya/putrajaya.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>
        Wilayah Persekutuan Putrajaya <br />
        Garden City, Intelligent City
      </h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={putrajayaSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Putrajaya is Malaysia’s third Federal Territory and the country’s
          federal administrative centre, taking over the role from its capital
          city, Kuala Lumpur. Located some 30 kilometres away from Kuala Lumpur,
          Putrajaya was named in honour of Malaysia’s first Prime Minister,
          Tunku Abdul Rahman Putra Al-Haj
        </p>
        <p>
          Before becoming the federal administrative centre, Putrajaya was just
          rubber estates and oil palm plantations. It was formerly known as
          Prang Besar. After the government acquired 4,581 hectares of land from
          Selangor, construction of Putrajaya began in August 1995. The seat of
          the federal government was shifted to Putrajaya in 1999. With the
          establishment of Putrajaya, government offices previously scattered in
          Kuala Lumpur were systematically housed there as an efficient
          administrative hub.
        </p>
        <p>
          Planned as a garden city and intelligent city, Putrajaya has been
          constructed with detailed planning, innovative urban design, and great
          respect for the environment. About 38% of the city’s total land area
          is reserved for green spaces, where parks, lakes, botanical gardens
          and wetlands have been developed and they are open to the public. In
          addition, Putrajaya also boasts beautifully landscaped roads and
          parks, as well as modern buildings. The centrepiece of the city is a
          650-hectare man-made Putrajaya Lake.
        </p>
        <p>
          Putrajaya is also a part of the Malaysian government’s Multimedia
          Super Corridor (MSC) project. Cyberjaya, which is adjacent to
          Putrajaya and developed along with it, forms a key part of the MSC and
          aspires to be the Silicon Valley of Malaysia.
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
              position={[2.93, 101.70]}
              zoom={10.4}
              markers={putrajayaMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Putrajaya;
