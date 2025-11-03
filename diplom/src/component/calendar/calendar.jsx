import { Routes, Route, Navigate } from "react-router-dom";
import Jan from "./months/jan";
import Feb from "./months/feb";
import March from "./months/mar";
import April from "./months/apr";
import May from "./months/may";
import June from "./months/jun";
import Jul from "./months/jul";
import Aug from "./months/aug";
import Sep from "./months/sep";
import Oct from "./months/oct";
import Nov from "./months/nov";
import Dec from "./months/dec";
import ButtonClose from "../button/closebutton";
import "./calendarModel.css";
import { useState } from "react";
import { MONTHS } from "../../data/monthUtils";

const CalendarRoutes = ({ onClose }) => {
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  const renderMonth = () => {
    switch (selectedMonth) {
      case "Jan": return <Jan selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Feb": return <Feb selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Mar": return <March selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Apr": return <April selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "May": return <May selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Jun": return <June selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Jul": return <Jul selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Aug": return <Aug selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Sep": return <Sep selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Oct": return <Oct selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Nov": return <Nov selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      case "Dec": return <Dec selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
      default: return <Jan selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />;
    }
  };

  return (
    <div className="calendar-modal-overlay">
      <div className="calendar-modal-content">
        {renderMonth()}
        <ButtonClose onClose={onClose} className="calendar-close-button"/>
      </div>
    </div>
  );
};

export default CalendarRoutes;
