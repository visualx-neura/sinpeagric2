import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img
          src="logo.jpeg" // Cambia esto por la ruta de tu logo
          alt="Logo del Footer"
          className="footer__logo"
        />
        <p className="footer__text">Hecho por John Jairo Pinzon Quintana</p>
      </div>
    </footer>
  );
}

export default Footer;