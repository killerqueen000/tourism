import React from "react";
import "./postcardLandscape.css"

const PostcardLandscape = ({Img, altText, hreff}) => {
    return(
        <a href={hreff} >
            <img src={Img} alt={altText} style={{width:"25vw"}} />
        </a>
    )

}

export default PostcardLandscape