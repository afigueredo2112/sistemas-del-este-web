# Arquitectura de Mi Sistema — etapa DEMO

## Principio
La web pública y la plataforma comparten proyecto e identidad, pero mantienen responsabilidades separadas. La plataforma no se diseña alrededor de riego sino de capacidades componibles.

## Dominio
User → Organization → Establishment → Gateway → Device → Capability → Variable / Action.

Un Device no “es una válvula” ni “es un sensor”: declara capabilities. Una capability puede exponer variables, acciones y, más adelante, configuración.

## Flujo de datos
UI → service → data provider.

Hoy el provider es Mock. La sustitución prevista es API/Supabase sin acoplar los componentes visuales a PostgreSQL ni a credenciales.

## Hardware
Nodo/dispositivo ↔ LoRa ↔ Gateway ↔ Internet ↔ Backend/API ↔ Mi Sistema.

El navegador nunca se comunica directamente con nodos LoRa. Los comandos reales futuros deberán pasar por backend, autorización y gateway.

## Seguridad futura
Supabase Auth + PostgreSQL + Row Level Security. Ninguna service-role key o secreto debe llegar al frontend.

## Alcance actual
Dashboard responsive, gateway, sectores, dispositivos, capabilities, mediciones, alertas, última comunicación y controles de actuadores exclusivamente simulados.
