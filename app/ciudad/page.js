import Image from 'next/image';
import { ArrowDown, ArrowRight, Cable, Cctv, Headset, KeyRound, MessageCircle, Network, Search, PenTool, Wrench, Wifi, Settings2 } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import Indicator, { IndicatorLines } from '../../components/Indicator';
import CitySolutions from '../../components/ciudad/CitySolutions';
import CityBenefits from '../../components/ciudad/CityBenefits';
import CityScenarios from '../../components/ciudad/CityScenarios';

const indicators=[
 {x:48,y:38,label:'Cámara',value:'EN LÍNEA',icon:Cctv,side:'left'},
 {x:63,y:55,label:'Wi‑Fi',value:'CONECTADO',icon:Wifi,side:'left',hub:true},
 {x:88,y:50,label:'Red',value:'OK',icon:Network,side:'left'}
];
const strip=[{icon:Cctv,label:'CÁMARAS'},{icon:Wifi,label:'WI‑FI'},{icon:Network,label:'REDES'},{icon:KeyRound,label:'ACCESOS'},{icon:Headset,label:'SOPORTE'}];
const steps=[
 {n:'01',icon:Search,title:'Relevamos',desc:'Entendemos el espacio, el problema, la infraestructura existente y cómo necesitás usarla.'},
 {n:'02',icon:PenTool,title:'Diseñamos',desc:'Definimos cobertura, equipos, cableado, conectividad y seguridad según el caso.'},
 {n:'03',icon:Wrench,title:'Instalamos',desc:'Montamos y ordenamos la infraestructura cuidando terminaciones y mantenibilidad.'},
 {n:'04',icon:Settings2,title:'Configuramos',desc:'Integramos los equipos y dejamos accesos, red y funciones correctamente operativos.'},
 {n:'05',icon:Headset,title:'Acompañamos',desc:'Damos soporte y dejamos una base que pueda ampliarse cuando cambien tus necesidades.'}
];

