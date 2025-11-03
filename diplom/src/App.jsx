import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CalendarRoutes from "./component/calendar/calendar.jsx";
import Newsletter from "./component/newsletter/newsletter.jsx";
import AllRoutes from "./routes/allRoutes.jsx";
import ScrollToTop from "./component/Scrolltotop.jsx";

function App() {
  const location = useLocation();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isNewsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <AllRoutes
        openCalendar={() => setCalendarOpen(true)}
        openNewsletter={() => setNewsletterOpen(true)}
      />

      {isCalendarOpen && (
        <CalendarRoutes onClose={() => setCalendarOpen(false)} />
      )}

      {isNewsletterOpen && (
        <Newsletter onClose={() => setNewsletterOpen(false)} />
      )}
    </>
  );
}

export default App;
