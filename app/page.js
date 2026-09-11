import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="home-hero shell">
        <div className="home-copy">
          <p className="kicker">SISTEMAS DEL ESTE · SAN CARLOS, MALDONADO</p>
          <h1>Tecnología aplicada a <span>problemas reales.</span></h1>
          <p className="lead">Diseñamos soluciones de automatización, conectividad, monitoreo y seguridad para el campo, hogares y empresas.</p>
        </div>
        <div className="vertical-grid">
          <Link className="vertical-card agro-card" href="/agro">
            <div className="card-art agro-art" aria-hidden="true">
              <div className="horizon"></div><div className="field-lines"></div><div className="mini-house"></div><div className="signal"></div>
            </div>
            <div className="vertical-content">
              <p className="micro">SISTEMAS DEL ESTE</p><h2>AGRO</h2>
              <p>Control y tecnología para el campo.</p>
              <div className="tag-row"><span>Riego</span><span>Sensores</span><span>Conectividad</span><span>Seguridad</span></div>
              <strong>Conocé Agro <b>→</b></strong>
            </div>
          </Link>
          <Link className="vertical-card city-card" href="/ciudad">
            <div className="card-art city-art" aria-hidden="true">
              <div className="building b1"></div><div className="building b2"></div><div className="building b3"></div><div className="city-signal"></div>
            </div>
            <div className="vertical-content">
              <p className="micro">SISTEMAS DEL ESTE</p><h2>CIUDAD</h2>
              <p>Seguridad y conectividad para tus espacios.</p>
              <div className="tag-row"><span>Cámaras</span><span>Redes</span><span>Instalaciones</span><span>Control</span></div>
              <strong>Conocé Ciudad <b>→</b></strong>
            </div>
          </Link>
        </div>
      </section>
      <footer className="simple-footer shell"><span>Sistemas del Este · 2026</span><span>098 342 839</span><span>Maldonado y Zona Este</span></footer>
    </main>
  );
}
