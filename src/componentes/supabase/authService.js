import { supabase } from './path-to-your-supabase-client';

// Función para registrar un usuario
export const signUp = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return { user };
  } catch (error) {
    console.error('Error al registrar:', error.message);
    return { error };
  }
};

// Función para iniciar sesión
export const signIn = async (email, password) => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;
    return { user, session };
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    return { error };
  }
};

// Función para cerrar sesión
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
    return { error };
  }
};

// Función para obtener el usuario actual
export const getUser = () => {
  return supabase.auth.user();
};
