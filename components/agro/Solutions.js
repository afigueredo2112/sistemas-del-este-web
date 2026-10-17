import Image from 'next/image';
import { ArrowUpRight, Cctv, Droplets, Gauge, RadioTower, Waves, Workflow } from 'lucide-react';

const solutions = [
  {
    n: '01', title: 'Riego inteligente', icon: Droplets, img: '/images/sol-riego.png',
    alt: 'Válvula de riego instalada en el campo con líneas de goteo',
    chip: ['Válvula', 'ACTIVA'], keys: ['Válvulas', 'Bombas', 'Sectores'],
    desc: 'Automatizá válvulas, bombas y sectores. Programá, controlá y conocé el estado del sistema sin recorridas innecesarias.'
  },
  {
    n: '02', title: 'Agua y niveles', icon: Gauge, img: '/images/sol-agua.png',
    alt: 'Tanque de reserva de agua con sensor de nivel',
    chip: ['Tanque', '72%'], keys: ['Tanques', 'Depósitos', 'Caudal'],
    desc: 'Conocé el nivel de tanques, depósitos y reservas. Sumá caudal y estado de bombas según la necesidad del establecimiento.'
  },
  {
    n: '03', title: 'Sensores y monitoreo', icon: Waves, img: '/images/sol-sensores.png',
    alt: 'Sensor de humedad de suelo con nodo inalámbrico entre cultivos',
    chip: ['Humedad', '41%'], keys: ['Humedad', 'Temperatura', 'Ambiente'],
    desc: 'Medí humedad de suelo, temperatura, ambiente y otras variables para tomar decisiones con información real.'
  },
  {
    n: '04', title: 'Conectividad rural', icon: RadioTower, img: '/images/sol-conectividad.png',
    alt: 'Mástil con antena de enlace y panel solar en el campo',
    chip: ['Gateway', 'CONECTADO'], keys: ['Enlaces', 'Puntos alejados', 'Sin cableado'],
    desc: 'Llevamos comunicación a puntos alejados, incluso donde el Wi‑Fi o el cableado convencional no son una solución práctica.'
  },
  {
    n: '05', title: 'Seguridad', icon: Cctv, img: '/images/sol-seguridad.png',
    alt: 'Cámara de seguridad instalada en un poste junto a un galpón rural',
    chip: ['Cámara', 'EN LÍNEA'], keys: ['Cámaras', 'Monitoreo', 'Puntos críticos'],
    desc: 'Integramos cámaras y monitoreo para proteger infraestructura, equipos y puntos críticos del establecimiento.'
  },
  {
    n: '06', title: 'Soluciones a medida', icon: Workflow, img: '/images/sol-medida.png',
    alt: 'Tablero de control eléctrico instalado en el campo',
    chip: ['Sistema', 'OK'], keys: ['Modular', 'Integración', 'Escalable'],
    desc: 'Partimos del problema. Diseñamos una solución modular que pueda crecer junto con tu campo.'
  }
];

export default function Solutions() {
  return (
    <section id="soluciones" className="services-section shell">
      <div className="section-head">
        <div>
          <p className="kicker green">QUÉ PODEMOS HACER</p>
          <h2>Una plataforma de soluciones.<br /><span>Distintos problemas.</span></h2>
        </div>
        <p>Empezá por lo que hoy necesitás. La misma arquitectura puede crecer incorporando nuevos puntos de medición, control y monitoreo.</p>
      </div>

      <nav className="sol-index" aria-label="Soluciones">
        {solutions.map(({ n, title, icon: Icon }) => (
          <a key={n} href={`#sol-${n}`}>
            <Icon aria-hidden="true" strokeWidth={1.5} />
            <span>{title}</span>
          </a>
        ))}
      </nav>

      <div className="sol-rows">
        {solutions.map(({ n, title, icon: Icon, img, alt, chip, keys, desc }, i) => (
          <article key={n} id={`sol-${n}`} className={`sol-row reveal ${i % 2 ? 'is-reversed' : ''}`}>
            <figure className="sol-media">
              <Image src={img} alt={alt} fill sizes="(max-width: 860px) 100vw, 45vw" className="sol-img" />
              <div className="photo-shade soft" aria-hidden="true" />
              <span className="sol-chip">
                <i aria-hidden="true" />
                {chip[0]} <b>{chip[1]}</b>
              </span>
            </figure>
            <div className="sol-content">
              <div className="sol-top">
                <span className="sol-icon"><Icon aria-hidden="true" strokeWidth={1.5} /></span>
                <span className="sol-num">{n}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="sol-keys">
                {keys.map((k) => <li key={k}>{k}</li>)}
              </ul>
              <a
                className="sol-link"
                href={`https://wa.me/59898342839?text=${encodeURIComponent(`Hola, quiero consultar por ${title.toLowerCase()}`)}`}
              >
                Consultar <ArrowUpRight aria-hidden="true" strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
