import React from "react";

const TemplateSelector = ({ templates, onSelect, activeTemplate }) => {
  return (
    <div className="template-grid">
      {templates.map((src) => (
        <img
          key={src}
          src={src}
          className={`template-thumb ${src === activeTemplate ? "active" : ""}`}
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  );
};

export default TemplateSelector;
