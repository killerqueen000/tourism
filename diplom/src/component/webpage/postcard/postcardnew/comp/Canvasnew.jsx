import React from "react";
import DraggableItem from "./DraggableItem";
import "./canvas.css";

const Canvas = ({ refs, state, handlers, updateState }) => {
  const {
    orientation,
    selectedTemplate,
    stickers,
    stamp,
    textElements,
    activeSide,
    selectedElement,
    borderStyle,
  } = state;

  const isBack = activeSide === "back";
  const canvasSize =
    orientation === "landscape"
      ? { width: 600, height: 400 }
      : { width: 400, height: 600 };

  // Collect all elements and sort by zIndex
  const layeredItems = [
    ...stickers.map((s) => ({ ...s, type: "sticker" })),
    ...textElements.map((t) => ({ ...t, type: "text" })),
    ...(stamp?.src ? [{ ...stamp, id: "stamp", type: "stamp" }] : []),
  ].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));

  return (
    <div className="canvas-container">
      <div
        ref={refs.frontRef}
        className={`canvas-side front ${
          activeSide === "front" ? "active" : ""
        }`}
        style={canvasSize}
      >
        {selectedTemplate && (
          <img src={selectedTemplate} className="canvas-bg" />
        )}
      </div>

      <div
        ref={refs.backRef}
        className={`canvas-side back ${activeSide === "back" ? "active" : ""}`}
        style={{ ...canvasSize, border: borderStyle }}
        onClick={handlers.handleCanvasClick}
        onKeyDown={handlers.handleKeyDown}
        tabIndex={0}
      >
        {layeredItems.map((item) => (
          <DraggableItem
            key={item.id}
            x={item.x}
            y={item.y}
            zIndex={item.zIndex || 0}
            size={item.size}
            rotation={item.rotation}
            selected={selectedElement === item.id}
            onClick={() => updateState({ selectedElement: item.id })}
            onDelete={
              item.type === "stamp"
                ? null
                : () => handlers.deleteElement(item.id)
            }
            onUpdate={(updates) => {
              const updated = { ...item, ...updates };

              if (item.type === "stamp") {
                updateState({ stamp: updated });
              } else if (item.type === "sticker") {
                const newStickers = stickers.map((s) =>
                  s.id === item.id ? updated : s
                );
                updateState({ stickers: newStickers });
              } else if (item.type === "text") {
                const newTextElements = textElements.map((t) =>
                  t.id === item.id ? updated : t
                );
                updateState({ textElements: newTextElements });
              }
            }}
          >
            {item.type === "text" ? (
              <textarea
                value={item.text}
                onChange={(e) =>
                  handlers.updateTextElement(item.id, {
                    text: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  height: "100%",
                  fontFamily: `'${item.fontFamily}', cursive, sans-serif`,
                  fontSize: `${item.fontSize}px`,
                  color: item.color,
                  background: "transparent",
                  border: "none",
                  resize: "none",
                  outline: "none",
                  textAlign: "center",
                  cursor: "text",
                  userSelect: "text",
                  pointerEvents: "auto",
                }}
              />
            ) : (
              <img src={item.src} style={{ width: "100%", height: "100%" }} />
            )}
          </DraggableItem>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
