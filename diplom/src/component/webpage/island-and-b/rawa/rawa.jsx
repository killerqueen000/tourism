import React from "react";
import "./rawa.css";
import ScrollUpButton from "../../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../../button/ScrollUpButtonCs";
import Footer from "../../../footer/footer";
import NavBarArticle from "../../../nav-bar-article/navBarArticle";
import Headerr from "../../../header/header";

const Rawa = () => {
  const NavbarTemp = [
    {
      href: "#Rawa",
      content: "Rawa Island Location",
    },
    {
      href: "#Best",
      content: "Best Time to Visit",
    },
    {
      href: "#Weather",
      content: "Rawa Island Weather",
    },
    {
      href: "#How",
      content: "How to Get There",
    },
  ];

  return (
    <div className="rawa-container">
      <div className="rawaHeader">
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

      <div className="rawa-container">
        <div className="rawa-video">
          <div className="video-overlay">
            <h2>PULAU RAWA</h2>
            <hr
              style={{
                width: "30%",
                border: "none",
                borderTop: "3px solid",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <video src={`${import.meta.env.BASE_URL}assets/rawa/pulau rawa.mp4`} loop muted autoPlay />
        </div>

        <div className="rawa-text-1">
          <h2>
            Known as the Maldives of Malaysia, the picturesque Rawa Island is a
            perfect destination to laze your stress away
          </h2>
        </div>

        <div className="rawa-article">
          <div className="rawa-side-bar" style={{ marginTop: "47px" }}>
            <div className="rawa-side-bar-summary">
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

            <div className="rawa-side-bar-content">
              {NavbarTemp.map((item) => (
                <NavBarArticle
                  key={item.href}
                  href={item.href}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="rawa-main-article">
            <h2 id="Rawa">Where Are the Rawa Island Located?</h2>
            <p>
              Located 16 km off the coast of Mersing, Johor, the peaceful and
              tranquil Rawa Island boasts white sandy beaches, clear waters and
              scenic views. Owned by the Sultan of Johor, the small island is
              surrounded by colourful coral reefs and offers a wide variety of
              exciting water activities and jungle trekking adventure in its
              lush tropical forest. 
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/rawa/rawa1.jpg`} alt="rawa-1" />
              <figcaption>Picture of Rawa Island Resort</figcaption>
            </figure>
            <h2 id="Best">Best Time to Visit Rawa Island in Johor</h2>
            <p>
              Rawa Island is at its best during the months between March and
              September. Temperature-wise, the average temperature throughout
              the year doesn’t vary much.
            </p>
            <p>
              Typical tropical climate prevails here with average daily
              temperature of 31°C. Refer to the chart below for a monthly
              breakdown of Rawa Island weather and what to take note of each
              month. You’ll find that you have to compromise between bad weather
              and how busy (and expensive) the island will be!
            </p>
            <h2 id="Weather">Rawa Island Weather</h2>
            <h3>Dry Season</h3>
            <p>
              Selecting the best time to visit Rawa Island is either between
              running the risk of rain during your holiday or dealing with the
              crowd that has come to enjoy the sunshine too!{" "}
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/rawa/rawa2.jpg`} alt="rawa-2" />
            </figure>
            <p>
              However, the beach will appear pretty empty because most people
              will be enjoying the water instead! The drier months are
              during March to September. And it is particularly hot towards June
              and July.
            </p>
            <h3>Rainy/Monsoon Season</h3>
            <p>
              Even though you are able to enjoy Rawa Island at any time of year,
              basically. There are a few months where you’ll find more instances
              of less-than-ideal weather.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/rawa/rawa3.jpg`} alt="rawa3" />
              <figcaption>Rainy season on Rawa Island</figcaption>
            </figure>
            <p>
              On the other hand, you do get to enjoy off-peak prices! The
              wettest months are between November to February. If you want to
              avoid the summer crowds, it’s better to go in the shoulder months
              like March and October instead.
            </p>
            <h2 id="How">How To Get There</h2>
            <p>
              Rawa Island is accessible via a 20-minute speedboat ride
              from Mersing, Johor.  
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Rawa;
