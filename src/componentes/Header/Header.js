import React from "react";
import "./Header.css";

function Header({ onNuevoVideoClick, onAdminClick, mostrarNuevoVideo, }) {
  return (
    <header className="header">
      <img src="logo.jpeg" className="logo" alt="logo sinpeagrip"></img>
      <nav className="header__nav">
        
        {/* Mostrar el botón solo si el usuario está validado */}
        {mostrarNuevoVideo && (
          <button onClick={onNuevoVideoClick} className="header__button">Nuevo Archivo</button>
        )}
        <button onClick={onAdminClick} className="header__button">Administrador</button>
        <a href="https://www.tu-pagina-externa.com" target="_blank" rel="noopener noreferrer" className="header__button">Nuestros Productos</a>
        <a href="https://www.tu-pagina-externa.com" target="_blank" rel="noopener noreferrer" className="header__button">Peliculas</a>
      </nav>
    </header>
  );
}

export default Header;



 