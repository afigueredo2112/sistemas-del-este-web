import { Cctv, Droplets, Network, RadioTower, Settings2, Waves, Wifi, Wrench, Gauge } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import Portal from '../components/home/Portal';
import SiteFooter, { AboutSection } from '../components/SiteFooter';

const capabilities = [
  { icon: Droplets, label: 'Riego' },
  { icon: Gauge, label: 'Agua' },
  { icon: Waves, label: 'Sensores' },
  { icon: RadioTower, label: 'Conectividad' },
  { icon: Cctv, label: 'Seguridad' },
  { icon: Settings2, label: 'Automatización' }
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="home-hero shell">
        <div className="home-copy">
          <p className="kicker">SISTEMAS DEL ESTE · SAN CARLOS, MALDONADO</p>
          <h1>Tecnología aplicada a <span>problemas reales.</span></h1>
          <p className="lead">Diseñamos soluciones de automatización, conectividad, monitoreo y seguridad para el campo, hogares y empresas.</p>
          <ul className="capability-strip" aria-label="Qué hacemos">
            {capabilities.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" strokeWidth={1.5} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="portal-grid">
          <Portal
            href="/agro"
            tone="green"
            name="AGRO"
            tagline="Control y tecnología para el campo."
            cta="Conocé Agro"
            image="/images/home-agro.png"
            alt="Establecimiento rural uruguayo con casa, molino y tanque de reserva de agua"
            hub={[70, 30]}
            indicators={[
              { x: 70, y: 30, label: 'Gateway', value: 'CONECTADO', icon: RadioTower, side: 'left', hub: true },
              { x: 81, y: 52, label: 'Tanque', value: '72%', icon: Gauge, side: 'left' },
              { x: 30, y: 70, label: 'Riego', value: 'ACTIVO', icon: Droplets }
            ]}
            tags={[
              { icon: Droplets, label: 'Riego' },
              { icon: Waves, label: 'Sensores' },
              { icon: RadioTower, label: 'Conectividad' },
              { icon: Cctv, label: 'Seguridad' }
            ]}
          />
          <Portal
            href="/ciudad"
            tone="blue"
            name="CIUDAD"
            tagline="Seguridad y conectividad para tus espacios."
            cta="Conocé Ciudad"
            image="/images/home-ciudad.png"
            alt="Vivienda moderna en Maldonado al anochecer con cámara de seguridad en la fachada"
            hub={[63, 55]}
            indicators={[
              { x: 48, y: 38, label: 'Cámara', value: 'EN LÍNEA', icon: Cctv, side: 'left' },
              { x: 63, y: 55, label: 'Wi‑Fi', value: 'CONECTADO', icon: Wifi, side: 'left', hub: true },
              { x: 88, y: 50, label: 'Red', value: 'OK', icon: Network, side: 'left' }
            ]}
            tags={[
              { icon: Cctv, label: 'Cámaras' },
              { icon: Network, label: 'Redes' },
              { icon: Wrench, label: 'Instalaciones' },
              { icon: Settings2, label: 'Control' }
            ]}
          />
        </div>
      </section>
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
