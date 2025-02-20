import React, { useState } from "react";
import { TextField } from "@mui/material";

const formatNumber = (value) => {
  if (!value) return "";
  const number = parseFloat(value.replace(/\./g, "").replace(",", "."));
  return isNaN(number)
    ? ""
    : new Intl.NumberFormat("pt-PT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
};

const RaciosCalculateComponent = ({ label, onChange, value }) => {
  const [inputValue, setInputValue] = useState(value); // Estado local para edição livre

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/\s/g, ""); // Remove espaços extras
    rawValue = rawValue.replace(/[^0-9,]/g, ""); // Permite apenas números e vírgula

    if (rawValue.includes(",")) {
      const [integer, decimal] = rawValue.split(",");
      rawValue = integer.replace(/\./g, "") + "," + decimal.slice(0, 2); // Remove pontos e limita casas decimais
    }

    setInputValue(rawValue); // Atualiza a exibição sem formatar imediatamente
    onChange(rawValue.replace(",", ".")); // Converte para formato numérico para cálculos
  };

  const handleBlur = () => {
    setInputValue(formatNumber(inputValue)); // Aplica a formatação apenas ao sair do input
  };

  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      fullWidth
      size="small"
      sx={{ mt: 0.5, mb: 0.5, ml: 1, mr: 1 }}
      onChange={handleChange}
      onBlur={handleBlur} // Formata ao sair do input
      value={inputValue}
      inputProps={{ inputMode: "decimal" }} // Ajuda no mobile
    />
  );
};

export default RaciosCalculateComponent;
