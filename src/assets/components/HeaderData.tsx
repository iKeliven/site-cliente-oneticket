import React from "react";
import { Button } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Heading } from "./Heading";
import { Text } from "./Text";

export default function HeaderPData({ titulo, total, handleAddNovoClick }) {
  const handleVoltarClick = () => {
    window.history.back(); // Volte para a página anterior quando o botão de voltar for clicado
  };

  return (
    <div className="flex justify-between items-center px-8 py-5">
      <div className="flex items-center gap-3">
        <Button
          variant="contained"
          style={{ backgroundColor: "transparent", color: "#FF9800", border: "none", boxShadow: "none" }}
          startIcon={<ChevronLeft />}
          onClick={handleVoltarClick} // Adicione a função handleVoltarClick para o botão de voltar
        >
          
        </Button>
        <Heading size="big">{titulo}</Heading>
        <Heading size="big">|</Heading>
        <Text size="medium" className="text-[darkOrange]">
          {total}
        </Text>
      </div>
      <div className="flex items-center gap-5">
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{ backgroundColor: "white", color: "#FF9800", border: "1px solid #FF9800", boxShadow: "none" }}
        >
          Exportar
          <input type="file" style={{ display: "none" }} />
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF9800", color: "#fff", border: "1px solid #FF9800", boxShadow: "none" }}
          onClick={handleAddNovoClick}
        >
          Editar
        </Button>
      </div>
    </div>
  );
}
