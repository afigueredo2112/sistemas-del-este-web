import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'Sistemas del Este | Tecnología para el campo y la ciudad',
  description: 'Automatización, conectividad, monitoreo y seguridad para el campo y la ciudad.'
};

export const viewport = {
  themeColor: '#061922'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
