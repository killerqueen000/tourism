import React from "react";
import "./contact.css";
import Headerr from "../../header/header";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../footer/footer";
import MapView from "../../map/map";

const Contact = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="contact-container">
      <Headerr
        backgroundImage={`${base}/assets/batik.jpg`}
        style={{ backgroundSize: "100vw" }}
      />
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>

      <div style={{ padding: " 0 20px" }}>
        <div className="contact-us">
          <h1>Contact Us!</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="contact-content">
            <div className="contact-address">
              <FaRegBuilding />
              <p>
                9th Floor, No. 2, Tower 1, Jalan P5/6, Presint 5, <br /> 62200,
                Putrajaya, Malaysia
              </p>
            </div>
            <div className="contact-phone">
              <MdOutlinePhoneInTalk />
              <p>+603-8891 8000</p>
            </div>
            <div className="contact-email">
              <MdOutlineEmail />
              <p>enquiries@tourism.gov.my</p>
            </div>
          </div>
          <div className="contact-map">
            <MapView
              position={[2.9, 101.67]}
              zoom={13}
              markers={[
                {
                  position: [2.898448466224273, 101.66824772060336],
                  popupText: "Ministry Of Tourism, Arts & Culture",
                  image: "/assets/mapImg/motec.png",
                  address: "No. 2, Tower, 1, Jalan P5/6, Presint 5, 62200, Wilayah Persekutuan Putrajaya, Malaysia"
                },
              ]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
