import React, { useEffect, useState } from "react";
import "./headermain.css";
import cityList from "./cities.json";
import { Link } from "react-router-dom";
import DropDownMenu from "../dropdown-menu/dropdownMenu";
import "./../dropdown-menu/dropdownMenu.css";
import {
  getEatnDrink,
  getBeachesnIsland,
  getTravelTips,
  getPlanTrip,
  trans,
} from "./dropdownData.js";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";

const HeaderMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const fetchWeather = async (cityKey) => {
    const cityName = t(cityKey, { lng: "en" }); // translate key to English city name for API

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeatherData({
          city: cityKey, // store the key so UI can localize with t(cityKey)
          temp: Math.round(data.main.temp),
          icon: data.weather[0].icon,
        });
      } else {
        console.error("Weather API error:", data.message);
      }
    } catch (err) {
      console.error("Failed to fetch weather:", err);
    }
  };

  useEffect(() => {
    fetchWeather(cityList[currentCityIndex]);

    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % cityList.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentCityIndex]);

  return (
    <div className="fixed-postion-header">
      <div className="header-grid">
        <div className="header-row-1">
          <div className="left-group">
            <Link to="/" aria-label="Home">
              <img
                src={`${import.meta.env.BASE_URL}assets/header/mta.svg`}
                alt="mta_logo"
                className="mta-logo"
              />
            </Link>

            <Link to="/contact">
              <button className="contact-us-button">
                <span>{t("header.contact_us")}</span>
                <img src={`${import.meta.env.BASE_URL}assets/header/Iconcs.svg`} alt="contact_us_icon" />
              </button>
            </Link>
          </div>

          <div className="center-nav">
            <nav className="nav-bar-1">
              <ul className="nav-list-1">
                <Link to="/about-malaysia">
                  <li>
                    <button>{t("nav.about_malaysia")}</button>
                  </li>
                </Link>
                <li className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <button className="dropdown-button">
                      {t("nav.experience")}
                    </button>
                    <DropDownMenu options={getBeachesnIsland(t)} />
                  </div>
                </li>
                <li className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <button className="dropdown-button">
                      {t("nav.eatanddrinks")}
                    </button>
                    <DropDownMenu options={getEatnDrink(t)} />
                  </div>
                </li>
                <li className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <button className="dropdown-button">{t("nav.plan")}</button>
                    <DropDownMenu options={getPlanTrip(t)} />
                  </div>
                </li>
                <li className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <button className="dropdown-button">
                      {t("nav.travel")}
                    </button>
                    <DropDownMenu options={getTravelTips(t)} />
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="right-group">
            <nav className="nav-bar-2">
              <ul className="nav-list-2">
                <li className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <button className="dropdown-button">
                      <img src={`${import.meta.env.BASE_URL}assets/header/globe.svg`} alt="globe_icon" />
                      <span>{t("nav.language")}</span>
                      <DropDownMenu options={trans} />
                    </button>
                  </div>
                </li>
                <li>
                  <SearchDropdown />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header-row-2">
          {weatherData && (
            <div className="weather-pill">
              <span>{t(weatherData.city)}</span>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather_icon"
                className="weather-icon"
              />
              <span>{weatherData.temp}°C</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
