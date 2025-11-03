import React from "react";
import "./semporna.css";
import ScrollUpButton from "../../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../../button/ScrollUpButtonCs";
import Footer from "../../../footer/footer";
import NavBarArticle from "../../../nav-bar-article/navBarArticle";
import Headerr from "../../../header/header";

const Semporna = () => {
  const NavbarTemp = [
    {
      href: "#Semporna",
      content: "Semporna Location",
    },
    {
      href: "#Best",
      content: "Best Time to Visit",
    },
    {
      href: "#Islands",
      content: "Islands Hoping",
    },
    {
      href: "#Sipadan",
      content: "Sipadan Island",
    },
    {
      href: "#Mabul",
      content: "Mabul Island",
    },
  ];
  return (
    <div className="semporna-container">
      {" "}
      <div className="sempornaHeader">
        <Headerr backgroundImage={""} style={{ backgroundSize: "100vw" }} />
      </div>
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="semporna-container-2">
        <div className="semporna-video">
          <div className="video-overlay">
            <div className="black-overlay"></div>
            <h2>SEMPORNA</h2>
            <hr
              style={{
                width: "30%",
                border: "none",
                borderTop: "3px solid",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <video src={`${import.meta.env.BASE_URL}assets/semporna/semporna.mp4`} loop muted autoPlay />
        </div>

        <div className="semporna-text-1">
          <h2>
            Escape to Paradise : Malaysian Top Beaches and Island Retreats
          </h2>
        </div>

        <div className="semporna-article">
          <div className="semporna-side-bar" style={{ marginTop: "47px" }}>
            <div className="semporna-side-bar-summary">
              <p style={{ margin: "0", paddingTop: "15px" }}>Summary</p>
            </div>
            <hr
              style={{
                width: "78%",
                color: "#4E7777",
                border: "none",
                borderTop: "2px solid",
              }}
            />

            <div className="semporna-side-bar-content">
              {NavbarTemp.map((item) => (
                <NavBarArticle
                  key={item.href}
                  href={item.href}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="semporna-main-article">
            <h2 id="Semporna">Where Are the Semporna Islands Located?</h2>
            <p>
              The Semporna Islands are part of the Sabah Islands in the eastern
              region of Borneo, Malaysia. This tropical archipelago is part of
              the Coral Triangle, home to some of the richest marine
              biodiversity in the world. Known for its diving mecca, Sipadan
              Island, the Sabah Islands in Borneo offer an unforgettable
              experience for divers.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/sem1.jpg`} alt="semporna1.img" />
              <figcaption>Small jetty on one of Semporna Island</figcaption>
            </figure>
            <h2 id="Best">Best Time to Visit Semporna Islandsin Sabah</h2>
            <p>
              The Sabah Islands experience tropical weather year-round, but the
              best time to visit is during the dry season, which runs from April
              to October. During these months, the waters are rather calm, the
              skies are mostly clear, and the visibility for snorkeling and
              diving is at its best. Of course, you can catch a rainy day too,
              just like I did at the beginning of September. For divers, this is
              prime season as well. If you visit between November and March,
              expect monsoon rains and choppier waters, which can make
              activities less enjoyable and harder to plan.
            </p>
            <h2 id="Islands">Islands Hoping</h2>
            <p>
              Island hopping is a popular activity in Semporna, and most resorts
              (like Arcadia Beach Resort) offer all-inclusive packages that
              include meals, transfers, and island-hopping tours.
            </p>
            <h3 id="Sipadan">Sipadan Island</h3>
            <p>
              Sipadan, a pristine oceanic island, is famous for its stunning
              coral walls, vibrant marine life, along with frequent sightings of
              turtles, barracudas and reef sharks. It is consistently ranked
              among the top dive sites globally
            </p>
            <p>
              The Sipadan Island Park manages Malaysia's only oceanic island,
              which rises 600 metres above the seabed. It was naturally formed
              by corals growing atop a volcanic cone. It is located in the
              Celebes Sea off the east coast of Malaysian Borneo, between
              Indonesia and the Philippines, and is home to one of the world's
              most diverse marine environments.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/Sipadan-002.png`} alt="turtle" />
              <figcaption>Turtle near the Sipadan Island Shore's</figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/Sipadan-003.png`} alt="coral reaf" />
              <figcaption>Coral reaf at the Sipadan Island</figcaption>
              <img
                src={`${import.meta.env.BASE_URL}assets/semporna/Sipadan-001.jpg`}
                alt="People snorkeeling at the Simpadan Island"
              />
            </figure>
            <h3 id="Mabul">Mabul Island</h3>
            <p>
              Located only a short boat ride from Sipadan, provides a more
              relaxed vibe as well as excellent diving and snorkelling
              options. Mabul is known for its muck diving, which allows visitors
              to see unusual macro marine life such as seahorses, nudibranchs
              also pygmy seahorses, as well as gorgeous sandy beaches within a
              laid-back atmosphere.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/Mabul-Island-4.jpg`} alt="Mabul2" />
              <figcaption>Coral reaf at Mabul Island</figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/Mabul-Island-3.jpeg`} alt="Mabul3" />
              <figcaption>Homestay on the Mabul Island seashore</figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/semporna/Mabul-Island-1.jpg`} alt="Mabul1" />
              <figcaption>Kayak-ing activity</figcaption>
            </figure>
            <p>
              Stay at the picturesque water bungalows at Mabul such as
              the Sipadan-Mabul Resort (SMART), Sipadan-Kapalai Dive Resort or
              at the Borneo Divers Mabul Resort, immersing yourself in various
              activities including kayaking, visiting the friendly Bajau
              Laut (Sea Gypsies) settlement, watching stunning sunrises plus
              sunsets or island-hopping to neighbouring islands like Bum
              Bum Island and Pom Pom Island.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Semporna;
