import React from "react";
import { usePostcardEditor } from "./editor/usePostcardEditor";
import NavBar from "./comp/NavBar";
import Sidebar from "./comp/SideBarDrawer";
import CanvasArea from "./comp/CanvasArea";
import "./styles/styles.css";

function Postcardneww() {
  const editor = usePostcardEditor();

  return (
    <>
      <NavBar {...editor} />
      <div className="postcard-page">
        <div className="layout">
        <Sidebar {...editor} />

        <CanvasArea {...editor} />
      </div>
      </div>
      
    </>
  );
}

export default Postcardneww;
