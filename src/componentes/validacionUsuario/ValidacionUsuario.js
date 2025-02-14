import React, { useState } from "react";
import { supabase } from '../../supabasecliente/SupabaseClient';
import './ValidacionUsuario.css'; // Asegúrate de importar el archivo CSS

const ValidacionUsuario = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamada a Supabase para autenticar al usuario
    const { user, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message); // Si hay un error en el login
    } else {
      // Si el login es exitoso, pasamos el usuario a la función onLogin (de App.js)
      onLogin(user); // Cambié onLoginSuccess por onLogin
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="submit-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default ValidacionUsuario;
