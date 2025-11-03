import { Routes, Route } from "react-router-dom";
import MainpageRoutes from "./MainpageRoutes";
import UltisRoutes from "./ultisRoutes";

const AllRoutes = ({ openCalendar, openNewsletter }) => {
  return (
    <Routes>
      <Route path="/*" element={<MainpageRoutes openCalendar={openCalendar} openNewsletter={openNewsletter} />} />
      <Route path="/*" element={<UltisRoutes />} />
    </Routes>
  );
};

export default AllRoutes;
