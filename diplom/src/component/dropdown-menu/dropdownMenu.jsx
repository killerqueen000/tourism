// src/dropdown-menu/dropdownMenu.jsx
import React from "react";
import "./dropdownMenu.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DropDownMenu = ({ options }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ul className="general-dropdown">
      {options.map((item, index) => (
        <li key={index}>
          {["en", "ru"].includes(item.pathdropdown) ? (
            <button
              onClick={() => handleLanguageChange(item.pathdropdown)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <span>{item.text}</span>
            </button>
          ) : item.pathdropdown.startsWith("http") ? (
            <a
              href={item.pathdropdown}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{item.text}</span>
            </a>
          ) : (
            <Link to={item.pathdropdown}>
              <span>{item.text}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
