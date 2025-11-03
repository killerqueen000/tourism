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

const PulauPinang = () => {
  const base = import.meta.env.BASE_URL;
  const penangSlide = data.Penang.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const penangMarker = markerData.Penang;
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
          src={`${import.meta.env.BASE_URL}assets/state/penang/penang.mp4`}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h2>Pulau Pinang The Pearl of the Orient</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={penangSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Penang is undoubtedly one of the most popular tourist destinations in
          Malaysia. Located on the northwestern coast of Peninsular Malaysia,
          Penang consists of Penang Island (with George Town) and the mainland
          known as Seberang Perai. They are connected by two of the longest road
          bridges in the country, namely the Penang Bridge and the Sultan Abdul
          Halim Muadzam Shah Bridge, which is also the longest oversea bridge in
          Southeast Asia.
        </p>
        <p>
          In the late 18th century, Penang was under the reign of the Sultan of
          Kedah. At that time, Kedah was under the threat of being invaded by
          Siam. In return for British military protection, Francis Light
          persuaded the Sultan of Kedah to cede Penang to the British East India
          Company. On 11 August 1786 Francis Light officially took possession of
          the island and renamed it Prince of Wales Island, while the new
          settlement that grew from there was named George Town, in honour of
          King George III.
        </p>
        <p>
          Penang boasts colourful multicultural traditions and customs, art and
          culture, along with traditional villas, shophouses of bygone days and
          architectural heritage that bears the stamp of different foreign
          influences. In 2008, its capital city, George Town, was inscribed as a
          UNESCO World Heritage Site. Cultural and historical attractions aside,
          Penang is also a paradise for food lovers, especially street foods, as
          hawker stalls can be found almost anywhere on the island.
        </p>
        <p>
          <a
            href="https://mypenang.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Penang website
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
              position={[5.41, 100.33]}
              zoom={10.4}
              markers={penangMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PulauPinang;
