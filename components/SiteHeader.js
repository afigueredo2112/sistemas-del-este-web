import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

// The official logo file must be placed in /public/brand. It is never redrawn in code.
const LOGO_FILES = ['logo.svg', 'logo.png', 'logo.webp'];

function findOfficialLogo() {
  for (const file of LOGO_FILES) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'brand', file))) return `/brand/${file}`;
  }
  return null;
}

export default function SiteHeader({ tone = 'base' }) {
  const logo = findOfficialLogo();
  return (
    <header className={`site-header ${tone}`}>
      <Link href="/" className="brand-link" aria-label="Sistemas del Este - Inicio">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt="Sistemas del Este" className="brand-logo" />
        ) : (
          <span className="brand-wordmark">
            <span className="brand-top">SISTEMAS</span>
            <span className="brand-bottom">DEL ESTE</span>
          </span>
        )}
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <Link href="/agro" className={tone === 'agro' ? 'is-active' : undefined}>Agro</Link>
        <Link href="/ciudad" className={tone === 'city' ? 'is-active' : undefined}>Ciudad</Link>
        <a className="header-contact" href="https://wa.me/59898342839" target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" strokeWidth={1.75} />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
