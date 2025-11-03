import React from "react";
import "./button-circle-salmon.css";

const CalendarButton = ({ openCalendar }) => {
  return (
    <button
      onClick={openCalendar}
      className="circle-cont"
      style={{ width: "10vw", height: "10vw" }}
    >
      <img src={`${import.meta.env.BASE_URL}assets/button/calendar.png`} className="thumbnail" />
    </button>
  );
};

export default CalendarButton;
