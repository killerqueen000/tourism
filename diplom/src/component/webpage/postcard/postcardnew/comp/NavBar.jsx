import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import "../../../../navbar/navbar.css";
import { TbDownload } from "react-icons/tb";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const NavBar = ({ updateState, state, data, handlers }) => {

  const handleDownloadPDF = async () => {
    window.alert("Postcard Download!")
    const front = document.querySelector(".canvas-side.front");
    const back = document.querySelector(".canvas-side.back");
  
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [600, 400], // match canvas size
    });
  
    const renderPage = async (el) => {
      const canvas = await html2canvas(el, {
        useCORS: true,
        scale: 2,
      });
      return canvas.toDataURL("image/png");
    };
  
    const frontImg = await renderPage(front);
    pdf.addImage(frontImg, "PNG", 0, 0, 600, 400);
  
    const backImg = await renderPage(back);
    pdf.addPage();
    pdf.addImage(backImg, "PNG", 0, 0, 600, 400);
  
    pdf.save("postcard.pdf");
  };

  const [open, setOpen] = useState(null);

  const toggle = (type) => setOpen(open === type ? null : type);

  const getDropdownClass = (type) =>
    open === type ? "dropdown show" : "dropdown";

  const borderOptions = [
    { label: "Red", style: "10px solid red" },
    { label: "Blue", style: "10px solid blue" },
    { label: "Dashed", style: "10px dashed black" },
  ];

  return (
    <header className="p-navbar">
      <Link to="/">
      
        <FaHome
          style={{
            color: "white",
            padding: "0 50px",
            transform: "scale(2.3)",
            border:"none"
          }}
        />
      
      </Link>
     
      <div className="p-navbar-center">
        <ul className="p-navbar-main">
          <li
            onClick={() => {
              updateState({ activeTool: "text" });
              if (typeof handlers?.addTextElement === "function") {
                handlers.addTextElement();
              }
            }}
          >
            <span>Add Text</span>
          </li>

          <li
            className={open === "orientation" ? "active-dropdown" : ""}
            onClick={() => toggle("orientation")}
          >
            <span>Orientation</span>
            <ul className={getDropdownClass("orientation")}>
              {["Landscape", "Portrait"].map((v, i) => (
                <li
                  key={v}
                  style={{ animationDelay: `${i * 0.2}s` }}
                  onClick={() => updateState({ orientation: v })}
                >
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={open === "font" ? "active-dropdown" : ""}
            onClick={() => toggle("font")}
          >
            <span>Font</span>
            <ul className={getDropdownClass("font")}>
              {data.fonts.map((f, i) => (
                <li
                  key={f.id}
                  style={{ animationDelay: `${i * 0.2}s` }}
                  onClick={() => updateState({ fontFamily: f })}
                >
                  <span>{f.name}</span>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={open === "border" ? "active-dropdown" : ""}
            onClick={() => toggle("border")}
          >
            <span>Border</span>
            <ul className={getDropdownClass("border")}>
              {borderOptions.map((opt, i) => (
                <li
                  key={opt.label}
                  style={{ animationDelay: `${i * 0.2}s` }}
                  onClick={() => updateState({ borderStyle: opt.style })}
                >
                  <span>{opt.label}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div className="p-right-navbar">
        <button onClick={handleDownloadPDF}>
          <span>Download PDF</span>
          <TbDownload style={{transform: "scale(2.3)"}}/>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
