import { demoEstablishment } from './mockData';

export async function getEstablishment(id = 'chacra-demo') {
  // Contrato de datos: hoy Mock Provider. Luego podrá resolverse con Supabase/API.
  if (id !== demoEstablishment.id) return null;
  return structuredClone(demoEstablishment);
}
