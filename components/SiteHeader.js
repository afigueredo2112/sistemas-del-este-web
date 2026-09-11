import Link from 'next/link';

export default function SiteHeader({ tone = 'base' }) {
  return (
    <header className={`site-header ${tone}`}>
      <Link href="/" className="brand-lockup" aria-label="Sistemas del Este - Inicio">
        <img className="brand-emblem" src="/brand/logo-emblema.png" alt="" aria-hidden="true" />
        <span className="brand-wordmark">
          <span className="brand-top">SISTEMAS</span>
          <span className="brand-bottom">DEL ESTE</span>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <Link href="/agro">Agro</Link>
        <Link href="/ciudad">Ciudad</Link>
        <a className="header-contact" href="https://wa.me/59898342839" target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </header>
  );
}
