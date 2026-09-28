import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function AboutSection(){
 return <section className="about-sde"><div className="shell about-sde-inner">
  <div><p className="kicker">SISTEMAS DEL ESTE</p><h2>Experiencia técnica aplicada a <span>soluciones reales.</span></h2></div>
  <div className="about-sde-copy"><p>Contamos con más de 10 años de experiencia trabajando con infraestructura IT, redes, conectividad y soporte tecnológico.</p><p>Hoy aplicamos esa experiencia para diseñar e integrar soluciones de automatización, monitoreo, conectividad y seguridad para el campo, hogares y empresas, con una mirada práctica, escalable y cercana.</p><div className="about-sde-tags"><span>+10 AÑOS DE EXPERIENCIA</span><span>SOPORTE LOCAL</span><span>SOLUCIONES A MEDIDA</span></div></div>
 </div></section>
}

export function FloatingWhatsApp(){
 return <a className="floating-whatsapp" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20de%20Sistemas%20del%20Este" target="_blank" rel="noreferrer" aria-label="Consultar a Sistemas del Este por WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
}

export default function SiteFooter(){
 return <footer className="site-footer"><div className="shell site-footer-inner">
  <div className="footer-brand"><strong>SISTEMAS<br/><span>DEL ESTE</span></strong><p>Tecnología aplicada a problemas reales.</p></div>
  <div className="footer-contact"><a href="tel:+59898342839"><Phone/>098 342 839</a><a href="mailto:sistemasdeleste.info@gmail.com"><Mail/>sistemasdeleste.info@gmail.com</a><a href="https://www.instagram.com/sistemasdeleste/" target="_blank" rel="noreferrer"><Instagram/>@sistemasdeleste</a><span><MapPin/>San Carlos · Maldonado · Zona Este</span></div>
 </div><div className="shell footer-bottom"><span>© 2026 Sistemas del Este</span><span>Agro · Ciudad · Tecnología</span></div><FloatingWhatsApp/></footer>
}