export default function CiudadPage(){return <main className="city-page">
 <SiteHeader tone="city"/>
 <section className="city-hero shell">
  <div><p className="kicker blue">SISTEMAS DEL ESTE · CIUDAD</p><h1>Seguridad y conectividad <span>para tus espacios.</span></h1>
   <p className="lead">Diseñamos e integramos cámaras, Wi‑Fi, redes, enlaces, accesos y soporte para hogares y empresas. Una solución pensada como conjunto, no equipos aislados.</p>
   <div className="hero-actions"><a className="primary blue-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20mi%20casa%20o%20empresa">Contanos qué necesitás <ArrowRight strokeWidth={2}/></a><a className="text-link" href="#soluciones-ciudad">Ver soluciones <ArrowDown strokeWidth={2}/></a></div>
  </div>
  <div className="city-preview"><figure className="city-photo"><Image src="/images/home-ciudad.png" alt="Vivienda moderna con cámara de seguridad y conectividad" fill priority sizes="(max-width:960px) 100vw,50vw" className="hero-img"/><div className="photo-shade"/><IndicatorLines tone="blue" hub={[63,55]} points={indicators.filter(i=>!i.hub).map(i=>[i.x,i.y])}/>{indicators.map((i,idx)=><Indicator key={i.label} {...i} tone="blue" delay={400+idx*200}/>)}</figure>
   <div className="city-preview-body"><p className="kicker blue">UNA SOLUCIÓN CONECTADA</p><h2>Seguridad + red + control.</h2><p>Diseñamos cada parte para que el conjunto funcione y pueda crecer sin empezar de nuevo.</p></div>
  </div>
 </section>
 <section className="city-strip"><ul className="shell">{strip.map(({icon:Icon,label})=><li key={label}><Icon strokeWidth={1.5}/>{label}</li>)}</ul></section>

 <section className="city-statement city-statement-photo"><div className="city-statement-bg" aria-hidden="true"/><div className="shell"><p className="kicker blue">UNA IDEA SIMPLE</p><h2>No empezamos por venderte un equipo.<br/><span>Empezamos por lo que necesitás resolver.</span></h2><p>Puede ser una cámara, una zona sin Wi‑Fi o una red completa. Relevamos el problema y combinamos la tecnología necesaria para dejar una solución funcionando.</p><ul><li><Search/>Entender</li><li><PenTool/>Diseñar</li><li><Settings2/>Integrar</li></ul></div></section>

 <section className="city-audiences shell">
  <div className="section-head city-head"><div><p className="kicker blue">TECNOLOGÍA DONDE LA NECESITÁS</p><h2>De tu casa a tu empresa.<br/><span>Diseñamos para cada espacio.</span></h2></div><p>La solución cambia según el lugar, el uso y las personas. Por eso partimos del entorno real antes de elegir la tecnología.</p></div>
  <div className="city-audience-grid">
   <article className="aud-home"><div><small>HOGARES Y RESIDENCIAS</small><h3>Seguridad, Wi‑Fi y control sin complicaciones.</h3><p>Cobertura pensada para vivir tranquilo y conectado.</p></div></article>
   <article className="aud-shop"><div><small>COMERCIOS</small><h3>Tu negocio conectado y protegido.</h3><p>Cámaras, red y acceso remoto para el día a día.</p></div></article>
   <article className="aud-office"><div><small>EMPRESAS Y OFICINAS</small><h3>Infraestructura que acompaña el trabajo.</h3><p>Redes ordenadas, Wi‑Fi estable y una base preparada para crecer.</p></div></article>
   <article className="aud-building"><div><small>EDIFICIOS Y ESPACIOS COMUNES</small><h3>Accesos y conectividad compartida.</h3><p>Soluciones para edificios, complejos, barrios y áreas comunes.</p></div></article>
  </div>
 </section>

 <CitySolutions/>

 <section className="city-how"><div className="shell"><p className="kicker blue">SERVICIO INTEGRAL</p><h2>Del problema a una solución<br/>funcionando.</h2><ol>{steps.map(({n,icon:Icon,title,desc})=><li key={n}><div className="city-step-marker"><span><Icon strokeWidth={1.5}/></span><b>{n}</b></div><div className="city-step-copy"><h3>{title}</h3><p>{desc}</p></div></li>)}</ol></div></section>

 <CityBenefits/>
 <CityScenarios/>

 <section className="city-integral"><div className="shell city-integral-inner"><div><p className="kicker blue">UNA SOLA MIRADA</p><h2>Tu tecnología debería trabajar como un sistema.</h2><p>Cámaras, conectividad, red y control pueden formar parte de una misma solución. Nosotros nos ocupamos de diseñar cómo encajan.</p></div><div className="city-system-map"><span><Cctv/><small>SEGURIDAD</small></span><span><Wifi/><small>WI‑FI</small></span><strong>SdE</strong><span><Network/><small>RED</small></span><span><Cable/><small>ENLACES</small></span></div></div></section>

 <section className="city-cta"><div className="shell cta-inner"><div><p className="kicker">SISTEMAS DEL ESTE · CIUDAD</p><h2>¿Qué problema tecnológico<br/>querés dejar resuelto?</h2><p>Contanos qué necesitás mejorar en tu casa, comercio o empresa. Nosotros pensamos la solución completa.</p><a className="primary dark-btn" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20contarles%20una%20necesidad%20para%20mi%20casa%20o%20empresa">Hablar por WhatsApp <MessageCircle strokeWidth={2}/></a></div><ul className="cta-icons">{[Cctv,Wifi,Network,KeyRound,Headset,Settings2].map((Icon,i)=><li key={i}><Icon strokeWidth={1.5}/></li>)}</ul></div></section>
 <footer className="simple-footer shell"><span>Sistemas del Este · 2026</span><span>098 342 839</span><span>San Carlos · Maldonado · Zona Este</span></footer>
 </main>}