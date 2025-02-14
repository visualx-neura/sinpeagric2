import React, { useState } from "react";
import "./Formulario.css";
import { supabase } from "../../supabasecliente/SupabaseClient";

function Formulario1() {
  const [video, setVideo] = useState({
    titulo: "",
    url: "Sin URL", // Valor predeterminado si no se ingresa uno
    imagen: "",
    documento: "",
    categoria: "Sin categoría", // Valor predeterminado si no se ingresa uno
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados a Supabase:", video);
    
    try {
      const { error } = await supabase.from("videos").insert([
        {
          titulo: video.titulo,
          url: video.url || "Sin URL",
          imagen: video.imagen || null,
          documento: video.documento || null,
          categoria: video.categoria || "Sin categoría",
        },
      ]);
      if (error) {
        console.error("Error de Supabase:", error);
        alert("Error al guardar el video: " + error.message);
        return;
      }
      alert("Video guardado exitosamente.");
    } catch (error) {
      console.error("Error al guardar el video:", error.message);
      alert("Error al guardar el video.");
    }
  };

  return (
    <form className="formulario-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={video.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL del Video:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={video.url}
          onChange={handleChange}
          placeholder="Opcional"
        />
      </div>
      <div>
        <label htmlFor="imagen">URL de la Imagen (Google Drive):</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={video.imagen}
          onChange={handleChange}
          placeholder="Pega aquí la URL pública de la imagen"
        />
      </div>
      <div>
        <label htmlFor="documento">URL del Archivo Adicional (Google Drive):</label>
        <input
          type="text"
          id="documento"
          name="documento"
          value={video.documento}
          onChange={handleChange}
          placeholder="Pega aquí la URL pública del archivo"
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoría:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={video.categoria}
          onChange={handleChange}
          placeholder="Opcional (Se guardará 'Sin categoría' si está vacío)"
        />
      </div>
      <button type="submit">Guardar Video</button>
    </form>
  );
}

export default Formulario1;





