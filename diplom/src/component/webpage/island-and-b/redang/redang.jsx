import React from "react";
import "./redang.css";
import ScrollUpButton from "../../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../../button/ScrollUpButtonCs";
import Footer from "../../../footer/footer";
import NavBarArticle from "../../../nav-bar-article/navBarArticle";
import Headerr from "../../../header/header";

const Redang = () => {
  const NavbarTemp1 = [
    {
      href: "#Redang",
      content: "Redang Island ",
    },
    {
      href: "#Best",
      content: "Best Time to Visit",
    },
    {
      href: "#How",
      content: "How to Get There",
    },
  ];

  return (
    <div className="redang-container">
      {" "}
      <div className="redangHeader">
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
      <div className="redang-container">
        <div className="redang-video">
          <div className="video-overlay">
            <h2>REDANG</h2>
            <hr
              style={{
                width: "30%",
                border: "none",
                borderTop: "3px solid",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <video src={`${import.meta.env.BASE_URL}assets/redang/redang.mp4`} loop muted autoPlay />
        </div>

        <div className="redang-text-1">
          <h2>
            Redang: Malaysia's Underwater Paradise, Where Adventure Meets
            Serenity
          </h2>
        </div>

        <div className="redang-article">
          <div className="redang-side-bar" style={{ marginTop: "47px" }}>
            <div className="redang-side-bar-summary">
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

            <div className="redang-side-bar-content">
              {NavbarTemp1.map((item) => (
                <NavBarArticle
                  key={item.href}
                  href={item.href}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="redang-main-article">
            <h2 id="Redang">Where Are the Redang Island Located?</h2>
            <p>
              Redang Island, located approximately 45 kilometers off the coast
              of Kuala Terengganu in Malaysia, is the largest of nine islands
              scattered across the South China Sea along the Terengganu coast.
              Renowned for its turquoise blue waters, Redang is a tropical
              paradise teeming with diverse marine life. The surrounding waters,
              gazetted as a Marine Park in 1985, protect the island’s rich
              marine ecosystem, which features stunning coral reefs,
              crystal-clear waters, and pristine white sandy beaches.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/redang/redang1.jpg`} alt="redang1.img" />
              <figcaption>Picture of Redang Island</figcaption>
            </figure>
            <h2 id="Best">Best Time to Visit Redang Islands in Johor</h2>
            <p>
              The best time to visit Redang Island is between March and October,
              when the weather is dry and the seas are calm, ensuring optimal
              conditions for snorkeling, scuba diving, and other water
              activities
            </p>
            <p>
              The island’s resorts typically close during the North-East monsoon
              season, which occurs from November to February. Visitors are
              advised to plan their trip during the non-monsoon months to fully
              enjoy all that the island has to offer.
            </p>
            <p>
              During the North-East monsoon season, the resorts on the
              island will be closed for a few months, normally between November
              and February; hence, the best time to visit Redang is between
              March and October.
            </p>
            <p>
              The island is a paradise for scuba diving, snorkelling and
              swimming. Other activities that can be enjoyed there include
              boating, canoeing and jungle trekking. Every dive site on the
              island offers something different to see and experience.
            </p>
            <p>
              Among the famous sites include Terumbu Kili, which has rocky
              seascape encrusted with both soft and hard corals at about 15
              metres, and slopes down to 20 metres at the sandy bottom. Big
              Mount offers divers a chance to observe macro
              lifeforms and possible encounters with the whale shark, while Mini
              Mount has numerous cowries, spider shells and large aggregation of
              colourful Christmas tree worms carpeting coral blocks. It is also
              a famous site for night diving.
            </p>
            <figure>
              <img src={`${import.meta.env.BASE_URL}assets/redang/redang2.jpg`} alt="redang.img" />
              <figcaption>
                Picture of a man swimming at the shore of Redang Island
              </figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/redang/redang3.jpg`} alt="redang3.img" />
              <figcaption>Snorkelling with a school of fish</figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/redang/redang4.jpeg`} alt="redang" />
              <figcaption>Turtle swimming under the ocean</figcaption>
              <p>
                Tanjung Tokong is another site not to be missed.
                Large Napolean wrasse, parrotfish, jacks
                and unicornfish are among the common sights here,
                besides chromodoris nudibranchs and green staghorn corals. Other
                popular dive sites include Tunnel Point, Tanjung Cina Terjun and
                also the Marine Park Centre.  
              </p>
              <p>
                Redang also has two historic shipwrecks, namely the H.M.S.
                Prince of Wales and the H.M.S Repulse, which were sunk at the
                beginning of World War II, setting the stage for the Japanese
                occupation of Malaya
              </p>
              <h2 id="How">How to Get There</h2>
              <p>
                To reach Redang, travelers typically embark on a boat ride from
                Kuala Terengganu. Regular ferry services operate from the Merang
                Jetty or Shahbandar Jetty, offering convenient access to the
                island. The journey takes about 1 to 1.5 hours, depending on the
                departure point. For those traveling from further afield, Kuala
                Terengganu is accessible via domestic flights from major
                Malaysian cities such as Kuala Lumpur or Penang
              </p>
            </figure>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Redang;
