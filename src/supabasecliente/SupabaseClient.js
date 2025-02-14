import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://mljjiandosifjthhcnok.supabase.co'; // Tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1samppYW5kb3NpZmp0aGhjbm9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNzA2MzQsImV4cCI6MjA1NDY0NjYzNH0.ODRfiKIWZuBHZWYQTEKarUKystAG-tX6L9pJe3JiLqo'; // Tu clave de API pública de Supabase

export const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: true,
  autoRefreshToken: true,
});

// Función para obtener el usuario actual
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error al obtener el usuario:', error.message);
    return null;
  }
  return user;
};
