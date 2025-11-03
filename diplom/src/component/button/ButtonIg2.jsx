import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { PiPaperPlaneTilt } from "react-icons/pi";
import "./ButtonIg.css"

const ButtonIg2 = ({ src, ImgSrc, ImgAlt, text }) => {
  return (
    <div className="layout">
      <a
        className="thumbnail"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ImgSrc} alt={ImgAlt} />
        <div className="ig-bottom-layout">
          <div className="ig-icon">
            <FcLike style={{margin:"0 5px ", fontSize:"23px"}}/>
            <FaRegComment style={{margin:"0 5px ", fontSize:"23px"}}/>
            <PiPaperPlaneTilt style={{margin:"0 5px ", fontSize:"23px"}}/>
          </div>
          <div className="ig-text">
            <p>{text}</p>
          </div>
          
        </div>
      </a>
    </div>
  );
};

export default ButtonIg2;
