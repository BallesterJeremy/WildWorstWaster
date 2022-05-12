import HomeGreta from "@pages/HomeGreta";
import HomeTrump from "@pages/HomeTrump";
import { Route, Routes } from "react-router-dom";
// Acceuil Contact Home Api

const Routes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/HomeTrump" element={<HomeTrump />} />
        <Route path="/HomeG" element={<HomeGreta />} />
        <Route path="/ApiT" element={<ApiTrump />} />
        <Route path="/ApiG" element={<ApiGreta />} />
        <Route path="/ContactT" element={<Contactt />} />
        <Route path="/ContactG" element={<Contactg />} />
      </Routes>
    </main>
  );
};
