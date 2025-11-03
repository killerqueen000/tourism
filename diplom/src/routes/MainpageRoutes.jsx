import { Route } from "react-router-dom";
import SearchResults from "../component/searchResult/SearchResults.jsx";
import Mainpage from "../component/webpage/mainpage/mainpage.jsx";
import Postcardneww from "../component/webpage/postcard/postcardnew/Postcardneww.jsx";
import Foods from "../component/webpage/food-and-drink/foods.jsx";
import Accomm from "../component/webpage/accomm/accomm.jsx";
import Island from "../component/webpage/island-and-b/island.jsx";
import Culture from "../component/webpage/culture/culture.jsx";
import Family from "../component/webpage/family/family.jsx";
import Nature from "../component/webpage/nature/nature.jsx";
import Contact from "../component/webpage/contact/contact.jsx";
import Perlis from "../component/webpage/state/perlis/perlis.jsx";
import Johor from "../component/webpage/state/johor/johor.jsx";
import Kedah from "../component/webpage/state/kedah/kedah.jsx";
import Kelantan from "../component/webpage/state/kelantan/kelantan.jsx";
import Kl from "../component/webpage/state/kl/kl.jsx";
import Melaka from "../component/webpage/state/melaka/melaka.jsx";
import Pahang from "../component/webpage/state/pahang/pahang.jsx";
import Perak from "../component/webpage/state/perak/perak.jsx";
import PulauPinang from "../component/webpage/state/pulauPinang/pulau_pinang.jsx";
import Putrajaya from "../component/webpage/state/putrajaya/putrajaya.jsx";
import TripPlanner from "../component/webpage/tripplanner/TripPlanner.jsx";

const MainpageRoutes = ({ openCalendar, openNewsletter }) => {
  return (
    <Routes>
    <Route
        index
        element={<Mainpage openCalendar={openCalendar} openNewsletter={openNewsletter} />}
      />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/postcard" element={<Postcardneww />} />
      <Route path="/food" element={<Foods />} />
      <Route path="/accom" element={<Accomm />} />
      <Route path="/island" element={<Island />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/family" element={<Family />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/perlis" element={<Perlis />} />
      <Route path="/johor" element={<Johor />} />
      <Route path="/kedah" element={<Kedah />} />
      <Route path="/kelantan" element={<Kelantan />} />
      <Route path="/kuala_lumpur" element={<Kl />} />
      <Route path="/melaka" element={<Melaka />} />
      <Route path="/pahang" element={<Pahang />} />
      <Route path="/perak" element={<Perak />} />
      <Route path="/pulau_pinang" element={<PulauPinang />} />
      <Route path="/putrajaya" element={<Putrajaya />} />
      <Route path="/transport" element={<TripPlanner />} />
    </Routes>
  );
};

export default MainpageRoutes;
