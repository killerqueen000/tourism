// src/component/button/SquareButtonSection.jsx
import React from "react";
import SquareButtonCarousel from "./SquareButtonCarousel";

const SquareButtonSection = () => {
    const base = import.meta.env.BASE_URL;
  const categoryItems = [
    { imageSrc: `${base}assets/button/beach.png`, altText: "Island", label: "Islands and Beaches", dest:"/island" },
    { imageSrc: `${base}assets/button/culture.png`, altText: "Culture", label: "Culture and heritage", dest:"/culture" },
    { imageSrc: `${base}assets/button/food.png`, altText: "Food", label: "Foods and drinks", dest:"/food" },
    { imageSrc: `${base}assets/button/family.png`, altText: "Family Fun", label: "Family Fun", dest:"/family" },
    { imageSrc: `${base}assets/button/nature.png`, altText: "Nature", label: "Nature", dest:"/nature" },
  ];

  return (
    <div style={{ padding: "2rem",  }}>
      <SquareButtonCarousel items={categoryItems} itemsPerSlide={3} />
    </div>
  );
};

export default SquareButtonSection;
