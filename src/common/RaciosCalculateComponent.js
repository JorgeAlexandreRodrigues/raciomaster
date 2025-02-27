import React, { useState } from "react";
import { TextField } from "@mui/material";

const RaciosCalculateComponent = ({ label, onChange, value }) => {
  const [inputValue, setInputValue] = useState(value.toString().replace(".", ",")); // Converte número para string

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/[^0-9,]/g, ""); // Permite apenas números e vírgula
    setInputValue(rawValue);
    
    const numericValue = parseFloat(rawValue.replace(",", ".")) || 0; // Converte para número
    onChange(numericValue);
  };

  return (
    <TextField
      label={label}
      variant="filled"
      fullWidth
      size="small"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default RaciosCalculateComponent;
