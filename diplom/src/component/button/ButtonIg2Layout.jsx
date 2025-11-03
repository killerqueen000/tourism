import React from "react";
import ButtonIg2 from "./ButtonIg2";
import "./ButtonIg2Layout.css"

const ButtonIg2Layout = () => {
  const base = import.meta.env.BASE_URL;
  const ButtonIgTemp = [
    { src: "https://www.instagram.com/p/C-RbliWS_C8/?igsh=MWFta2oyMmJ2N2ppbQ%3D%3D", ImgSrc: `${base}assets/button/1.jpeg`, ImgAlt: "image 1", text:"VisitMalatsia2026 #MalaysiaTrulyAsia #KualaLumpur #PetronasTwinTower #KLTower #moon" },
    { src: "https://www.instagram.com/malaysia.truly.asia/p/DII070_yYHz/", ImgSrc: `${base}assets/button/2.jpeg`, ImgAlt: "image 2", text:"VisitMalatsia2026 #MalaysiaTrulyAsia #Merdeka118 #SurrealExperience" },
    { src: "https://www.instagram.com/p/DID6WExyFaJ/?img_index=1", ImgSrc: `${base}assets/button/3.jpeg`, ImgAlt: "image 3", text:"VisitMalatsia2026 #MalaysiaTrulyAsia #Sabah #KotaKinabalu #Hiking #Nature"},
    { src: "https://www.instagram.com/p/C7IztkqyV8s/?igsh=amlrejRzNXEzbXVp&img_index=1", ImgSrc: `${base}assets/button/4.jpeg`, ImgAlt: "image 4", text:"VisitMalatsia2026 #MalaysiaTrulyAsia #Sabah #KotaKinabalu #Hiking #Nature" },
  ];

  return(
    <div className="layout">
        {ButtonIgTemp.map((item) => (
            <ButtonIg2
            src={item.src}
            ImgAlt={item.ImgAlt}
            ImgSrc={item.ImgSrc}
            text={item.text}
            />
        ))}
    </div>
  );
};

export default ButtonIg2Layout;
