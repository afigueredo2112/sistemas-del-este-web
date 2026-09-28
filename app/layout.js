import { DM_Sans, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  metadataBase: new URL('https://sistemasdeleste.com.uy'),
  title: { default: 'Sistemas del Este | Tecnología para el campo y la ciudad', template: '%s | Sistemas del Este' },
  description: 'Automatización, conectividad, monitoreo, redes y seguridad para el campo, hogares y empresas en Maldonado y Zona Este.',
  keywords: ['automatización Uruguay','riego inteligente','cámaras de seguridad Maldonado','redes Wi-Fi','IoT agro','Sistemas del Este'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'es_UY', siteName: 'Sistemas del Este',
    title: 'Sistemas del Este | Tecnología aplicada a problemas reales',
    description: 'Automatización, conectividad, monitoreo y seguridad para el campo, hogares y empresas.',
    images: [{ url: '/images/home-agro.png', width: 1200, height: 630, alt: 'Sistemas del Este' }]
  },
  twitter: { card: 'summary_large_image', title: 'Sistemas del Este', description: 'Tecnología aplicada a problemas reales.', images: ['/images/home-agro.png'] },
  robots: { index: true, follow: true }
};

export const viewport = { themeColor: '#061922' };

export default function RootLayout({ children }) {
  return <html lang="es-UY" className={`${dmSans.variable} ${manrope.variable}`}><body>
    {children}
    <Script src="/_vercel/insights/script.js" strategy="afterInteractive" data-sdkn="@vercel/analytics" />
  </body></html>;
}
