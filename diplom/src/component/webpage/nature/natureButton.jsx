import React from "react";
import CultureButton from "../../button/culture/cultureButton";
import "../../button/culture/cultureButtonLayout";
import "../../button/culture/cultureButton.css";

const NatureButton = ({ showOverlay = true }) => {
  const base = import.meta.env.BASE_URL;
  const ButtonTemp = [
    {
      image: `${base}assets/nature/n1.png`,
      altext: "n1",
      desc: "Gunung Kinabalu",
      flexdirection: "row"
    },
    {
      image: `${base}assets/nature/n2.png`,
      altext: "n2",
      desc: "Ladang Kenaf",
      flexdirection: "row-reverse"
    },
    {
      image: `${base}assets/nature/n3.png`,
      altext: "n3",
      desc: "Lavender Farm",
      flexdirection: "row"
    },
    {
      image: `${base}assets/nature/n4.png`,
      altext: "n4",
      desc: "Gua Tempurung",
      flexdirection: "row-reverse"
    },
  ];

  return (
    <div className="culture-button-idk">
      {showOverlay && <div className="overlay"></div>}

      {ButtonTemp.map((item, index) => (
        <CultureButton
          key={index}
          image={item.image}
          altext={item.altext}
          desc={item.desc}
          flexdirection={item.flexdirection}
        />
      ))}
    </div>
  );
};

export default NatureButton;
