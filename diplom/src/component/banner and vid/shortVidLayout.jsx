import ShortVid from "./shortVid.jsx"
import "./shortVidLayout.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ShortVidLayout = () => {
    const base = import.meta.env.BASE_URL;
    
    const videos = [
        {
            videoSrc: `${base}assets/vid-short/d.mp4`,
            iconSrc: `${base}assets/vid-short/vectoryoutube.png`,
            username: "@MalaysiaTrulyAsia"
        },
        {
            videoSrc: `${base}assets/vid-short/desa.mp4`,
            iconSrc: `${base}assets/vid-short/vectoryoutube.png`,
            username: "@MalaysiaTrulyAsia"
        },
        {
            videoSrc: `${base}assets/vid-short/kundasag.mp4`,
            iconSrc: `${base}assets/vid-short/vectoryoutube.png`,
            username: "@MalaysiaTrulyAsia"
        },
        {
            videoSrc: `${base}assets/vid-short/sabah.mp4`,
            iconSrc: `${base}assets/vid-short/vectoryoutube.png`,
            username: "@MalaysiaTrulyAsia"
        }

    ]
    return(



<div className="shorts-grid">
            {videos.map((vid, index) => (
                <ShortVid
                    key={index}
                    videoSrc={vid.videoSrc}
                    iconSrc={vid.iconSrc}
                    username={vid.username}
                />
            ))}
        </div>

    )

}

export default ShortVidLayout
