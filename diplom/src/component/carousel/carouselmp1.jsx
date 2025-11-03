import Carousel from "./carouselbase.jsx";

function Carousel1() {
   const base = import.meta.env.BASE_URL;
  const images = [
    `${base}assets/banner/carousel1/kl.png`,
    `${base}assets/banner/carousel1/kk.png`,
    `${base}assets/banner/carousel1/pahang.png`,
    `${base}assets/banner/carousel1/sarawak.png`,
    `${base}assets/banner/carousel1/pp.png`,
  ];

  return <Carousel images={images} />;
}

export default Carousel1;
