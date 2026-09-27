import { ArrowUpRight, Cctv, Wifi, Network, Cable, KeyRound, Wrench } from 'lucide-react';

const solutions=[
 {n:'01',icon:Cctv,title:'Seguridad y cámaras',desc:'Diseñamos sistemas de videovigilancia para hogares, comercios y empresas, con acceso remoto y una instalación pensada para cubrir los puntos que realmente importan.',keys:['Cámaras IP','Grabación','Acceso remoto']},
 {n:'02',icon:Wifi,title:'Wi‑Fi bien diseñado',desc:'Mejoramos cobertura, estabilidad y capacidad. No se trata de sumar repetidores: relevamos el espacio y diseñamos la red según el uso real.',keys:['Cobertura','Roaming','Rendimiento']},
 {n:'03',icon:Network,title:'Redes e infraestructura',desc:'Cableado, switches, racks y organización de red para que la infraestructura quede clara, mantenible y preparada para crecer.',keys:['Cableado','Switching','Racks']},
 {n:'04',icon:Cable,title:'Enlaces entre puntos',desc:'Conectamos edificios, galpones, oficinas u otros puntos cuando llevar cable no es práctico, evaluando la tecnología adecuada para cada distancia.',keys:['Enlaces','Punto a punto','Integración']},
 {n:'05',icon:KeyRound,title:'Acceso y control',desc:'Integramos control de acceso, porteros, alarmas y otros sistemas para centralizar funciones de seguridad y operación.',keys:['Accesos','Porteros','Alarmas']},
 {n:'06',icon:Wrench,title:'Soporte y soluciones a medida',desc:'Diagnosticamos, integramos y resolvemos necesidades tecnológicas que no encajan en una caja cerrada. Una sola mirada sobre toda la solución.',keys:['Soporte','Integración','Escalable']}
];
export default function CitySolutions(){return <section id="soluciones-ciudad" className="city-solutions shell">
 <div className="section-head city-head"><div><p className="kicker blue">QUÉ PODEMOS RESOLVER</p><h2>Una solución completa.<br/><span>No una suma de equipos.</span></h2></div><p>Podemos empezar por una cámara o un problema de Wi‑Fi y terminar resolviendo la infraestructura completa, sin obligarte a coordinar proveedores separados.</p></div>
 <div className="city-solution-grid">{solutions.map(({n,icon:Icon,title,desc,keys})=><article key={n} className="city-solution reveal">
   <div className="city-sol-icon"><Icon strokeWidth={1.5}/><span>{n}</span></div><h3>{title}</h3><p>{desc}</p>
   <ul>{keys.map(k=><li key={k}>{k}</li>)}</ul>
   <a href={`https://wa.me/59898342839?text=${encodeURIComponent('Hola, quiero consultar por '+title.toLowerCase())}`}>Consultar <ArrowUpRight strokeWidth={2}/></a>
 </article>)}</div>
 </section>}