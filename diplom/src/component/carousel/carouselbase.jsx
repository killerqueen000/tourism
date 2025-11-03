import React, { useEffect, useState, useCallback } from "react";
import CarouselIndicators from "./carouselIndicator";
import "./carousel.css";

const Carousel = ({ images = [], interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((index) => (index + 1) % total);
  }, [total]);

  const prevSlide = () => {
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, interval);
    return () => clearInterval(autoPlay);
  }, [nextSlide, interval]);

  return (
    <div className="carousel">
      <div className="carousel__image-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`carousel__img ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <div className="carousel__controls">
        <button onClick={prevSlide} className="carousel__btn">&lt;</button>
        <CarouselIndicators count={total} activeIndex={activeIndex} onClick={setActiveIndex} />
        <button onClick={nextSlide} className="carousel__btn">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
