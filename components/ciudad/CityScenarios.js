import { Building2, Cctv, Wifi, RadioTower, Network, Smartphone } from 'lucide-react';
const cases=[
 {icon:Cctv,title:'Quiero ver mi casa o negocio cuando no estoy',desc:'Diseñamos la cobertura, instalamos las cámaras y dejamos el acceso remoto funcionando.',left:'ESPACIO',right:'ACCESO REMOTO',L:Building2,R:Smartphone},
 {icon:Wifi,title:'El Wi‑Fi no llega bien a todos lados',desc:'Relevamos cobertura y capacidad para diseñar una red estable en lugar de sumar repetidores sin criterio.',left:'RED',right:'COBERTURA',L:Network,R:Wifi},
 {icon:RadioTower,title:'Necesito conectar dos edificios',desc:'Evaluamos distancia y visibilidad para resolver el enlace sin una obra de cableado innecesaria.',left:'PUNTO A',right:'PUNTO B',L:Building2,R:Building2},
 {icon:Network,title:'La red del negocio creció desordenada',desc:'Ordenamos infraestructura, cableado y equipos para recuperar control y dejar una base escalable.',left:'HOY',right:'ORDENADO',L:Network,R:Network}
];
export default function CityScenarios(){return <section className="city-cases shell"><p className="kicker blue">PROBLEMAS REALES</p><h2>Empezamos por lo que necesitás resolver.</h2><div className="city-case-grid">{cases.map(({icon:Icon,title,desc,left,right,L,R})=><article key={title}>
 <div className="city-scene"><div><L strokeWidth={1.5}/><small>{left}</small></div><span><i/><i/><i/></span><div className="on"><R strokeWidth={1.5}/><small>{right}</small></div></div>
 <div className="case-text city-case-text"><Icon strokeWidth={1.5}/><h3>{title}</h3><p>{desc}</p></div>
 </article>)}</div></section>}