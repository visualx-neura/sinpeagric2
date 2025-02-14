import React from "react";


function Categorias({ categorias }) {
  if (!categorias || !Array.isArray(categorias)) {
    return <div>No hay categorías disponibles.</div>;
  }

  return (
    <div className="categorias">
      {categorias.map((categoria, index) => (
        <div key={index} className="categoria">
          {categoria}
        </div>
      ))}
    </div>
  );
}

export default Categorias;




