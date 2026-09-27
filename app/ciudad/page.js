import Image from 'next/image';
import { ArrowRight, Cctv, Headset, Network, Settings2, Wifi, Wrench } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import Indicator, { IndicatorLines } from '../../components/Indicator';

const indicators = [
  { x: 48, y: 38, label: 'Cámara', value: 'EN LÍNEA', icon: Cctv, side: 'left' },
  { x: 63, y: 55, label: 'Wi‑Fi', value: 'CONECTADO', icon: Wifi, side: 'left', hub: true },
  { x: 88, y: 50, label: 'Red', value: 'OK', icon: Network, side: 'left' }
];

const strip = [
  { icon: Cctv, label: 'CÁMARAS' },
  { icon: Network, label: 'REDES' },
  { icon: Wrench, label: 'INSTALACIONES' },
  { icon: Settings2, label: 'CONTROL' },
  { icon: Headset, label: 'SOPORTE' }
];

export default function CiudadPage() {
  return (
    <main className="city-page">
      <SiteHeader tone="city" />
      <section className="city-hero shell">
        <div>
          <p className="kicker blue">SISTEMAS DEL ESTE · CIUDAD</p>
          <h1>Seguridad y conectividad <span>para tus espacios.</span></h1>
          <p className="lead">Cámaras, redes, Wi‑Fi, instalaciones y control para hogares y empresas. Diseñamos tecnología confiable alrededor de lo que realmente necesitás.</p>
          <a className="primary blue-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20mi%20casa%20o%20empresa">
            Contanos qué necesitás <ArrowRight aria-hidden="true" strokeWidth={2} />
          </a>
        </div>
        <div className="city-preview">
          <figure className="city-photo">
            <Image src="/images/home-ciudad.png" alt="Vivienda moderna con cámara de seguridad y conectividad" fill priority sizes="(max-width: 960px) 100vw, 50vw" className="hero-img" />
            <div className="photo-shade" aria-hidden="true" />
            <IndicatorLines tone="blue" hub={[63, 55]} points={indicators.filter((i) => !i.hub).map((i) => [i.x, i.y])} />
            {indicators.map((i, idx) => <Indicator key={i.label} {...i} tone="blue" delay={400 + idx * 200} />)}
          </figure>
          <div className="city-preview-body">
            <p className="kicker blue">CIUDAD INTERACTIVA</p>
            <h2>La misma experiencia,<br />pensada para tus espacios.</h2>
            <p>La próxima etapa desarrollará esta vertical con la misma profundidad comercial e interactiva que Agro.</p>
          </div>
        </div>
      </section>
      <section className="city-strip">
        <ul className="shell">
          {strip.map(({ icon: Icon, label }) => (
            <li key={label}><Icon aria-hidden="true" strokeWidth={1.5} />{label}</li>
          ))}
        </ul>
      </section>
      <footer className="simple-footer shell"><span>Sistemas del Este · 2026</span><span>098 342 839</span><span>Maldonado y Zona Este</span></footer>
    </main>
  );
}
