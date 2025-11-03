import React from "react";
import FamilyButtons from "./familyButton";
import "./familyButton";

const FamilyButtonLayout = () => {
  const base = import.meta.env.BASE_URL;
  const FamilyButtoTemp = [
    { image: `${base}assets/family/f1.png`, altext: "f1", desc: "Theme Park and Zoo" },
    { image: `${base}assets/family/f2.png`, altext: "f2", desc: "Extreme Activities" },
    { image: `${base}assets/family/f3.png`, altext: "f3", desc: "Shopping" },
    { image: `${base}assets/family/f4.png`, altext: "f4", desc: "Relacing Activities" },
  ];

  return(
    <div className="family-button-layout">
        {FamilyButtoTemp.map(( item) => (
            <FamilyButtons
            image={item.image}
            altest={item.altext}
            desc={item.desc}
            />
        ))}
    </div>
  ) 
};

export default FamilyButtonLayout;
