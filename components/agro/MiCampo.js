import { Bell, BellRing, Check, Droplets, Gauge, House, LayoutGrid, Waves, Waypoints } from 'lucide-react';

const RING = 2 * Math.PI * 30;

function Phone() {
  return (
    <div className="phone-wrap">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone" role="img" aria-label="Interfaz conceptual de Mi Campo: riego sector 1 activo, tanque 72%, humedad 41%, 5 nodos conectados, sistema OK">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-top">
          <span>MI CAMPO</span>
          <span className="live"><i />EN LÍNEA</span>
        </div>
        <div className="phone-title">Buenas tardes</div>

        <div className="pc pc-active">
          <div className="pc-head">
            <span className="pc-ico"><Droplets strokeWidth={1.75} /></span>
            <div><small>RIEGO</small><strong>Sector 1</strong></div>
            <span className="pc-badge"><i />ACTIVO</span>
          </div>
          <div className="sectors" aria-hidden="true"><span className="on" /><span /><span /><span /></div>
        </div>

        <div className="pc-row">
          <div className="pc">
            <small>TANQUE</small>
            <div className="ring">
              <svg viewBox="0 0 72 72" aria-hidden="true">
                <circle cx="36" cy="36" r="30" className="ring-bg" />
                <circle cx="36" cy="36" r="30" className="ring-fg" strokeDasharray={RING} strokeDashoffset={RING * 0.28} />
              </svg>
              <strong>72%</strong>
            </div>
          </div>
          <div className="pc">
            <small>HUMEDAD</small>
            <div className="hum">
              <Waves strokeWidth={1.75} aria-hidden="true" />
              <strong>41%</strong>
            </div>
            <div className="bar" aria-hidden="true"><span style={{ width: '41%' }} /></div>
          </div>
        </div>

        <div className="pc">
          <div className="pc-head">
            <span className="pc-ico"><Waypoints strokeWidth={1.75} /></span>
            <div><small>SISTEMA</small><strong>5 nodos conectados</strong></div>
            <span className="pc-ok"><Check strokeWidth={2.5} />OK</span>
          </div>
          <div className="nodes" aria-hidden="true">{[0, 1, 2, 3, 4].map((n) => <i key={n} />)}</div>
        </div>

        <div className="phone-tabs" aria-hidden="true">
          <House strokeWidth={1.75} className="on" />
          <Droplets strokeWidth={1.75} />
          <LayoutGrid strokeWidth={1.75} />
          <Bell strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: Droplets, label: 'Estado de riego y sectores' },
  { icon: Gauge, label: 'Niveles y mediciones' },
  { icon: Waypoints, label: 'Equipos y nodos conectados' },
  { icon: BellRing, label: 'Alertas y eventos importantes' }
];

export default function MiCampo() {
  return (
    <section className="micampo-section">
      <div className="micampo shell">
        <Phone />
        <div className="micampo-copy reveal">
          <p className="kicker green">MI CAMPO · VISIÓN DE PLATAFORMA</p>
          <h2>Toda la información de tu campo, <span>en un solo lugar.</span></h2>
          <p>La evolución de la solución es reunir control, mediciones, estados y alertas en una experiencia simple desde el celular o la computadora.</p>
          <ul>
            {features.map(({ icon: Icon, label }) => (
              <li key={label}><span><Icon aria-hidden="true" strokeWidth={1.5} /></span>{label}</li>
            ))}
          </ul>
          <small className="concept-note">INTERFAZ CONCEPTUAL · PRODUCTO EN DESARROLLO</small>
        </div>
      </div>
    </section>
  );
}
