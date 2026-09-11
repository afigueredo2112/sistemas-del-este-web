import SiteHeader from '../../components/SiteHeader';

const services = [
  ['01','Riego inteligente','Automatizá válvulas, bombas y sectores. Programá, controlá y conocé el estado del sistema sin recorridas innecesarias.'],
  ['02','Agua y niveles','Conocé el nivel de tanques, depósitos y reservas. Sumá caudal y estado de bombas según la necesidad del establecimiento.'],
  ['03','Sensores y monitoreo','Medí humedad de suelo, temperatura, ambiente y otras variables para tomar decisiones con información real.'],
  ['04','Conectividad rural','Llevamos comunicación a puntos alejados, incluso donde el Wi‑Fi o el cableado convencional no son una solución práctica.'],
  ['05','Seguridad','Integramos cámaras y monitoreo para proteger infraestructura, equipos y puntos críticos del establecimiento.'],
  ['06','Soluciones a medida','Partimos del problema. Diseñamos una solución modular que pueda crecer junto con tu campo.']
];

const cases = [
  ['Una válvula lejos','Controlala sin tender cientos de metros de cable.'],
  ['Un tanque que no ves','Conocé su nivel antes de hacer una recorrida.'],
  ['Riego por sectores','Programá y accioná únicamente donde hace falta.'],
  ['Un punto sin energía','Evaluamos nodos de bajo consumo y alimentación solar.']
];

