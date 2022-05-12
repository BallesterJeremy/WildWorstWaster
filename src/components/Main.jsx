import HomeGreta from "@pages/HomeGreta";
import HomeTrump from "@pages/HomeTrump";
import { Route, Routes } from "react-router-dom";
import Acceuil from "@pages/Acceuil";
import ApiTrump from "@pages/ApiTrump";
import ApiGreta from "@pages/ApiGreta";
import ContactGreta from "@pages/ContactGreta";
import ContactTrump from "@pages/ContactTrump";
// Acceuil Contact Home Api

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/HomeTrump" element={<HomeTrump />} />
        <Route path="/HomeGreta" element={<HomeGreta />} />
        <Route path="/ApiTrump" element={<ApiTrump />} />
        <Route path="/ApiGreta" element={<ApiGreta />} />
        <Route path="/ContactTrump" element={<ContactTrump />} />
        <Route path="/ContactGreta" element={<ContactGreta />} />
      </Routes>
    </main>
  );
};
export default Main;
