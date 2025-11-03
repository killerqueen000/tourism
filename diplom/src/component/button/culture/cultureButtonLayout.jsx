import React from "react";
import CultureButton from "./cultureButton";
import "./cultureButtonLayout.css";

const CultureButtonLayout = () => {
  const base = import.meta.env.BASE_URL;
  const ButtonTemp = [
    {
      image: `${base}assets/culture/c1.png`,
      altext: "c1",
      desc: "Echoes of the past: Discover Malaysia’s UNISCO World Heritage",
      flexdirection: "row"
    },
    {
      image: `${base}assets/culture/c2.png`,
      altext: "c2",
      desc: "Mosque, Ceremonial sites and Architecture",
      flexdirection: "row-reverse"
    },
    {
      image: `${base}assets/culture/c3.png`,
      altext: "c3",
      desc: "Religion and Festivals",
      flexdirection: "row"
    },
    {
      image: `${base}assets/culture/c4.png`,
      altext: "c3",
      desc: "Crafts, music and dance",
      flexdirection: "row-reverse"
    },
  ];
  return (
    <div className="culture-button-idk">
      {ButtonTemp.map((item) => (
        <CultureButton
          image={item.image}
          altext={item.altext}
          desc={item.desc}
          flexdirection={item.flexdirection}
        />
      ))}
    </div>
  );
};

export default CultureButtonLayout;
