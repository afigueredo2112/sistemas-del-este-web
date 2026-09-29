import { getEstablishment as getEstablishmentFromProvider } from '../../lib/mi-sistema/provider';

export async function loadEstablishmentDashboard(id = 'chacra-demo') {
  const establishment = await getEstablishmentFromProvider(id);
  if (!establishment) return null;
  return establishment;
}

// Future commands will enter here and be delegated to an API provider.
// UI components must not talk directly to gateways, LoRa nodes or Supabase.
export async function executeDeviceAction() {
  throw new Error('Real device actions are disabled in demo mode.');
}
