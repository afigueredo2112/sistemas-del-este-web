import { BellRing, Blocks, Clock, Droplets } from 'lucide-react';

function WaterViz() {
  return (
    <div className="bviz bviz-water" aria-hidden="true">
      {[0.35, 1, 0.35, 0.35, 1, 0.35].map((o, i) => (
        <span key={i} className={o === 1 ? 'on' : ''}><i /></span>
      ))}
    </div>
  );
}

function TimeViz() {
  return (
    <svg className="bviz" viewBox="0 0 200 90" aria-hidden="true">
      <path className="bv-faint" d="M14 70 C 50 10, 90 90, 120 40 S 170 10, 186 60" />
      {[[14, 70], [62, 45], [120, 40], [186, 60]].map(([x, y]) => <circle key={x} className="bv-faint-dot" cx={x} cy={y} r="3.5" />)}
      <line className="bv-strong" x1="14" y1="78" x2="186" y2="78" />
      <circle className="bv-dot" cx="14" cy="78" r="5" />
      <circle className="bv-dot" cx="186" cy="78" r="5" />
    </svg>
  );
}

function DetectViz() {
  return (
    <svg className="bviz" viewBox="0 0 200 90" aria-hidden="true">
      <line className="bv-threshold" x1="0" y1="22" x2="200" y2="22" />
      <path className="bv-strong" d="M0 78 C 40 76, 70 70, 100 52 S 150 30, 200 12" />
      <circle className="bv-alert" cx="100" cy="52" r="6" />
      <circle className="bv-alert-ring" cx="100" cy="52" r="13" />
    </svg>
  );
}

function BaseViz() {
  return (
    <div className="bviz bviz-base" aria-hidden="true">
      <span style={{ height: '30%' }} />
      <span style={{ height: '55%' }} />
      <span style={{ height: '80%' }} className="ghost" />
      <span style={{ height: '100%' }} className="ghost" />
    </div>
  );
}

const benefits = [
  { n: '01', icon: Droplets, title: 'Ahorrá agua', desc: 'Aplicá riego donde y cuando realmente hace falta.', viz: WaterViz, cap: 'Sólo los sectores necesarios' },
  { n: '02', icon: Clock, title: 'Ahorrá tiempo', desc: 'Reducí tareas y recorridas que pueden resolverse a distancia.', viz: TimeViz, cap: 'Recorrida vs. control remoto' },
  { n: '03', icon: BellRing, title: 'Detectá antes', desc: 'Conocé estados y variables antes de que un problema crezca.', viz: DetectViz, cap: 'Alerta antes del límite' },
  { n: '04', icon: Blocks, title: 'Creá una base', desc: 'Empezá pequeño y sumá nuevas funciones cuando las necesites.', viz: BaseViz, cap: 'Crecé por módulos' }
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="kicker green">POR QUÉ HACERLO</p>
            <h2>Menos recorridas.<br /><span>Más control.</span></h2>
          </div>
          <p>La tecnología importa cuando produce un resultado concreto en el trabajo diario.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ n, icon: Icon, title, desc, viz: Viz, cap }) => (
            <article key={n} className="reveal">
              <div className="b-visual">
                <Viz />
                <small>{cap}</small>
              </div>
              <div className="b-title">
                <span className="b-icon"><Icon aria-hidden="true" strokeWidth={1.5} /></span>
                <h3>{title}</h3>
              </div>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
