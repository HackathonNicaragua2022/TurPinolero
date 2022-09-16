import { Navigate, Route, Routes } from "react-router-dom";
import { ResultadoPage, HomePage, NuevoPage } from "../pages";

export const NicaWikiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/resultado" element={<ResultadoPage />} />
      <Route path="/nuevo" element={<NuevoPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
