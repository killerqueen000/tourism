import React from "react";
import SquareButton from "../SquareButton";

const AccommButton1 =()=>{
    const base = import.meta.env.BASE_URL;
    const AccommButtonTemp = [
        {
            imageSrc: `${base}assets/accomm/b11.png`, altText: "hotel", label: "Hotel" 
        },
        {
            imageSrc: `${base}assets/accomm/b12.png`, altText: "homestay", label: "Homestay" 
        },
        {
            imageSrc: `${base}assets/accomm/b13.png`, altText: "resort", label: "Resort"
        },
    ];

    return(
        <div className="accomm-button-1" style={{width:"100vw", height:"auto", display:"flex", flexDirection:"row", margin:"auto", gap:"100px", justifyContent:"center", padding:"60px 0"}}>
            {AccommButtonTemp.map((item) =>(
                 <SquareButton 
                 imageSrc={item.imageSrc}
                 altText={item.altText}
                 label={item.label} />
            ))}
           
        </div>
    )
}

export default AccommButton1