import React from "react";
import "./navBarArticle.css"

const NavBarArticle = ({content,href}) => {
    return(

        <div className="side-bar-content">
          <a href={href}>{content}</a>

        </div>

    )
}

export default NavBarArticle