export default function AgroPage(){
 return <main className="agro-page">
  <SiteHeader tone="agro" />
  <section className="agro-hero shell">
   <div className="hero-copy">
    <p className="kicker green">SISTEMAS DEL ESTE · AGRO</p>
    <h1>Control y tecnología <span>para el campo.</span></h1>
    <p className="lead">Medí, controlá y automatizá lo que pasa en tu establecimiento. Integramos riego, agua, sensores, conectividad y seguridad en soluciones pensadas para problemas reales.</p>
    <div className="hero-actions"><a className="primary green-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20el%20campo">Contanos qué necesitás</a><a className="text-link" href="#soluciones">Ver soluciones ↓</a></div>
    <div className="hero-proof"><span>MODULAR</span><span>REMOTO</span><span>ESCALABLE</span><span>SOPORTE LOCAL</span></div>
   </div>
   <div className="hero-visual agro-landscape" aria-label="Representación de un establecimiento conectado">
    <div className="visual-label"><small>UNA SOLUCIÓN CONECTADA</small><strong>Campo + datos + control</strong></div>
    <div className="sun-orb"></div><div className="far-hill"></div><div className="near-field"></div><div className="farm-house"></div><div className="water-tank"></div><div className="crop-lines"></div>
    <span className="node n1">GATEWAY</span><span className="node n2">NIVEL</span><span className="node n3">RIEGO</span><span className="node n4">SENSOR</span>
   </div>
  </section>

  <section className="statement shell"><p className="kicker green">UNA IDEA SIMPLE</p><h2>No empezamos por el equipo.<br/><span>Empezamos por el problema.</span></h2><p>Analizamos qué necesitás medir, controlar o automatizar y combinamos la tecnología adecuada para resolverlo.</p></section>

  <section className="map-placeholder shell">
   <div className="map-copy"><p className="kicker green">ASÍ SE CONECTA TODO</p><h2>Tu establecimiento,<br/>en una sola vista.</h2><p>Esta será la demostración interactiva del sistema: tanque, bomba, válvulas, sensores y conectividad trabajando como un conjunto.</p><span className="coming">MAPA INTERACTIVO · EN DESARROLLO</span></div>
   <div className="map-stage"><div className="map-grid"></div><div className="map-center">SDE</div><span className="mp p1">Tanque</span><span className="mp p2">Sensor</span><span className="mp p3">Riego</span><span className="mp p4">Bomba</span><svg viewBox="0 0 600 340" aria-hidden="true"><path d="M300 170 L120 75 M300 170 L480 80 M300 170 L500 260 M300 170 L110 265"/></svg></div>
  </section>

  <section id="soluciones" className="services-section shell"><div className="section-head"><div><p className="kicker green">QUÉ PODEMOS HACER</p><h2>Una plataforma de soluciones.<br/><span>Distintos problemas.</span></h2></div><p>Empezá por lo que hoy necesitás. La misma arquitectura puede crecer incorporando nuevos puntos de medición, control y monitoreo.</p></div><div className="service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div></section>

  <section className="how-section"><div className="shell"><p className="kicker green">CÓMO TRABAJAMOS</p><h2>De una necesidad concreta<br/>a una solución funcionando.</h2><div className="steps"><article><b>01</b><h3>Relevamos</h3><p>Entendemos el problema, las distancias, la energía disponible y cómo trabajás hoy.</p></article><article><b>02</b><h3>Diseñamos</h3><p>Definimos sensores, control, comunicaciones y alimentación adecuados para el caso.</p></article><article><b>03</b><h3>Integramos</h3><p>Instalamos y configuramos el sistema para que los distintos componentes trabajen juntos.</p></article><article><b>04</b><h3>Acompañamos</h3><p>Probamos, ajustamos y dejamos una base preparada para crecer.</p></article></div></div></section>

  <section className="micampo shell"><div className="phone"><div className="phone-top">MI CAMPO <span>●</span></div><div className="phone-title">Buenas tardes</div><div className="phone-card active"><small>RIEGO</small><strong>Sector 1</strong><span>ACTIVO</span></div><div className="phone-row"><div><small>TANQUE</small><strong>72%</strong></div><div><small>HUMEDAD</small><strong>41%</strong></div></div><div className="phone-card"><small>SISTEMA</small><strong>5 nodos conectados</strong><span>TODO OK</span></div></div><div className="micampo-copy"><p className="kicker green">MI CAMPO · VISIÓN DE PLATAFORMA</p><h2>Toda la información de tu campo, <span>en un solo lugar.</span></h2><p>La evolución de la solución es reunir control, mediciones, estados y alertas en una experiencia simple desde el celular o la computadora.</p><ul><li>Estado de riego y sectores</li><li>Niveles y mediciones</li><li>Equipos y nodos conectados</li><li>Alertas y eventos importantes</li></ul><small className="concept-note">INTERFAZ CONCEPTUAL · PRODUCTO EN DESARROLLO</small></div></section>

  <section className="benefits"><div className="shell"><div className="section-head"><div><p className="kicker green">POR QUÉ HACERLO</p><h2>Menos recorridas.<br/><span>Más control.</span></h2></div><p>La tecnología importa cuando produce un resultado concreto en el trabajo diario.</p></div><div className="benefit-grid"><article><strong>01</strong><h3>Ahorrá agua</h3><p>Aplicá riego donde y cuando realmente hace falta.</p></article><article><strong>02</strong><h3>Ahorrá tiempo</h3><p>Reducí tareas y recorridas que pueden resolverse a distancia.</p></article><article><strong>03</strong><h3>Detectá antes</h3><p>Conocé estados y variables antes de que un problema crezca.</p></article><article><strong>04</strong><h3>Creá una base</h3><p>Empezá pequeño y sumá nuevas funciones cuando las necesites.</p></article></div></div></section>

  <section className="cases shell"><p className="kicker green">PROBLEMAS REALES</p><h2>¿Te pasa algo de esto?</h2><div className="case-grid">{cases.map(([t,d])=><article key={t}><i></i><h3>{t}</h3><p>{d}</p></article>)}</div></section>

  <section className="agro-cta"><div className="shell"><p className="kicker">SISTEMAS DEL ESTE · AGRO</p><h2>¿Qué parte de tu campo<br/>podríamos hacer más simple?</h2><p>Contanos qué querés medir, controlar o automatizar. Nosotros pensamos cómo resolverlo.</p><a className="primary dark-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20contarles%20una%20necesidad%20de%20mi%20campo">Hablar por WhatsApp →</a></div></section>
  <footer className="simple-footer shell"><span>Sistemas del Este · 2026</span><span>098 342 839</span><span>San Carlos · Maldonado · Zona Este</span></footer>
 </main>
}
