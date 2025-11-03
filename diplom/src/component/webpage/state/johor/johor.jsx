import React, { useState } from "react";
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
import SkeletonBox from "../../../../SkeletonBox";

const Johor = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const base = import.meta.env.BASE_URL;

  const johorSlide = data.Johor.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));

  const johorMarker = markerData.Johor;

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

      <div className="perlis-vid" style={{ position: "relative" }}>
        {!isLoaded && (
          <SkeletonBox
            width="100%"
            height="500px"
            borderRadius="0"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
          />
        )}
        <video
          src={`${import.meta.env.BASE_URL}assets/state/johor/johor.mp4`}
          autoPlay
          loop
          muted
          onLoadedData={() => setIsLoaded(true)}
          style={{
            height: "500px",
            width: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "0",
          }}
        />
      </div>

      <h2>Johor The Southern Gateway to Malaysia</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={johorSlide} interval={7000} />
      </div>

      <div className="perlis-text">
        <p>
          The state of Johor is situated at the southernmost point of Peninsular
          Malaysia; hence, it is also known as the Southern Gateway to Malaysia.
          Johor is surrounded by the South China Sea on its east and the Straits
          of Melaka on the west, making it the only state that has both east and
          west coasts. And on the south, the Straits of Johor (Selat Tebrau)
          separates Johor from Singapore. It’s state capital is Johor Bahru.
        </p>
        <p>
          Johor was founded in the early 16th century by the son of Sultan
          Mahmud Shah, the last Sultan of Melaka. At its peak, the Johor Empire
          extended its reign to the Riau Archipelago. From 1886 to 1895, Johor
          was under the reign of Sultan Abu Bakar, who was fondly remembered as
          the “Father of Modern Johor”.
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
              position={[1.4799, 103.7643]}
              zoom={8}
              markers={johorMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Johor;
