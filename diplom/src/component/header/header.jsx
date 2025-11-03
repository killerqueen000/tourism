import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  getTravelTips,
  getPlanTrip,
  trans
} from "../header/dropdownData";
import "./../dropdown-menu/dropdownMenu.css";
import DropDownMenu from "../dropdown-menu/dropdownMenu";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Headerr = ({ backgroundImage }) => {
    const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
className={`header ${scrolled ? "scrolled" : ""}`}
  style={{
    backgroundImage: scrolled ? "none" : `url(${backgroundImage})`,
  }}
    >
      <div className="logo-container">
        <img
          src={`${import.meta.env.BASE_URL}assets/header/mtswhite.png`}
          alt="light-logo"
          className={`tourism-logo white-logo ${
            scrolled ? "hidden" : "visible"
          }`}
        />

        <img
          src={`${import.meta.env.BASE_URL}assets/header/mtscolour.png`}
          alt="dark-logo"
          className={`tourism-logo ${scrolled ? "visible" : "hidden"}`}
        />
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <Link to="/">
            <li>
              <button>Home</button>
            </li>
          </Link>
          <Link to="/about-malaysia">
            <li>
              <button>About Malaysia</button>
            </li>
          </Link>

          <li className="dropdown-container">
            <div className="dropdown-wrapper">
              <button className="dropdown-button">Plan Your Trips</button>
              <DropDownMenu options={getPlanTrip(t)} />
            </div>
          </li>
          <li className="dropdown-container">
            <div className="dropdown-wrapper">
              <button>Travel Tips</button>
              <DropDownMenu options={getTravelTips(t)} />
            </div>
          </li>
          <li className="dropdown-container">
            <div className="dropdown-wrapper">
               <button >
              <img src={`${import.meta.env.BASE_URL}assets/header/language.svg`} alt="language_logo" />
              <DropDownMenu options={trans}/>
            </button>
            </div>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headerr;
