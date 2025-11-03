import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import { useElementHandlers } from "../editor/useElementsHandlers";
import { FaArrowRotateRight } from "react-icons/fa6";

const DraggableItem = ({
  x,
  y,
  size,
  rotation,
  zIndex,
  selected,
  onUpdate,
  onDelete,
  onClick,
  children,
}) => {
  const ref = useRef(null);
  const { handleRotationStart } = useElementHandlers(ref, rotation, onUpdate);

  return (
    <Rnd
    size={{width:"fit-content", height:"fit-content"}}
    position={{x,y}}
    style={{
      zIndex,
      transform: `rotate(${rotation}deg)`, // ✅ Rotate the entire container
      transformOrigin: "center",           // ✅ Optional: rotate around center
    }}
    

      onDragStop={(e, d) => onUpdate({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, refEl, delta, pos) =>
        onUpdate({ size: parseInt(refEl.style.width), ...pos })
      }
      className={`draggable-container ${selected ? "selected" : ""}`}
    >
      <div
        ref={ref}
        className="draggable-item"
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
      >
        {children}

        {selected && (
          <>
            <div className="rotation-handle" onMouseDown={handleRotationStart}>
            <FaArrowRotateRight style={{color:"black", transform:"scale(1.7)"}}/>
            </div>
            
            <div className="layer-controls">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (zIndex < 10) onUpdate({ zIndex: zIndex + 1 });
                }}
              >
                ⬆
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (zIndex > 0) onUpdate({ zIndex: zIndex - 1 });
                }}
              >
                ⬇
              </button>
            </div>

            {onDelete && (
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                ×
              </button>
            )}
          </>
        )}
      </div>
    </Rnd>
  );
};

export default DraggableItem;
