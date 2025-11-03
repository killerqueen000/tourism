// component/loader/SkeletonBox.jsx
import React from "react";
import "./index.css";

const SkeletonBox = ({ width = "100%", height = "100%", borderRadius = "10px" }) => {
  return (
    <div
      className="skeleton-box"
      style={{ width, height, borderRadius }}
    />
  );
};

export default SkeletonBox;
