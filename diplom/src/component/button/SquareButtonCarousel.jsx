// src/component/button/SquareButtonCarousel.jsx
import React, { useState } from "react";
import SquareButton from "./SquareButton";
import "./squarebuttoncarousel.css";

const SquareButtonCarousel = ({ items = [], itemsPerSlide = 3 }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startIndex = slideIndex * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="carousel-row">
      <button onClick={prevSlide} className="carousel-arrow left">&#8249;</button>

      <div className="carousel-buttons-wrapper">
        {currentItems.map((item, index) => (
          <SquareButton
            key={index}
            imageSrc={item.imageSrc}
            altText={item.altText}
            label={item.label}
            dest={item.dest}
          />
        ))}
      </div>

      <button onClick={nextSlide} className="carousel-arrow right">&#8250;</button>
    </div>
  );
};

export default SquareButtonCarousel;
