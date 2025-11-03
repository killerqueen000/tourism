import React, { useState } from "react";
import { BsPostcardHeart } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { TbSticker } from "react-icons/tb";
import { RxUpload } from "react-icons/rx";
import TemplateSelector from "./TemplateSelector";
import StickerGallery from "./StickerGallery";
import "../../../../navbar/PSideBar.css"; // Make sure path is correct

const Sidebar = ({ data, state, handlers }) => {
  const [drawer, setDrawer] = useState(null);

  const open = (name) => setDrawer(drawer === name ? null : name);

  const templates =
    state.orientation === "landscape"
      ? data.templatesLandscape
      : data.templatesPortrait;

  return (
    <div className="playout-container">
      {/* Sidebar Menu */}
      <div className="psidebar">
        <div className="pmenu">
          <div className="pmenuitem" onClick={() => open("templates")}>
            <BsPostcardHeart className="pmenuicon" />
            <span>
              Postcard <br /> Template
            </span>
          </div>

          <div className="pmenuitem" onClick={() => open("stamps")}>
            <GiPostStamp className="pmenuicon" />
            <span>Stamp</span>
          </div>

          <div className="pmenuitem" onClick={() => open("stickers")}>
            <TbSticker className="pmenuicon" />
            <span>Sticker</span>
          </div>

          <div className="pmenuitem">
            <RxUpload className="pmenuicon" />
            <input
              type="file"
              accept="image/*"
              onChange={handlers.handleStampUpload}
              style={{ display: "none" }}
              id="upload-stamp"
            />
            <label htmlFor="upload-stamp" style={{textAlign:"center"}}>
              <span >
                Upload <br />
                Stamp
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer Section */}
      <div className={`custom-drawer ${drawer ? "open" : ""}`}>
        <div className="drawer-header">
          <span>{drawer}</span>
          <button onClick={() => setDrawer(null)}>&times;</button>
        </div>

        <div className="drawer-content">
          {drawer === "templates" && (
            <TemplateSelector
              templates={templates}
              onSelect={handlers.handleTemplateChange}
              activeTemplate={state.selectedTemplate}
            />
          )}

          {drawer === "stamps" && (
            <StickerGallery
              items={data.stamps.map((src, i) => ({ id: `stamp${i}`, src }))}
              onClick={(s) => handlers.handleStampChange(s.src)}
            />
          )}

          {drawer === "stickers" && (
            <StickerGallery
              items={data.stickers}
              onClick={handlers.addSticker}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
