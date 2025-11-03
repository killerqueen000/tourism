import React, { useEffect, useState, useCallback } from "react";
import CarouselIndicators from "./carouselIndicator";
import "./carouselState.css";
import "./carousel.css";

const CarouselRegion = ({ slides = [], interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

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
    <div className="region-carousel">
      <div className="region-carousel__image-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`region-carousel__slide ${
              index === activeIndex ? "active" : ""
            } ${!slide.h2 ? "no-h2" : ""}`}
          >
            <img
              src={slide.images}
              alt={`Slide ${index + 1}`}
              className="region-carousel__img"
            />
            {slide.h2 ? (
              <div className="region-carousel__overlay-text has-description">
                <h1>{slide.h1}</h1>
                <h2>{slide.h2}</h2>
              </div>
            ) : (
              <div className="region-carousel__overlay-text no-description">
                <h1>{slide.h1}</h1>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="region-carousel__controls">
        <button onClick={prevSlide} className="region-carousel__btn">
          &lt;
        </button>
        <CarouselIndicators
          count={total}
          activeIndex={activeIndex}
          onClick={setActiveIndex}
        />
        <button onClick={nextSlide} className="region-carousel__btn">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselRegion;
