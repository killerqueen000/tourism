import React from "react";
import BannerYellow from "./bannerYellow";
import { useTranslation } from "react-i18next";
import "../../i18n";

const BannerYellowMainPage = () => {
  const { t } = useTranslation();
  const base = import.meta.env.BASE_URL;
  const BannerYellowMainPageTemp = [
    {
      imageSrc: `${base}assets/banner/flagbag.png`,
      altext: "flagbag.png",
      header: t("banner.itinerary_header"),
      par: t("banner.itinerary_paragraph"),
      flexDirection: "row",
    },
  ];

  return (
    <div className="banner-yellow-mainpage">
      {BannerYellowMainPageTemp.map((item) => (
        <BannerYellow
          imageSrc={item.imageSrc}
          altext={item.altext}
          header={item.header}
          par={item.par}
          flexDirection={item.flexDirection}
        />
      ))}
    </div>
  );
};

export default BannerYellowMainPage;
