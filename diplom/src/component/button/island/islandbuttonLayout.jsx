import IslandButton from "./islandButton";
import React from "react";
import { useTranslation } from "react-i18next";

const IslandButtonLayout = () => {
    const {t} = useTranslation();
    const base = import.meta.env.BASE_URL;
    const IslandButtonTemp = [
        {
            place:t("island.button1.place"),
            vid:`${base}assets/island/langkawi.mp4`,
            path:"/langkawi"
        },
        {
            place:t("island.button2.place"),
            vid:`${base}assets/island/rawa.mp4`,
            path:"/rawa"
        },
        {
            place:t("island.button3.place"),
            vid:`${base}assets/island/redang.mp4`,
            path:"/redang"
        },
        {
            place:t("island.button4.place"),
            vid:`${base}assets/island/semporna.mp4`,
            path:"/semporna"
        },
    ]

    return(
        <div className="island-button-container" style={{display:"flex", width:"100vw"}}>
            {IslandButtonTemp.map((item) => (
                <IslandButton
                place={item.place}
                vid={item.vid}
                path={item.path}/>
                
            ))}

        </div>
    )
}

export default IslandButtonLayout