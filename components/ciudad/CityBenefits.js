import { ShieldCheck, Wifi, Network, Headset } from 'lucide-react';
const benefits=[
 {icon:ShieldCheck,title:'Más tranquilidad',desc:'Accedé a cámaras y sistemas críticos con una instalación pensada para funcionar de forma confiable.'},
 {icon:Wifi,title:'Mejor cobertura',desc:'Una red diseñada para el espacio y la cantidad real de equipos, no una acumulación de parches.'},
 {icon:Network,title:'Infraestructura ordenada',desc:'Cableado y equipos identificados, mantenibles y preparados para futuras ampliaciones.'},
 {icon:Headset,title:'Un solo responsable',desc:'Diseño, instalación, configuración y soporte con una mirada integral sobre el sistema.'}
];
export default function CityBenefits(){return <section className="city-benefits"><div className="shell">
 <div className="section-head city-head"><div><p className="kicker blue">EL RESULTADO</p><h2>Menos problemas técnicos.<br/><span>Más control de tus espacios.</span></h2></div><p>La tecnología tiene sentido cuando queda bien integrada y simplifica el día a día.</p></div>
 <div className="city-benefit-grid">{benefits.map(({icon:Icon,title,desc},i)=><article key={title}><span><Icon strokeWidth={1.5}/></span><b>0{i+1}</b><h3>{title}</h3><p>{desc}</p></article>)}</div>
 </div></section>}