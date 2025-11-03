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

const Kl = () => {
  const base = import.meta.env.BASE_URL; 
  const klSlide = data.Kl.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const klMarker = markerData.Kl;
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
        <video src={`${import.meta.env.BASE_URL}assets/state/kl/kl.mp4`} autoPlay loop muted></video>
      </div>
      <h2>
        Wilaya Persekutuan Kuala Lumpur <br />
        The Garden City of Lights
      </h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={klSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Kuala Lumpur is the capital city of Malaysia and one of Asia’s most
          colourful and vibrant cities. KL, as it is popularly known, is a
          heaven for shoppers and a hive of exciting tourism activities and
          events, besides banking and finance, manufacturing, and
          telecommunications. It offers a fusion of old and new, where numerous
          pre-war heritage buildings that reflect its rich past stand amongst
          the many modern, state-of-the-art skyscrapers.
        </p>
        <p>
          The origin of Kuala Lumpur dates back to the 1850s when tin
          prospectors established a trading post there, as an abundance of tin
          was found at the estuary of the Klang and Gombak Rivers, known as
          Ampang today. From mere marshlands, Kuala Lumpur developed to become
          one of the most well-known cities in the world. On 1 February 1974,
          Kuala Lumpur was ceded to the Federal Government by the state of
          Selangor and established as a Federal Territory. Not only it became
          the political capital of Malaysia, but also the economic and cultural
          centre of the country.
        </p>
        <p>
          In the evening, Kuala Lumpur turns into a garden city of lights,
          offering dazzling nightlife and entertainment. Full of character and
          life, this colourful city certainly boasts a kaleidoscope of
          fascinating sights and sounds for its visitors to enjoy and
          experience.
        </p>
        <p>
          <a
            href="https://visitkualalumpur.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Kuala Lumpur website
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

            <MapView position={[3.13, 101.68]} zoom={11} markers={klMarker} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kl;
