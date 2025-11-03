import React from "react";
import { useParams } from "react-router-dom";
import interactiveMap from './interactiveMap.json';

const StateDetailPage = () => {
  const { id } = useParams();
  const state = interactiveMap.find(s => s.id === id);

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>{state?.title}</h1>
      <p>{state?.description}</p>
    </div>
  );
};

export default StateDetailPage;
