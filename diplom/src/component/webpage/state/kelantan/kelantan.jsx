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

const Kelantan = () => {
  const base = import.meta.env.BASE_URL;
  const kelantanSlide = data.Kelantan.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const kelantanMarker = markerData.Kelantan;
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
          src={`${import.meta.env.BASE_URL}assets/state/kelantan/kelantan.mp4`}
          autoPlay
          loop
          muted
          
        ></video>
      </div>
      <h2>Kelantan The Cradle of Malay Culture</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={kelantanSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Kelantan is the state to visit if you want to experience a stronghold
          of traditional Malay culture. Located in the northeastern corner of
          Peninsular Malaysia, Kelantan occupies an area of 17,100 square
          kilometres. Its capital city is Kota Bharu, and other main towns
          include Pasir Mas, Tumpat, Pasir Puteh, Bachok and Gua Musang.
        </p>
        <p>
          Historical records show that early Kelantan had links with the Funan
          Kingdom on the Mekong River, the Khmer Empire, Majapahit, Siam and
          Srivijaya. In the 18th century, the provinces came under an
          aristocratic warlord of Patani origin, Long Yunus. His descendants
          make up the present royal family. After World War II, Kelantan came
          under the protection of British and became part of the Federation of
          Malaya in February 1948. On 31 August 1957, it achieved independence,
          along with other states.
        </p>
        <p>
          Kelantan is a serene place to lay back and relax as the state is made
          up of mostly rustic fishing villages, lush green paddy fields, and
          palm-fringed beaches. Deemed the “Cradle of Malay Culture”, Kelantan
          strives to keep alive age-old Malay customs and traditions. Every
          year, many visitors visit the state to witness its kite flying and top
          spinning competitions. It is also known for its highly skilled
          artisans who produce some of the most beautiful silverware, songket,
          batik and kites.
        </p>
        <p>
          <a
            href="https://kelantanattractions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Kelantan website
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
              position={[5.11, 101.88]}
              zoom={8}
              markers={kelantanMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kelantan;
