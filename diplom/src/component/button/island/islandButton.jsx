import React from "react";
import "./islandButton.css";
import { Link } from "react-router-dom";

const IslandButton = ({place, vid, path}) => {
  return (
    <Link to={path}>
        <button className="island-button">
      <video src={vid} autoPlay muted loop />
      <div className="overlay"></div>
      <div className="island-txt">
        <h3>{place}</h3>
        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "3px solid",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
    </button>
    </Link>

  );
};

export default IslandButton;
