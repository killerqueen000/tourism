import React from 'react';
import './carousel.css'; 

const CarouselIndicators = ({ count, activeIndex, onClick }) => (
  <div className="carousel__indicators">
    {Array.from({ length: count }).map((_, index) => (
      <span
        key={index}
        className={`carousel__indicator ${index === activeIndex ? 'active' : ''}`}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

export default CarouselIndicators;

