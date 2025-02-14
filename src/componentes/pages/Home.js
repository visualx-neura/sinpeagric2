import React, { useEffect, useState } from "react";
import { supabase } from "../../supabasecliente/SupabaseClient";
import "./Home.css";

function Home() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const { data, error } = await supabase.from("videos").select("*");
    if (error) {
      console.error("Error al obtener videos:", error);
      if (error.message === 'JWT expired') {
        // Intenta renovar el token si ha expirado
        const { error: sessionError } = await supabase.auth.refreshSession();
        if (sessionError) {
          console.error("Error al renovar la sesión:", sessionError);
        } else {
          // Vuelve a intentar obtener los videos
          const { data: newData, error: newError } = await supabase.from("videos").select("*");
          if (newError) {
            console.error("Error al obtener videos después de renovar el token:", newError);
          } else {
            setVideos(newData || []);
          }
        }
      }
    } else {
      setVideos(data || []);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="home-wrapper">
      <h2 className="home-title">¡Somos SINPEAGRIC contenido de Interes Para la Comunidad Y Asociados!</h2>
      <div className="videos-grid">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="media-card">
              {video.titulo && (
                <strong className="video-title">{video.titulo}</strong>
              )}
              {video.url && video.url !== "Sin URL" && (
                <div className="video-card">
                  <iframe
                    className="video-frame"
                    src={video.url}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {video.imagen && (
                <div className="image-card">
                  <img
                    className="video-image"
                    src={video.imagen}
                    alt={`Imagen de ${video.titulo}`}
                  />
                </div>
              )}
              {video.documento && (
                <div className="document-card">
                  <iframe
                    className="video-documento-frame"
                    src={video.documento}
                    title={`Documento de ${video.titulo}`}
                    frameBorder="0"
                  ></iframe>
                  <div className="document-buttons">
                    <a href={video.documento} target="_blank" rel="noopener noreferrer">
                      <button className="view-button">Ver Documento</button>
                    </a>
                    <a href={video.documento} download>
                      <button className="download-button">Descargar</button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-videos-message">No hay contenido disponible.</p>
        )}
      </div>
    </div>
  );
}

export default Home;





