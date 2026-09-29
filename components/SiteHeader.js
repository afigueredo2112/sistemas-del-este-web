import Link from 'next/link';
import { MessageCircle, LayoutDashboard } from 'lucide-react';

export default function SiteHeader({ tone = 'base' }) {
  return (
    <header className={`site-header ${tone}`}>
      <Link href="/" className="brand-link" aria-label="Sistemas del Este - Inicio">
        <img src="/brand/logo-emblema.png" alt="" className="brand-emblem" aria-hidden="true" />
        <span className="brand-wordmark">
          <span className="brand-top">SISTEMAS</span>
          <span className="brand-bottom">DEL ESTE</span>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <Link href="/agro" className={tone === 'agro' ? 'is-active' : undefined}>Agro</Link>
        <Link href="/ciudad" className={tone === 'city' ? 'is-active' : undefined}>Ciudad</Link>
        <Link href="/mi-sistema" className="platform-link"><LayoutDashboard aria-hidden="true" strokeWidth={1.75} />Mi Sistema</Link>
        <a className="header-contact" href="https://wa.me/59898342839" target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" strokeWidth={1.75} />WhatsApp
        </a>
      </nav>
    </header>
  );
}
