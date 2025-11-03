import React from "react";
import Canvas from "./Canvasnew";

const CanvasArea = ({ refs, state, handlers, updateState }) => {
  return (
    <div className="main-content">
      <div className="canvas-scroll-wrapper">
        <Canvas
          refs={refs}
          state={state}
          handlers={handlers}
          updateState={updateState}
        />
      </div>
    </div>
  );
};

export default CanvasArea;
