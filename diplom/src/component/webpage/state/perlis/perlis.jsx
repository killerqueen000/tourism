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
import markerData from "../../../../data/region/mapviewState.json"

const Perlis = () => {
  const base = import.meta.env.BASE_URL;
  const perlisSlide = data.Perlis.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const perlisMarker = markerData.Perlis;

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
          src={`${import.meta.env.BASE_URL}assets/state/perlis/perlis.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>
        Perlis Indera Kayangan: Where golden fields strecth under endless blue
        skies, and every sunset whispers a story of peace and simplicity.
      </h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={perlisSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Perlis is the smallest state in Malaysia, covering an area of only 819
          square kilometres. It is located at the northwestern tip of Peninsular
          Malaysia. The capital city of Perlis and the seat of government is
          Kangar, which is surrounded by vast expanse of green paddy fields,
          while Arau is the state’s Royal Town.
        </p>
        <p>
          Perlis is the smallest state in Malaysia, covering an area of only 819
          square kilometres. It is located at the northwestern tip of Peninsular
          Malaysia. The capital city of Perlis and the seat of government is
          Kangar, which is surrounded by vast expanse of green paddy fields,
          while Arau is the state’s Royal Town.
        </p>
        <p>
          Other main towns in Perlis include Kuala Perlis and Padang Besar.
          Fishing is the main activity and industry in Kuala Perlis; hence, it
          is well-known for its fresh and delicious seafood, such as ikan bakar
          (barbecued fish). The Kuala Perlis Ferry Terminal is the gateway to
          the legendary Langkawi Island. Padang Besar is a bustling border town
          and the merging point for Thais and Malaysians. It is a shopping
          paradise as it boasts duty-free shops and shops that offer various
          goods, including clothes, shoes, bags and souvenirs.
        </p>
        <p>
          <a
            href="https://explore.perlis.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Perlis website
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
              position={[6.51, 100.21]}
              zoom={10.4}
              markers={perlisMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perlis;
