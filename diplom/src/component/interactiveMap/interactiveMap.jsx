import React, { useState } from "react";
import "./interactiveMap.css";
import interactiveMap from "./interactiveMap.json";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useTranslation } from "react-i18next";
import "../../i18n"

const InteractiveMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClick = (state) => {
    navigate(state.path);
  };

  return (
    <div className="map-wrapper">
      <div className="map-info">
        {hoveredState ? (
          <>
            <h2>{t(hoveredState.name)}</h2>
            <p>{t(hoveredState.description)}</p>
          </>
        ) : (
          <>
            <h2>{t("region.default_prompt")}</h2>
          </>
        )}
      </div>

      
      <svg
        viewBox="0 0 1000 332"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-map"
      >
        {interactiveMap.map((state, index) => (
          <path
          key={index}
          d={state.d}
          className={`state-path ${selectedState?.id === state.id ? "selected" : ""}`}
          data-tooltip-id="state-tooltip"
          data-tooltip-html={`${t(state.title)}<br />`}
          onMouseEnter={() => setHoveredState(state)}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => {setSelectedState(state); handleClick(state)}}
        />
        
        ))}
      </svg>

      <Tooltip
        id="state-tooltip"
        place="top"
        className="custom-tooltip"
      />
    </div>
  );
};

export default InteractiveMap;
