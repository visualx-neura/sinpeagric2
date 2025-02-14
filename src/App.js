import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Baner from './componentes/baner/Baner';
import Categorias from './componentes/categorias/Categorias';
import Formulario1 from './componentes/formulario/Formulario';
import Footer from './componentes/footer/Footer';
import Home from './componentes/pages/Home';
import Modal from './componentes/modal/Modal';
import ValidacionUsuario from './componentes/validacionUsuario/ValidacionUsuario';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioValido, setUsuarioValido] = useState(false);
  const [mostrarValidacion, setMostrarValidacion] = useState(false);

  // Array de categorías
  const categorias = ['Acción', 'Comedia', 'Drama', 'Documental'];

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const toggleValidacion = () => {
    setMostrarValidacion(!mostrarValidacion);
  };

  const handleUsuarioValido = () => {
    setUsuarioValido(true);
    setMostrarValidacion(false);
  };

  return (
    <Router>
      <Header 
        onNuevoVideoClick={toggleFormulario} 
        onAdminClick={toggleValidacion} 
        mostrarNuevoVideo={usuarioValido} // Solo el admin puede acceder
      />
      <Baner />
      {mostrarFormulario && <Formulario1 categorias={categorias} />}
      <Routes>
        {/* Pasamos el prop `categorias` a Home */}
        <Route path="/" element={<Home categorias={categorias} />} />
        <Route path="/categorias" element={<Categorias categorias={categorias} />} />
      </Routes>
      <Footer />
      {mostrarValidacion && (
        <Modal onClose={toggleValidacion}>
          <ValidacionUsuario onLogin={handleUsuarioValido} />
        </Modal>
      )}
    </Router>
  );
}

export default App;

