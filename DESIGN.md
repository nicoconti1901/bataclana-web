---
name: Milonga Bataclana
description: Paper and Wine — misma casa, dos luces; revista cultural que se lee como una pista.
colors:
  vino-salon: "#100e0c"
  cream-pista: "#f6eadc"
  cream-muted: "#d4c0a8"
  accent-cream: "#f0d4b8"
  accent-ink-vino: "#100e0c"
  surface-vino: "#221c1a"
  card-vino: "#1c1715"
  footer-vino: "#0a0908"
  sepia-paper: "#ead9c0"
  ink-casa: "#241610"
  ink-muted: "#4a3226"
  accent-sepia: "#6b2a28"
  surface-sepia: "#f3e6d2"
  cta-sepia: "#3a2218"
  cta-sepia-ink: "#f3e6d2"
  card-sepia: "#f6ead8"
  footer-sepia: "#2c1c14"
  on-photo: "#f6eadc"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.4rem, 10vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.05
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  page-x: "16px"
  page-x-md: "24px"
  section: "80px"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-cream}"
    textColor: "{colors.accent-ink-vino}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.label}"
  button-primary-sepia:
    backgroundColor: "{colors.cta-sepia}"
    textColor: "{colors.cta-sepia-ink}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.label}"
  button-ghost-on-photo:
    backgroundColor: "transparent"
    textColor: "{colors.on-photo}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.cream-pista}"
    typography: "{typography.label}"
  card-vino:
    backgroundColor: "{colors.card-vino}"
    textColor: "{colors.cream-pista}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-sepia:
    backgroundColor: "{colors.card-sepia}"
    textColor: "{colors.ink-casa}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Milonga Bataclana

## Overview

**Creative North Star: "Paper and Wine"**

Dos luces, una casa. De noche el salón es vino de salón y crema de pista. De día es papel sepia y tinta de casa. No son skins decorativos: invierten tinta y fondo manteniendo los mismos roles (página, superficie, tarjeta, CTA, pie, texto sobre foto).

El sistema se siente como revista cultural contemporánea que se abre como una pista: tipografía de gran escala, fotos cinematográficas, composición asimétrica, chrome mínimo. El gesto está en el cartel (título, recorte, silencio), no en sombras ni pastillas.

Queda fuera el cliché tanguero (rosa, sombrero, silueta de pareja, fórmula rojo-negro-blanco, vintage forzado) y el look de producto SaaS (cards idénticas, pills, glass excesivo, sombras suaves). El logo orienta; no dicta paleta.

**Key Characteristics:**
- Dos modos ligados: Vino (oscuro) y Sepia (claro)
- Display serif de afiche + sans contemporánea para datos
- Cantos vivos; profundidad tonal y fotográfica, no sombras
- Labels en versales con tracking amplio
- Sobre imagen, siempre crema de pista

## Colors

Dos paletas espejo. El acento es tinta invertida: crema sobre vino, vino contenido sobre papel.

### Primary
- **Asfalto** (`#100e0c`): fondo de página canónico en modo oscuro. Continúa la calle nocturna del hero; el acento y las superficies cargan la lectura. No hay variantes de tinto.
- **Papel sepia**: fondo de página en modo claro. Lectura diurna, no “tema beige genérico”.

### Secondary
- **Crema de pista**: tinta principal en Vino, texto sobre foto en ambos modos, pie en Sepia.
- **Tinta de casa**: tinta principal en Sepia.

### Tertiary
- **Acento crema** / **Acento sepia**: estado activo, kicker de nav, CTA invertido. Raro a propósito.

### Neutral
- **Crema muted** / **Tinta muted**: apoyo, no decoración. Deben seguir leyéndose.
- **Superficie / tarjeta / pie**: un paso de tono respecto del fondo; el pie puede ser más oscuro en ambos modos.
- **Línea de página**: trazo al 18–20% de la tinta del modo.

### Named Rules
**The Two Lights Rule.** Toda superficie nueva declara roles (fondo, tinta, muted, CTA, sobre-foto), no hex sueltos. Vino y Sepia deben poder pintar el mismo componente.

**The On-Photo Rule.** Tipografía sobre fotografía usa crema de pista. Nunca tinta de casa sobre foto oscura.

**The No Automatic Red Rule.** El rojo no es la marca. El vino es atmósfera; el acento puede ser crema.

## Typography

