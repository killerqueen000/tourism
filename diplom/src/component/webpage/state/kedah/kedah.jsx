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

const Kedah = () => {
  const base = import.meta.env.BASE_URL;
  const kedahSlide = data.Kedah.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const kedahMarker = markerData.Kedah;
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
          src={`${import.meta.env.BASE_URL}assets/state/kedah/kedah.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>Kedah The Rice Bowl of Malaysia</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={kedahSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          With vast seas of paddy fields attracting visitors to the state, it is
          no surprise that Kedah is also known as the “Rice Bowl of Malaysia”.
          It is a rice depot, where more than half of the rice in the country is
          produced in this state. Kedah’s capital city is Alor Setar, the royal
          town.
        </p>
        <p>
          The history of Kedah and its royalty can be traced back to the 6th
          century with its origins in the Bujang Valley, where remnants of
          shrines were found at this archaeological site, which bear testimony
          to the existence of Hinduism and Buddhism in the state. Kedah
          flourished with trade at that time and the state was popular with
          Chinese and Indian traders. During the reign of the Sultans of Melaka,
          Islam flourished and gained a stronghold in Kedah. After the Second
          World War, the state joined the Federation of Malaya in 1948.
        </p>
        <p>
          Tourism has become a major income for the state as can be seen in the
          rapid development of the Langkawi group of islands as a major tourist
          attraction. In 2007, the Langkawi archipelago was declared as a UNESCO
          Global Geopark for its natural beauty and ecological harmony, as well
          as archaeological, geological and cultural significance.
        </p>
        <p>
          <a
            href="https://www.visitkedah.com.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Kedah website
          </a> {""}
          today to discover the top tourist attractions in Johor!
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
              position={[6.04, 100.52]}
              zoom={9}
              markers={kedahMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kedah;
