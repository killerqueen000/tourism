import React, { useState, useEffect } from "react";
import "../calendar.css";
import { Link, useLocation } from "react-router-dom";
import { MONTHS } from "../../../data/monthUtils";

const April = ({ selectedMonth, setSelectedMonth }) => {
  const [events, setEvents] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const location = useLocation();
  const fullMonth =
    MONTHS.find((m) => m.short === selectedMonth)?.full || "April";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/events?month=${fullMonth}`
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, [fullMonth]);

  const daysInMonth = 30;
  const startDay = 2;
  const totalCells = startDay + daysInMonth;

  return (
    <div className="calendar-container">
      <div className="header-for-pic"></div>

      <div className="calendar-header">
        <h2>Year 2025</h2>
        <div className="month-selector">
          {MONTHS.map(({ short }) => (
            <button
              key={short}
              onClick={() => setSelectedMonth(short)}
              className={selectedMonth === short ? "active-month" : ""}
            >
              {short}
            </button>
          ))}
        </div>
      </div>
      <div className="Calendar-layout">
        <div className="calendar-grid">
          <div className="weekdays">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="dates">
            {Array.from({ length: totalCells }, (_, i) => {
              if (i < startDay) {
                return <div key={i} className="calendar-day empty"></div>;
              }

              const date = i - startDay + 1;
              const formattedDate = `2025-04-${date
                .toString()
                .padStart(2, "0")}`;
              const holiday = holidays.find((h) => h.date === formattedDate);

              return (
                <div key={`cell-${date}-${i}`} className="calendar-day">
                  <span className="date-number">{date}</span>
                  <span className="holiday-text">
                    {holiday ? holiday.name : " "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="events-container">
          {events.map((event, index) => {
            const start = new Date(event.start_date).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
              }
            );
            const end = event.end_date
              ? new Date(event.end_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              : null;

            const dateRange =
              end && end !== start ? `${start} - ${end}` : start;
            const tags = event.tags?.split(",").join(" · "); // Format as: Festival · Culture

            return (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <p>{dateRange}</p>
                <small className="event-tags">{tags}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default April;
