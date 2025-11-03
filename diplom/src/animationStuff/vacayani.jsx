import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../component/webpage/state/stateTemp.css'; 

const VacayAni = () => {
  return (
    <div className="vacay-wrapper">
      <DotLottieReact
        src={`${import.meta.env.BASE_URL}assets/vacay3.lottie`}
        loop
        autoplay
      />
    </div>
  );
};

export default VacayAni;
