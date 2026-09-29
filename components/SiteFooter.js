export function AboutSection(){
 return <section className="about-sde"><div className="shell about-sde-inner">
  <div><p className="kicker">SISTEMAS DEL ESTE</p><h2>Experiencia técnica aplicada a <span>soluciones reales.</span></h2></div>
  <div className="about-sde-copy"><p>Contamos con más de 10 años de experiencia trabajando con infraestructura IT, redes, conectividad y soporte tecnológico.</p><p>Hoy aplicamos esa experiencia para diseñar e integrar soluciones de automatización, monitoreo, conectividad y seguridad para el campo, hogares y empresas, con una mirada práctica, escalable y cercana.</p><div className="about-sde-tags"><span>+10 AÑOS DE EXPERIENCIA</span><span>SOPORTE LOCAL</span><span>SOLUCIONES A MEDIDA</span></div></div>
 </div></section>
}

export function FloatingWhatsApp(){
 return <a className="floating-whatsapp" href="https://wa.me/59898342839?text=Hola%2C%20quiero%20consultar%20por%20una%20soluci%C3%B3n%20de%20Sistemas%20del%20Este" target="_blank" rel="noreferrer" aria-label="Consultar a Sistemas del Este por WhatsApp"><svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.1 19.8L3 29l6.4-1.8A13 13 0 1 0 16 3Zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-2.6-1.6 9.8 9.8 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.5 0-.7l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.4-.2-.7-.4Z"/></svg><span>WhatsApp</span></a>
}

export default function SiteFooter(){
 return <footer className="site-footer"><div className="shell site-footer-inner">
  <div className="footer-brand"><strong>SISTEMAS<br/><span>DEL ESTE</span></strong><p>Tecnología aplicada a problemas reales.</p></div>
  <div className="footer-contact"><a href="tel:+59898342839"><span aria-hidden="true">TEL</span>098 342 839</a><a href="mailto:sistemasdeleste.info@gmail.com"><span aria-hidden="true">@</span>sistemasdeleste.info@gmail.com</a><a href="https://www.instagram.com/sistemasdeleste/" target="_blank" rel="noreferrer"><span aria-hidden="true">IG</span>@sistemasdeleste</a><span><span aria-hidden="true">UY</span>San Carlos · Maldonado · Zona Este</span></div>
 </div><div className="shell footer-bottom"><span>© 2026 Sistemas del Este</span><span>Agro · Ciudad · Tecnología</span></div><FloatingWhatsApp/></footer>
}