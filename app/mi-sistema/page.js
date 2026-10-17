import { loadEstablishmentDashboard } from '../../services/mi-sistema/establishmentService';
import MiSistemaDashboard from '../../components/mi-sistema/MiSistemaDashboard';

export const metadata = {
  title: 'Mi Sistema · Sistemas del Este',
  description: 'Panel demostrativo de monitoreo y control de Sistemas del Este.'
};

export default async function MiSistemaPage() {
  const establishment = await loadEstablishmentDashboard();
  return <MiSistemaDashboard initialData={establishment} />;
}
