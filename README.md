# Sistemas del Este — Web

Sitio web oficial de **Sistemas del Este**, desarrollado como plataforma comercial escalable por verticales.

> **Regla de trabajo:** `main` representa la versión estable / producción. Las mejoras se desarrollan en ramas y se incorporan mediante Pull Request.

## Estado actual — V0.3

La V0.3 prioriza la estructura comercial y visual de la vertical **Agro**.

- Home institucional con acceso a Agro / Ciudad.
- Página Agro completa: propuesta, soluciones, funcionamiento, Mi Campo, beneficios, casos y CTA.
- Placeholder para el futuro mapa interactivo.
- Ciudad preparada para una siguiente iteración equivalente.
- Identidad corporativa azul petróleo, verde Agro y azul Ciudad.
- Diseño responsive.

## Arquitectura de marca

- `/` — Sistemas del Este / selector de vertical.
- `/agro` — automatización, medición, control, conectividad y seguridad para el campo.
- `/ciudad` — seguridad, conectividad, redes e instalaciones para hogares y empresas.
- Futuro: `/industria` como vertical hermana, sin rehacer la arquitectura general.

## Stack

- Next.js 16.3.4
- React 19.2
- App Router
- CSS global propio
- GitHub para control de versiones
- Vercel para previews y producción

## Desarrollo local

```bash
npm install
npm run dev
```

Luego abrir `http://localhost:3000`.

## Flujo de trabajo

### 1. No trabajar directamente sobre `main`

`main` debe permanecer estable porque es la rama destinada a producción.

### 2. Crear una rama desde `main`

```bash
git checkout main
git pull origin main
git checkout -b design/nombre-de-la-mejora
```

Convenciones recomendadas:

- `feature/...` — funcionalidad nueva.
- `design/...` — cambios visuales o de contenido importantes.
- `fix/...` — correcciones.

Ejemplos:

```text
design/v031-agro
feature/mapa-interactivo
design/ciudad
fix/mobile-header
```

### 3. Trabajar y guardar cambios

```bash
git add .
git commit -m "Descripción clara del cambio"
git push -u origin nombre-de-la-rama
```

### 4. Abrir Pull Request

En GitHub abrir un Pull Request desde la rama de trabajo hacia `main`.

Antes del merge revisar:

- que compile correctamente;
- versión desktop y mobile;
- textos y datos comerciales;
- enlaces y WhatsApp;
- que no se presenten funciones en desarrollo como terminadas;
- que no se hayan eliminado funcionalidades existentes accidentalmente;
- posibles conflictos con otros trabajos en paralelo.

### 5. Merge a `main`

Solamente después de aprobar el PR. Una vez integrado a `main`, Vercel puede desplegar la nueva versión de producción.

## Trabajo con varios colaboradores

Cada colaborador trabaja en su propia rama. Dos personas pueden desarrollar mejoras en paralelo siempre que eviten modificar directamente `main`.

Ejemplo:

```text
main
├── design/agro-v031
├── design/ciudad-v031
└── feature/mapa-interactivo
```

Cada rama vuelve a `main` mediante su propio Pull Request.

Antes de iniciar una rama nueva conviene actualizar `main`:

```bash
git checkout main
git pull origin main
```

## Principios del producto

- Beneficios antes que jerga técnica.
- Partimos del problema, no del dispositivo.
- La arquitectura debe ser modular y permitir sumar verticales.
- Agro usa verde como acento; Ciudad, azul/cian.
- Evitar estética genérica de plantilla o banco de imágenes.
- Mi Campo es actualmente un concepto de plataforma / producto en desarrollo.
- El mapa interactivo está planificado, pero no es una dependencia para publicar la web comercial.

## Producción

Dominio previsto: `sistemasdeleste.com.uy`.

Arquitectura de publicación:

```text
rama de trabajo
      ↓
Pull Request
      ↓
    main
      ↓
   Vercel
      ↓
sistemasdeleste.com.uy
```

## Documentación

La documentación de negocio, decisiones de diseño, posicionamiento, roadmap y contexto se mantiene separada del código en Google Drive. Este README es la referencia técnica y de colaboración dentro del repositorio.

## Contacto comercial

**Sistemas del Este**  
San Carlos, Maldonado — Uruguay  
WhatsApp: +598 98 342 839
