import { Droplets, Gauge, House, LayoutGrid, RadioTower, SolarPanel, Zap, Smartphone } from 'lucide-react';

function ValveScene() {
  return (
    <div className="scene scene-valve" aria-hidden="true">
      <div className="sc-node"><House strokeWidth={1.5} /><small>Origen</small></div>
      <div className="sc-link">
        <span className="sc-dash" />
        <span className="sc-waves"><i /><i /><i /></span>
        <small>cientos de metros · sin cable</small>
      </div>
      <div className="sc-node on"><Droplets strokeWidth={1.5} /><small>Válvula</small></div>
    </div>
  );
}

function TankScene() {
  return (
    <div className="scene scene-tank" aria-hidden="true">
      <div className="tank">
        <span className="tank-fill" style={{ height: '72%' }} />
        <span className="tank-ticks"><i /><i /><i /><i /></span>
      </div>
      <div className="tank-read">
        <Smartphone strokeWidth={1.5} />
        <small>NIVEL</small>
        <strong>72%</strong>
      </div>
    </div>
  );
}

function SectorsScene() {
  const sectors = [['S1', true], ['S2', false], ['S3', true], ['S4', false]];
  return (
    <div className="scene scene-sectors" aria-hidden="true">
      {sectors.map(([s, on]) => (
        <span key={s} className={on ? 'on' : ''}>
          <b>{s}</b>
          <small>{on ? 'RIEGO' : 'EN ESPERA'}</small>
        </span>
      ))}
    </div>
  );
}

function SolarScene() {
  return (
    <div className="scene scene-solar" aria-hidden="true">
      <div className="sc-node"><SolarPanel strokeWidth={1.5} /><small>Panel solar</small></div>
      <Zap className="sc-zap" strokeWidth={1.75} />
      <div className="sc-node on"><RadioTower strokeWidth={1.5} /><small>Nodo</small></div>
      <span className="sc-waves right"><i /><i /><i /></span>
    </div>
  );
}

const cases = [
  { title: 'Una válvula lejos', desc: 'Controlala sin tender cientos de metros de cable.', icon: Droplets, scene: ValveScene },
  { title: 'Un tanque que no ves', desc: 'Conocé su nivel antes de hacer una recorrida.', icon: Gauge, scene: TankScene },
  { title: 'Riego por sectores', desc: 'Programá y accioná únicamente donde hace falta.', icon: LayoutGrid, scene: SectorsScene },
  { title: 'Un punto sin energía', desc: 'Evaluamos nodos de bajo consumo y alimentación solar.', icon: SolarPanel, scene: SolarScene }
];

export default function Scenarios() {
  return (
    <section className="cases shell">
      <p className="kicker green">PROBLEMAS REALES</p>
      <h2>¿Te pasa algo de esto?</h2>
      <div className="case-grid">
        {cases.map(({ title, desc, icon: Icon, scene: Scene }) => (
          <article key={title} className="reveal">
            <Scene />
            <div className="case-text">
              <Icon aria-hidden="true" strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