**Display Font:** Cormorant Garamond (Georgia)
**Body Font:** Manrope (system-ui)
**Label/Mono Font:** Manrope en versales (no hay mono)

**Character:** El serif carga la frase; el sans carga la hora, el barrio, el botón. No se mezclan más familias.

### Hierarchy
- **Display** (regular, clamp 3.4rem–8rem, line-height 0.88): hero y títulos de declaración.
- **Headline** (regular, ~2.5–4.5rem, line-height 0.95): secciones y páginas internas.
- **Title** (regular, ~2.25–2.5rem): tarjetas y bloques de clase.
- **Body** (regular, 16–18px, line-height ~1.65): párrafos; ancho corto, no muro.
- **Label** (medium, 10–12px, tracking 0.16–0.32em, uppercase): nav, kickers, metadatos, CTA.

### Named Rules
**The Poster Type Rule.** Si un bloque no se lee como cartel a tres metros, el display está chico o el chrome está gritando.

**The Data Sans Rule.** Fechas, horarios, filtros y botones nunca van en serif.

## Layout

Contenedor de 72rem (`max-w-6xl`), márgenes 16px / 24px. Ritmo de sección ~80–96px. Home: hero a viewport completo → editorial asimétrico (texto + foto fuera de grilla) → cita a banda completa → eventos en dos pesos → clases en franja → CTA fotográfico. Agenda: lista-timeline, no grilla de cards iguales. Mobile: una columna, menú revelado, el toggle de modo permanece en la barra.

## Elevation & Depth

No hay sombras de producto. La profundidad es tonal (fondo → superficie → tarjeta → pie), overlay en degradé sobre foto, y un blur de 16px solo en la nav fija.

### Named Rules
**The Flat Floor Rule.** Cero `box-shadow` en reposo. Si hace falta separar, cambiar de tono o usar la línea al 18–20%.

## Shapes

Cantos vivos (0px) en botones, cards, nav y toggle. Sin pills. Recortes fotográficos a rectángulo vivo; la máscara es el crop, no un radio. Bordes: 1px con la línea de página.

### Named Rules
**The Live Edge Rule.** Radius 0. Una esquina redonda es otra marca.

## Components

Cartel recto: placa opaca, versales, un CTA. El usuario pidió carteles más detallistas y llamativos: eso se logra con escala, recorte y silencio, no con chrome extra.

### Buttons
- **Shape:** canto vivo (0)
- **Primary (Vino):** acento crema sobre tinta vino; padding 12×20; label versal
- **Primary (Sepia):** CTA sepia sobre tinta crema
- **Ghost on photo:** trazo crema, fondo transparente
- **Hover / Focus:** opacidad o el mismo CTA invertido; focus visible obligatorio

### Cards / Containers
- **Corner Style:** vivo (0)
- **Background:** tarjeta del modo activo
- **Shadow Strategy:** ninguna
- **Border:** no hace falta caja; la foto o el tono bastan
- **Internal Padding:** 24px en cuerpo de evento / aside

### Navigation
Fija, blur 16px, logo a la izquierda, labels versales, CTA “Ver agenda”, interruptor Oscuro/Claro. Activo = acento del modo. Mobile: botón Menú/Cerrar y lista en superficie.

### Theme switch
Grupo de dos placas (Oscuro / Claro) con borde de línea; el activo usa el CTA primario.

### Event timeline
Fila a ancho completo: fecha display + título + horario. No convertir la agenda en mosaico de cards.

### Inputs / Fields
No hay formularios de producto. Contacto = `mailto`. Si aparece un campo, heredar canto vivo, línea de página y label versal.

## Do's and Don'ts

### Do:
- **Do** pintar con roles de token y probar Vino y Sepia en la misma pieza.
- **Do** poner crema de pista sobre cualquier foto.
- **Do** usar display enorme y sans para el dato práctico.
- **Do** respetar pausa → tensión → movimiento → pausa; `prefers-reduced-motion` corta lo no esencial.
- **Do** tratar eventos como carteles o timeline, no como catálogo SaaS.

### Don't:
- **Don't** usar radius, pills, sombras suaves ni glass en el contenido.
- **Don't** aplicar la fórmula rojo + negro + blanco, rosas, sombreros o siluetas de pareja como identidad.
- **Don't** poner tinta oscura sobre foto.
- **Don't** inventar testimonios, precios o domicilio para “llenar” un bloque visual.
- **Don't** añadir una tercera familia tipográfica.
