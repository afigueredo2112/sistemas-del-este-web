import Link from 'next/link';

export default function SiteHeader({ tone = 'base' }) {
  return (
    <header className={`site-header ${tone}`}>
      <Link href="/" className="brand-wordmark" aria-label="Sistemas del Este - Inicio">
        <span className="brand-top">SISTEMAS</span>
        <span className="brand-bottom">DEL ESTE</span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <Link href="/agro">Agro</Link>
        <Link href="/ciudad">Ciudad</Link>
        <a className="header-contact" href="https://wa.me/59898342839" target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </header>
  );
}
