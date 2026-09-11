import './globals.css';
import './visual-polish.css';

export const metadata = {
  title: 'Sistemas del Este | Tecnología para el campo y la ciudad',
  description: 'Automatización, conectividad, monitoreo y seguridad para el campo y la ciudad.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
