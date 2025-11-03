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

const Melaka = () => {
  const base = import.meta.env.BASE_URL;
  const melakaSlide = data.Melaka.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const melakaMarker = markerData.Melaka;
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
          src={`${import.meta.env.BASE_URL}assets/state/melaka/melaka.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>Melaka The Historical City of Malaysia</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={melakaSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          On 15 April 1989, Melaka (formerly Malacca) was proclaimed as the
          “Historical City of Malaysia”. The state is undoubtedly steeped in
          history and legend that spans over 500 years. Declared as a UNESCO
          World Heritage Site in July 2008, Melaka is brimming with heritage
          buildings, artefacts, ancient landmarks and colonial structures.
          Melaka is situated next to the Strait of Melaka and it is only 148
          kilometres away from the country’s capital, Kuala Lumpur.
        </p>
        <p>
          Its origin can be traced back to the year 1400, when Parameswara, a
          Hindu prince from Sumatra, Indonesia, was fleeing his country when he
          chanced upon a shady tree along the coast of Peninsular Malaysia. As
          he took a rest, he found that he liked the place and decided to make
          it his new home. He named the place, Malacca, after the tree. Melaka
          came under the rule of the Portuguese, Dutch and British before it
          became part of the Federation of Malaya in 1957. The richness of its
          heritage and culture is captured in every street and building in the
          state.
        </p>
        <p>
          With its colourful past, Melaka quickly became one of the top tourist
          destinations in Malaysia. Over the years, it has also garnered various
          international accolades, and listed by several publications, including
          Forbes and Lonely Planet, as one of Asia’s and the world’s top travel
          destinations. Besides that, Time magazine has also placed Melaka as
          one of the best places to live and retire.
        </p>
        <p>
          <a
            href="https://www.melaka-tourism.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Melaka website
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
              position={[2.18, 102.25]}
              zoom={12}
              markers={melakaMarker}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Melaka;
