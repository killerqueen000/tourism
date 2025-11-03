import React from "react";
import FoodButton1 from "./foodbutton1";
import "./foodbuttonLayout.css";
import { useTranslation } from "react-i18next";

const FoodButtonLayout = () => {
  const base = import.meta.env.BASE_URL;
  const {t} = useTranslation();
  const Buttonss = [
    {
      img: `${base}assets/food/nasilemak.jpg`,
      alt: "f1.png",
      h2: t("food.button1.h2"),
      p: t("food.button1.p"),
      backgroundcolour: "#6E5235",
      flexdirection: "row-reverse",
    },
    {
      img: `${base}assets/food/street.png`,
      alt: "f2.png",
      h2: t("food.button2.h2"),
      p: t("food.button2.p"),
      backgroundcolour: "#9B5134",
      flexdirection: "row",
    },
    {
      img: `${base}assets/food/cendol2.png`,
      alt: "f3.png",
      h2: t("food.button3.h2"),
      p: t("food.button3.p"),
      backgroundcolour: "#303831",
      flexdirection: "row-reverse",
    },
    {
      img: `${base}assets/food/f4.png`,
      alt: "f4.png",
      h2: t("food.button4.h2"),
      p: t("food.button4.p"),
      backgroundcolour: "#727039",
      flexdirection: "row",
    },
    {
      img: `${base}assets/food/laksa2.png`,
      alt: "f5.png",
      h2: t("food.button5.h2"),
      p: t("food.button5.p"),
      backgroundcolour: "#431707",
      flexdirection: "row-reverse",
    },
  ];

  return (
    <div className="food-button-layout">
      {Buttonss.map((item, index) => (
        <FoodButton1
          key={index}
          img={item.img}
          h2={item.h2}
          p={item.p}
          backgroundcolour={item.backgroundcolour}
          flexdirection={item.flexdirection}
        />
      ))}
    </div>
  );
};

export default FoodButtonLayout;
