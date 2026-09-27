import Image from 'next/image';
import {
  ArrowDown, ArrowRight, Blocks, Cable, Cctv, Droplets, Fan, Gauge, Handshake, Layers, PenTool,
  RadioTower, Search, Settings2, SlidersHorizontal, Smartphone, Waves, Activity
} from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import Indicator, { IndicatorLines } from '../../components/Indicator';
import Solutions from '../../components/agro/Solutions';
import MiCampo from '../../components/agro/MiCampo';
import Benefits from '../../components/agro/Benefits';
import Scenarios from '../../components/agro/Scenarios';

const heroIndicators = [
  { x: 15, y: 50, label: 'Tanque', value: '72%', icon: Gauge },
  { x: 43, y: 86, label: 'Válvula', value: 'ACTIVA', icon: Droplets },
  { x: 66, y: 74, label: 'Humedad', value: '41%', icon: Waves, side: 'left' },
  { x: 87, y: 49, label: 'Gateway', value: 'CONECTADO', icon: RadioTower, side: 'left', hub: true }
];

const steps = [
  { n: '01', icon: Search, title: 'Relevamos', desc: 'Entendemos el problema, las distancias, la energía disponible y cómo trabajás hoy.' },
  { n: '02', icon: PenTool, title: 'Diseñamos', desc: 'Definimos sensores, control, comunicaciones y alimentación adecuados para el caso.' },
  { n: '03', icon: Cable, title: 'Integramos', desc: 'Instalamos y configuramos el sistema para que los distintos componentes trabajen juntos.' },
  { n: '04', icon: Handshake, title: 'Acompañamos', desc: 'Probamos, ajustamos y dejamos una base preparada para crecer.' }
];

const mapPoints = [
  { cls: 'p1', icon: Gauge, label: 'Tanque' },
  { cls: 'p2', icon: Waves, label: 'Sensor' },
  { cls: 'p3', icon: Droplets, label: 'Riego' },
  { cls: 'p4', icon: Fan, label: 'Bomba' }
];

export default function AgroPage() {
  return (
    <main className="agro-page">
      <SiteHeader tone="agro" />

      <section className="agro-hero shell">
        <div className="hero-copy">
          <p className="kicker green">SISTEMAS DEL ESTE · AGRO</p>
          <h1>Control y tecnología <span>para el campo.</span></h1>
          <p className="lead">Medí, controlá y automatizá lo que pasa en tu establecimiento. Integramos riego, agua, sensores, conectividad y seguridad en soluciones pensadas para problemas reales.</p>
          <div className="hero-actions">
            <a className="primary green-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20el%20campo">
              Contanos qué necesitás <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
            <a className="text-link" href="#soluciones">Ver soluciones <ArrowDown aria-hidden="true" strokeWidth={2} /></a>
          </div>
          <ul className="hero-proof">
            <li><Blocks aria-hidden="true" strokeWidth={1.5} />MODULAR</li>
            <li><Smartphone aria-hidden="true" strokeWidth={1.5} />REMOTO</li>
            <li><Layers aria-hidden="true" strokeWidth={1.5} />ESCALABLE</li>
            <li><Handshake aria-hidden="true" strokeWidth={1.5} />SOPORTE LOCAL</li>
          </ul>
        </div>
        <figure className="hero-photo">
          <Image src="/images/agro-hero.png" alt="Establecimiento rural con cultivos, riego por goteo, tanque de agua y mástil con antena y panel solar" fill priority sizes="(max-width: 960px) 100vw, 56vw" className="hero-img" />
          <div className="photo-shade" aria-hidden="true" />
          <IndicatorLines hub={[87, 49]} points={heroIndicators.filter((i) => !i.hub).map((i) => [i.x, i.y])} />
          {heroIndicators.map((i, idx) => <Indicator key={i.label} {...i} delay={500 + idx * 220} />)}
          <figcaption className="visual-label"><small>UNA SOLUCIÓN CONECTADA</small><strong>Campo + datos + control</strong></figcaption>
        </figure>
      </section>

      <section className="statement-band">
        <Image src="/images/agro-invernaculo.png" alt="" fill sizes="100vw" className="band-img" />
        <div className="band-shade" aria-hidden="true" />
        <div className="shell band-inner reveal">
          <p className="kicker green">UNA IDEA SIMPLE</p>
          <h2>No empezamos por el equipo.<br /><span>Empezamos por el problema.</span></h2>
          <p>Analizamos qué necesitás medir, controlar o automatizar y combinamos la tecnología adecuada para resolverlo.</p>
          <ul className="verbs">
            <li><Activity aria-hidden="true" strokeWidth={1.5} />Medir</li>
            <li><SlidersHorizontal aria-hidden="true" strokeWidth={1.5} />Controlar</li>
            <li><Settings2 aria-hidden="true" strokeWidth={1.5} />Automatizar</li>
          </ul>
        </div>
      </section>

      <section className="map-placeholder shell">
        <div className="map-copy reveal">
          <p className="kicker green">ASÍ SE CONECTA TODO</p>
          <h2>Tu establecimiento,<br />en una sola vista.</h2>
          <p>Esta será la demostración interactiva del sistema: tanque, bomba, válvulas, sensores y conectividad trabajando como un conjunto.</p>
          <span className="coming">MAPA INTERACTIVO · EN DESARROLLO</span>
        </div>
        <div className="map-stage" aria-label="Diagrama: tanque, sensor, riego y bomba conectados a un gateway central">
          <div className="map-grid" aria-hidden="true" />
          <svg viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
            <path d="M300 200 L120 90 M300 200 L480 90 M300 200 L480 310 M300 200 L120 310" />
          </svg>
          <div className="map-center">
            <span className="map-pulse" aria-hidden="true" />
            <RadioTower aria-hidden="true" strokeWidth={1.75} />
            <small>GATEWAY</small>
          </div>
          {mapPoints.map(({ cls, icon: Icon, label }) => (
            <span key={label} className={`mp ${cls}`}>
              <Icon aria-hidden="true" strokeWidth={1.5} />{label}
            </span>
          ))}
        </div>
      </section>

      <Solutions />

      <section className="how-section">
        <div className="shell">
          <p className="kicker green">CÓMO TRABAJAMOS</p>
          <h2>De una necesidad concreta<br />a una solución funcionando.</h2>
          <ol className="steps">
            {steps.map(({ n, icon: Icon, title, desc }) => (
              <li key={n} className="reveal">
                <span className="step-icon"><Icon aria-hidden="true" strokeWidth={1.5} /></span>
                <b>{n}</b>
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MiCampo />
      <Benefits />
      <Scenarios />

      <section className="agro-cta">
        <div className="shell cta-inner">
          <div>
            <p className="kicker">SISTEMAS DEL ESTE · AGRO</p>
            <h2>¿Qué parte de tu campo<br />podríamos hacer más simple?</h2>
            <p>Contanos qué querés medir, controlar o automatizar. Nosotros pensamos cómo resolverlo.</p>
            <a className="primary dark-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20contarles%20una%20necesidad%20de%20mi%20campo">
              Hablar por WhatsApp <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>
          <ul className="cta-icons" aria-hidden="true">
            {[Droplets, Gauge, Waves, RadioTower, Cctv, Settings2].map((Icon, i) => <li key={i}><Icon strokeWidth={1.5} /></li>)}
          </ul>
        </div>
      </section>
      <footer className="simple-footer shell"><span>Sistemas del Este · 2026</span><span>098 342 839</span><span>San Carlos · Maldonado · Zona Este</span></footer>
    </main>
  );
}
