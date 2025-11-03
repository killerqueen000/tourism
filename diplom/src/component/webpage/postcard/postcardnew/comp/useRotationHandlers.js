import { useCallback } from "react";

export const useRotationHandler = (elementRef, initialRotation, onUpdate) => {
  return useCallback((e) => {
    e.stopPropagation();
    const rect = elementRef.current.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    const startAngle = Math.atan2(e.clientY - center.y, e.clientX - center.x) * (180 / Math.PI);

    const handleMouseMove = (moveEvent) => {
      const angle = Math.atan2(moveEvent.clientY - center.y, moveEvent.clientX - center.x) * (180 / Math.PI);
      const newRotation = (initialRotation + angle - startAngle + 360) % 360;
      onUpdate({ rotation: newRotation });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [elementRef, initialRotation, onUpdate]);
};
