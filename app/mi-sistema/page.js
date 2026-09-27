import { getEstablishment } from '../../lib/mi-sistema/provider';
import MiSistemaDashboard from '../../components/mi-sistema/MiSistemaDashboard';

export const metadata = {
  title: 'Mi Sistema · Sistemas del Este',
  description: 'Panel demostrativo de monitoreo y control de Sistemas del Este.'
};

export default async function MiSistemaPage() {
  const establishment = await getEstablishment();
  return <MiSistemaDashboard initialData={establishment} />;
}
