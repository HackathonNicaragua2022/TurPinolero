import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Clear, Search } from "@mui/icons-material";

export const SearchButton = () => {
  const [searchText, setSearchText] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = ({ target }) => {
    const { value } = target;
    setShowClearIcon(value === "" ? "none" : "flex");
    setSearchText(value);
  };

  const handleClearButton = () => setSearchText("");

  return (
    <TextField
      style={{ width: "430px" }}
      variant="outlined"
      onChange={handleChange}
      value={searchText}
      className="inputRounded animate__animated animate__bounce"
      placeholder="Buscar sitio turístico o comercio"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            className="mano"
            position="end"
            style={{ display: showClearIcon }}
            onClick={handleClearButton}
          >
            <Clear />
          </InputAdornment>
        ),
      }}
    />
  );
};
