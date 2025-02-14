import React from 'react';
import './Modal.css'; // Asegúrate de crear un archivo CSS para el modal

function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
