import { IoIosClose } from "react-icons/io";
import React from "react";
import "./closebutton.css"

const ButtonClose = ({onClose, className=""}) => {

    return(
        <button className={`close-button ${className}`} onClick={onClose} >
            <IoIosClose className="close-button-icon" />
        </button>
    )
}

export default ButtonClose 