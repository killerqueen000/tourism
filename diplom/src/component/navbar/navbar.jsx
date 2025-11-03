import { useState } from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import "./PSideBar.css";
import { BsPostcardHeart } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { LuSticker } from "react-icons/lu";
import { RxUpload } from "react-icons/rx";
import { TbSticker } from "react-icons/tb";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropDown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };


  const fontItems = ["Motserrat", "Cursive", "etc"];
  const borderItems = ["Red", "Blue", "Dashed"];
  const orientationItems = ["Landscape", "Portrait"];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerContent, setDrawerContent] = useState(null);

  const openDrawer = (title, content) => {
    setDrawerTitle(title);
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <header className="p-navbar">
        <a href="/">
          <FaHome
            style={{
              color: "white",
              padding: "0 50px",
              transform: "scale(2.3)",
            }}
          />
        </a>
        <div className="p-navbar-center">
          <ul className="p-navbar-main">
            <li>
              <span>Add Text</span>
            </li>

            <li
              className={
                activeDropdown === "orientation" ? "active-dropdown" : ""
              }
            >
              <span onClick={() => toggleDropDown("orientation")}>
                Orientation
              </span>
              {activeDropdown === "orientation" && (
                <ul
                  className={`dropdown ${
                    activeDropdown === "orientation" ? "show" : ""
                  }`}
                >
                  {orientationItems.map((text, i) => (
                    <li key={text} style={{ animationDelay: `${i * 0.2}s` }}>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className={activeDropdown === "font" ? "active-dropdown" : ""}>
              <span onClick={() => toggleDropDown("font")}>Font</span>
              {activeDropdown === "font" && (
                <ul
                  className={`dropdown ${
                    activeDropdown === "font" ? "show" : ""
                  }`}
                >
                  {fontItems.map((text, i) => (
                    <li key={text} style={{ animationDelay: `${i * 0.2}s` }}>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              className={activeDropdown === "border" ? "active-dropdown" : ""}
            >
              <span onClick={() => toggleDropDown("border")}>Border</span>
              {activeDropdown === "border" && (
                <ul
                  className={`dropdown ${
                    activeDropdown === "border" ? "show" : ""
                  }`}
                >
                  {borderItems.map((text, i) => (
                    <li key={text} style={{ animationDelay: `${i * 0.2}s` }}>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </header>

      {/*Sidebar*/}

      <div className="playout-container">
        <div className="psidebar">
          <div className="pmenu">
            <div
              className="pmenuitem"
              onClick={() =>
                openDrawer(
                  "Postcard Templates",
                  <p>Your postcard content here.</p>
                )
              }
            >
              <BsPostcardHeart className="pmenuicon" />
              <span>
                Postcard <br /> Template
              </span>
            </div>
            <div
              className="pmenuitem"
              onClick={() =>
                openDrawer("Stamp", <p>Images of postcard front page template base on the orientation </p>)
              }
            >
              <GiPostStamp className="pmenuicon" />
              <span>Stamp</span>
            </div>
            <div
              className="pmenuitem"
              onClick={() =>
                openDrawer("Stickers", <p>all picture of stamp available (button)</p>)
              }
            >
              <TbSticker className="pmenuicon" />
              <span>Sticker</span>
            </div>
            <div
              className="pmenuitem"
              onClick={() =>
                openDrawer("Stamp", <p>all picture of stickers available (button)</p>)
              }
            >
              <RxUpload className="pmenuicon" />
              <span>
                Upload <br />
                Stamp
              </span>
            </div>
          </div>
        </div>

        <div className={`custom-drawer ${drawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <span>{drawerTitle}</span>
            <button onClick={closeDrawer}>&times;</button>
          </div>
          
          <div className="drawer-content">{drawerContent}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
