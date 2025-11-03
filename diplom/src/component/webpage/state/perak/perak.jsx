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

const Perak = () => {
  const base = import.meta.env.BASE_URL;
  const perakSlide = data.Perak.map((slide) => ({
    ...slide,
    images: `${base}${slide.images.replace(/^\//, "")}`,
  }));
  const perakMarker = markerData.Perak;
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
        <video src={`${import.meta.env.BASE_URL}assets/state/perak/perak.mp4`} autoPlay loop muted></video>
      </div>
      <h2>Perak The Land of Grace</h2>
      <div className="perlis-carousel">
        <CarouselRegion slides={perakSlide} interval={7000} />
      </div>
      <div className="perlis-text">
        <p>
          Spanning an area of 20,976 square kilometres, Perak is located on the
          west coast of Peninsular Malaysia. Perak, which means silver in Malay,
          derived its name from the silvery tin ore. Its capital city, Ipoh, was
          historically known for its tin-mining activities. Other major towns
          include Kuala Kangsar, Taiping, Teluk Intan, Batu Gajah and Lumut.
        </p>
        <p>
          The current Perak Sultanate traces its origins to Sultan Muzaffar Shah
          I, the first sultan of Perak. He was the eldest son of Sultan Mahmud
          Shah, the last Sultan of Melaka. Rich tin deposit in Perak has always
          been the reason for outside threats to its sovereignty. In the 18th
          century, Perak faced threats from the Bugis and Siam. With the
          assistance of the British, Perak was saved from Siam domination in the
          1820s. In 1896, Perak, along with Selangor, Negeri Sembilan and
          Pahang, became a member of the Federated Malay States, established by
          the British government, until the Japanese Occupation.
        </p>
        <p>
          Perak boasts many natural attractions including limestone hills and
          caves, islands and tropical rainforest, as well as heritage buildings.
          It is also home to the Lenggong Valley, the country’s fourth UNESCO
          World Heritage Site, where the oldest skeleton in Peninsular Malaysia
          was found. In 2017, Lonely Planet ranked Perak ninth in its list of
          the world’s top 10 regions to visit, while Ipoh was named the sixth
          best destination to visit in Asia in 2016.
        </p>
        <p>
          <a
            href="https://www.tourismperakmalaysia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tourism Perak website
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
              position={[4.81, 100.8]}
              zoom={8}
              markers={perakMarker}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perak;
