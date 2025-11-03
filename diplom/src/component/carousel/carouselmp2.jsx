import Carousel from "./carouselbase.jsx";

function Carousel2() {
  const base = import.meta.env.BASE_URL;

    const images = [
      `${base}assets/banner/carousel2/1.png`,
      `${base}assets/banner/carousel2/2.png`,
      `${base}assets/banner/carousel2/3.png`,
      `${base}assets/banner/carousel2/4.png`,
      `${base}assets/banner/carousel2/5.png`,
      `${base}assets/banner/carousel2/6.png`,
    ]
  
    return (
      <Carousel images={images} />
    );
  }
  
  export default Carousel2;