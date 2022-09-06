import React from "react";
import ReactDOM from "react-dom/client";
import PinoleroApp from "./PinoleroApp";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light", //dark
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <PinoleroApp />
    </ThemeProvider>
  </React.StrictMode>
);
