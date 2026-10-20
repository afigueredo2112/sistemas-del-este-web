import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

export async function GET() {
  const emblem = await readFile(join(process.cwd(), 'public', 'brand', 'logo-emblema-oficial-og.png'));
  const logo = `data:image/png;base64,${emblem.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#05182b', color: '#f7fafe', position: 'relative', fontFamily: 'Arial, sans-serif', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 11, height: 630, backgroundColor: '#3fa3ea' }} />
        <img src={logo} width={318} height={318} style={{ objectFit: 'contain', marginLeft: 80 }} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 42, marginTop: -16 }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>Sistemas del Este</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#52b0f0', marginTop: 30 }}>Ciudad  |  Agro</div>
          <div style={{ width: 620, height: 3, backgroundColor: '#285d7f', marginTop: 38 }} />
          <div style={{ fontSize: 25, color: '#d2dfeb', marginTop: 33 }}>Tecnología que conecta soluciones</div>
        </div>
        <div style={{ position: 'absolute', left: 80, right: 80, bottom: 94, height: 2, backgroundColor: '#264b68' }} />
        <div style={{ position: 'absolute', left: 80, bottom: 50, color: '#7d9fb5', fontSize: 15, fontWeight: 700 }}>SISTEMASDELESTE.COM.UY</div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=3600' } }
  );
}
