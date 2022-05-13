import { Route, Routes } from "react-router-dom";
// Acceuil Contact Home Api

const Routes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/HomeT" element={<Homet />} />
        <Route path="/HomeG" element={<Homeg />} />
        <Route path="/ApiT" element={<Apit />} />
        <Route path="/ApiG" element={<Apig />} />
        <Route path="/ContactT" element={<Contactt />} />
        <Route path="/ContactG" element={<Contactg />} />
      </Routes>
    </main>
  );
};
