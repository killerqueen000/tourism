import React from "react";
import "./gridsns.css"

const GridSns = () => {
    return(
      <div className="grid-section-follow-us-section">
      <div className="grid-section-sns">
        <a className="thumbnailsns" href="https://www.facebook.com/malaysia.travel.my" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/footer/Facebook.svg`} alt="Facebook" />
        </a>
        <a className="thumbnailsns" href="https://www.x.com/TourismMalaysia" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/footer/Twitter.svg`} alt="Twitter" />
        </a>
        <a className="thumbnailsns" href="https://www.instagram.com/TourismMalaysia" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/footer/Instagram.svg`} alt="Instagram" />
        </a>
        <a className="thumbnailsns" href="https://www.youtube.com/c/MalaysiaTrulyAsia" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/footer/YouTube.svg`} alt="YouTube" />
        </a>
        <a className="thumbnailsns" href="https://www.tiktok.com/@malaysiatrulyasia" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/footer/TikTok.svg`} alt="TikTok" />
        </a>
      </div>
    </div>
    
        
    );
}

export default GridSns;