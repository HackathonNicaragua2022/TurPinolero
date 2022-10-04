import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NicaWikiApp from "./NicaWikiApp";
import "animate.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NicaWikiApp />
    </BrowserRouter>
  </React.StrictMode>
);
