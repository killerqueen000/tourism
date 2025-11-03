import React, { useState, useEffect } from "react";
import "../calendar.css";
import { Link, useLocation } from "react-router-dom";
import { MONTHS } from "../../../data/monthUtils";

const March = ({ selectedMonth, setSelectedMonth }) => {
  const fullMonth = MONTHS.find((m) => m.short === selectedMonth)?.full || "";
  const [events, setEvents] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(
          "https://calendarific.com/api/v2/holidays?api_key=TdaPlKotprTBXYSGVZ8piqw6sZ4Poto3&country=MY&year=2025"
        );
        const data = await response.json();

        console.log("Full API Response:", data);

        if (data.response && data.response.holidays.length > 0) {
          const holidayList = data.response.holidays
            .filter((holiday) => holiday.date.datetime.month === 3)
            .map((holiday) => ({
              name: holiday.name,
              description: holiday.description || "No description available",
              date: holiday.date.iso,
            }));

          console.log("Filtered March Holidays:", holidayList);
          setHolidays(holidayList);
        } else {
          console.warn("No holidays found for March.");
        }
      } catch (error) {
        console.error("Failed to fetch holidays", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/events?month=March"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchHolidays();
    fetchEvents();
  }, []);

  const daysInMonth = 31;
  const startDay = 5;
  const totalCells = startDay + daysInMonth;

  return (
    <div className="calendar-container">
      <div className="header-for-pic"></div>

      <div className="calendar-header">
        <h2>Year 2025</h2>
        <div className="month-selector">
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((month) => (
            <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={selectedMonth === month ? "active-month" : ""}
          >
            {month}
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
              const formattedDate = `2025-03-${date
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

export default March;
