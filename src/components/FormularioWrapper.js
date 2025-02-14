import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Formulario1 from "../componentes/formulario/Formulario";

function FormularioWrapper({ categorias, onAgregarVideo, videoEditado }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (videoEditado) {
      navigate("/nuevo-video");
    }
  }, [videoEditado, navigate]);

  return <Formulario1 categorias={categorias} onAgregarVideo={onAgregarVideo} videoEditado={videoEditado} />;
}

export default FormularioWrapper;

