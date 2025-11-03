import React from "react";

const StickerGallery = ({ items, onClick }) => (
  <div className="sticker-palette">
    {items.map((item) => (
      <img
        key={item.id}
        src={item.src}
        className="sticker-thumb"
        onClick={() => onClick(item)}
        title={item.title || ""}
      />
    ))}
  </div>
);

export default StickerGallery;
