'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './MiSistema.module.css';

const statusText = { online:'Online', offline:'Offline', warning:'Atención' };

export default function MiSistemaDashboard({ initialData }) {
  const [data, setData] = useState(initialData);
  const [tab, setTab] = useState('resumen');
  const online = useMemo(() => data.devices.filter(d => d.status === 'online').length, [data]);

  function setValve(deviceId, state) {
    setData(current => ({
      ...current,
      devices: current.devices.map(device => device.id !== deviceId ? device : {
        ...device,
        capabilities: device.capabilities.map(cap => cap.type === 'valve' ? { ...cap, state } : cap)
      })
    }));
  }

  return (
    <main className={styles.app}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}><span>SISTEMAS</span><b>DEL ESTE</b></Link>
        <div className={styles.product}>MI SISTEMA <span>DEMO</span></div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.eyebrow}>PLATAFORMA</p>
          {['resumen','dispositivos','alertas'].map(item => (
            <button key={item} onClick={() => setTab(item)} className={tab === item ? styles.navActive : ''}>{item[0].toUpperCase()+item.slice(1)}</button>
          ))}
          <div className={styles.back}><Link href="/">← Volver al sitio</Link></div>
        </aside>

        <section className={styles.content}>
          <div className={styles.heading}>
            <div><p className={styles.eyebrow}>{data.organization} · ESTABLECIMIENTO</p><h1>{data.name}</h1></div>
            <div className={styles.overall}><i></i><span>Sistema con atención</span></div>
          </div>

          {tab === 'resumen' && <>
            <div className={styles.summary}>
              <article><small>GATEWAY</small><strong>{data.gateway.name}</strong><span className={styles.good}>● Online</span></article>
              <article><small>ÚLTIMA COMUNICACIÓN</small><strong>{data.lastCommunication}</strong><span>Actualización simulada</span></article>
              <article><small>DISPOSITIVOS</small><strong>{online} / {data.devices.length}</strong><span>online</span></article>
              <article><small>ALERTAS</small><strong>{data.alerts.length}</strong><span className={styles.warn}>Requiere revisión</span></article>
            </div>

            <SectionTitle kicker="OPERACIÓN" title="Sectores" note="Una lectura rápida de lo que está pasando ahora." />
            <div className={styles.sectors}>
              {data.sectors.map(sector => <article key={sector.id}>
                <div className={styles.cardTop}><h3>{sector.name}</h3><span className={sector.irrigation === 'active' ? styles.activePill : styles.pill}>{sector.irrigation === 'active' ? 'Riego activo' : 'Detenido'}</span></div>
                <div className={styles.metrics}>{sector.metrics.length ? sector.metrics.map(m => <div key={m.label}><small>{m.label}</small><strong>{m.value}<em>{m.unit}</em></strong></div>) : <p>Sin mediciones asignadas</p>}</div>
              </article>)}
            </div>

            <SectionTitle kicker="ATENCIÓN" title="Alertas" note="Lo importante aparece antes que el detalle." />
            <Alerts alerts={data.alerts} />
          </>}

          {tab === 'dispositivos' && <>
            <SectionTitle kicker="INFRAESTRUCTURA" title="Dispositivos" note="La interfaz se adapta a las capacidades de cada equipo." />
            <div className={styles.deviceList}>
              {data.devices.map(device => {
                const valve = device.capabilities.find(c => c.type === 'valve');
                const variable = device.capabilities.flatMap(c => c.variables || [])[0];
                return <article key={device.id} className={styles.device}>
                  <div className={styles.deviceMain}><span className={device.status === 'online' ? styles.dotOnline : styles.dotOffline}></span><div><h3>{device.name}</h3><p>{device.sector} · {statusText[device.status]} · {device.lastCommunication}</p></div></div>
                  <div className={styles.deviceMeta}>
                    {variable && <span><small>{variable.label}</small><b>{variable.value} {variable.unit}</b></span>}
                    {device.battery != null && <span><small>Batería</small><b>{device.battery}%</b></span>}
                    {device.signal != null && <span><small>Señal</small><b>{device.signal}%</b></span>}
                  </div>
                  {valve && <div className={styles.control}>
                    <div><small>CONTROL SIMULADO</small><b>{valve.state === 'open' ? 'ABIERTA' : 'CERRADA'}</b></div>
                    <button disabled={device.status !== 'online'} onClick={() => setValve(device.id, valve.state === 'open' ? 'closed' : 'open')}>{valve.state === 'open' ? 'Cerrar' : 'Abrir'}</button>
                  </div>}
                </article>
              })}
            </div>
          </>}

          {tab === 'alertas' && <>
            <SectionTitle kicker="EVENTOS" title="Alertas" note="Condiciones que necesitan tu atención." />
            <Alerts alerts={data.alerts} />
          </>}

          <p className={styles.demoNote}>ENTORNO DEMOSTRATIVO · DATOS Y CONTROLES SIMULADOS · SIN CONEXIÓN A HARDWARE</p>
        </section>
      </div>

      <nav className={styles.mobileNav}>
        {['resumen','dispositivos','alertas'].map(item => <button key={item} onClick={() => setTab(item)} className={tab === item ? styles.mobileActive : ''}>{item === 'resumen' ? 'Resumen' : item === 'dispositivos' ? 'Equipos' : 'Alertas'}</button>)}
      </nav>
    </main>
  );
}

function SectionTitle({ kicker, title, note }) {
  return <div className={styles.sectionTitle}><div><p className={styles.eyebrow}>{kicker}</p><h2>{title}</h2></div><p>{note}</p></div>
}
function Alerts({ alerts }) {
  return <div className={styles.alerts}>{alerts.map(alert => <article key={alert.id}><span>!</span><div><strong>{alert.title}</strong><p>{alert.detail}</p></div><b>REVISAR</b></article>)}</div>
}
