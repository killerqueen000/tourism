import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InteractiveMap from "./interactiveMap";
import StateDetailPage from "./StateDetailPage";

const MapRoute = () => {
  return (
    
      <Routes>
        <Route path="/" element={<InteractiveMap />} />
        <Route path="/states/:id" element={<StateDetailPage />} />
      </Routes>
   
  );
};

export default MapRoute;
