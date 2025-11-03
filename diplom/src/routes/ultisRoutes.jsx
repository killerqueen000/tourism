import { Route } from "react-router-dom";
import AboutMalaysia from "./../component/webpage/about_malaysia/aboutMalaysia";
import CustServiceStart from "../component/cs/CustServiceStart";
import CustService from "../component/cs/CustService";
import AdminChat from "../component/cs/OperatorChat";
import Semporna from "../component/webpage/island-and-b/semporna/semporna";
import Langkawi from "../component/webpage/island-and-b/langkawi/langkawi";
import Rawa from "../component/webpage/island-and-b/rawa/rawa";
import Redang from "../component/webpage/island-and-b/redang/redang";

const UltisRoutes = () => {
  return (
    <Routes>
      <Route path="/about-malaysia" element={<AboutMalaysia />} />
      <Route path="/customer_service" element={<CustServiceStart />} />
      <Route path="/customer_service_chat" element={<CustService />} />
      <Route path="/customer_service_start" element={<AdminChat />} />
      <Route path="/langkawi" element={<Langkawi />} />
      <Route path="/semporna" element={<Semporna />} />
      <Route path="/rawa" element={<Rawa />} />
      <Route path="/redang" element={<Redang />} />
    </Routes>
  );
};

export default UltisRoutes;
