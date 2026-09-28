import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function AboutSection(){
 return <section className="about-sde"><div className="shell about-sde-inner">
  <div><p className="kicker">SISTEMAS DEL ESTE</p><h2>Experiencia técnica aplicada a <span>soluciones reales.</span></h2></div>
  <div className="about-sde-copy"><p>Contamos con más de 10 años de experiencia trabajando con infraestructura IT, redes, conectividad y soporte tecnológico.</p><p>Hoy aplicamos esa experiencia para diseñar e integrar soluciones de automatización, monitoreo, conectividad y seguridad para el campo, hogares y empresas, con una mirada práctica, escalable y cercana.</p><div className="about-sde-tags"><span>+10 AÑOS DE EXPERIENCIA</span><span>SOPORTE LOCAL</span><span>SOLUCIONES A MEDIDA</span></div></div>
 </div></section>
}

export default function SiteFooter(){
 return <footer className="site-footer"><div className="shell site-footer-inner">
  <div className="footer-brand"><strong>SISTEMAS<br/><span>DEL ESTE</span></strong><p>Tecnología aplicada a problemas reales.</p></div>
  <div className="footer-contact"><a href="tel:+59898342839"><Phone/>098 342 839</a><a href="mailto:sistemasdeleste.info@gmail.com"><Mail/>sistemasdeleste.info@gmail.com</a><a href="https://www.instagram.com/sistemasdeleste/" target="_blank" rel="noreferrer"><Instagram/>@sistemasdeleste</a><span><MapPin/>San Carlos · Maldonado · Zona Este</span></div>
 </div><div className="shell footer-bottom"><span>© 2026 Sistemas del Este</span><span>Agro · Ciudad · Tecnología</span></div></footer>
}