import { Navigate, Route, Routes } from "react-router-dom";
import { BuscarPage, HomePage, NuevoPage } from "../pages";

export const NicaWikiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/buscar" element={<BuscarPage />} />
      <Route path="/nuevo" element={<NuevoPage />} />

      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
