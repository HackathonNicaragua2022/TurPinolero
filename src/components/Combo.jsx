import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

export const Combo = ({ name, data, newChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const selected = event.target.value;
    setValue(selected);
    newChange(selected);
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 200 }} size="small">    
      <InputLabel id="demo-select-small">{name}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={name}
        onChange={handleChange}
        required={true}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
