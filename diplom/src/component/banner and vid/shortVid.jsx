import React, { useRef } from "react";
import "./ShortVid.css";

const ShortVid = ({ videoSrc, iconSrc, username }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className="video-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                preload="metadata"
            />
            <div className="hover-overlay" />
            <img src={iconSrc} alt="Overlay icon" className="youtube-icon" />
            <span className="username-tag">{username}</span>
        </div>
    );
};

export default ShortVid;
