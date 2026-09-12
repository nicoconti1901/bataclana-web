# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Persona principal: alguien que nunca bailó tango y necesita entender qué es, cómo probarlo y a qué noche o clase ir sin sentirse de afuera.

Audiencia secundaria: quien ya va a milongas o clases y viene a la agenda (horarios, tipo de noche, lugar).

La web prioriza al principiante; el experto debe poder encontrar la agenda sin ruido.

## Product Purpose

Sitio de Milonga Bataclana: la casa y, a la vez, una agenda cultural más amplia de tango (milongas, clases, prácticas, música en vivo).

Existe para acercar el tango a cualquiera, sin exigir experiencia previa.

Éxito: el visitante entiende dónde está, qué puede hacer y da un primer paso (leer, ir a una clase o elegir una noche).

## Positioning

No es una agenda genérica de milongas ni un sitio turístico de tango. Es la puerta de una casa concreta (Bataclana) que también abre a la cultura tanguera: descubrir, escuchar, aprender y vivir.

## Operating Context

Uso típico: móvil o escritorio, de noche o al planear la semana. Recorre Inicio → El tango / La milonga (contexto) o Agenda / Clases (acción). Hoy no hay cuenta ni checkout: el contacto es por mail.

Ciudad: Buenos Aires. Barrio comunicado: Palermo. Dirección exacta: se confirma al reservar (no hay domicilio público confirmado).

## Capabilities and Constraints

Confirmado en producto:

- Superficies: inicio, cultura del tango, agenda, detalle de evento, clases, qué esperar de una milonga.
- Tipos de oferta: milonga, clase, práctica, en vivo.
- Modo oscuro / claro como preferencia de lectura (la paleta no se documenta aquí).

Abierto / no confirmado:

- Si la agenda cultural incluirá casas ajenas a Bataclana, y con qué reglas.
- Backend, CMS, pagos o reservas estructuradas.
- Precios, cupos, profesores nombrados, testimonios.

Stack actual del repo (no es una decisión nueva de init): Next.js 15, React, TypeScript, contenido en archivos, `mailto` para contacto.

## Brand Commitments

- Nombre: Milonga Bataclana (corto: Bataclana).
- Logo: `public/logo-bataclana.jpg` — identidad de marca; no fija paleta.
- Voz: español rioplatense, inclusiva, sin jerga que deje afuera al principiante.
- Personalidad pedida en las reglas del proyecto: artística, contemporánea, cultural; el tango se descubre, se escucha, se aprende y se vive.

## Evidence on Hand

- Logo real en `public/logo-bataclana.jpg`.
- Copy e imágenes actuales en `src/data` y Unsplash: placeholder editorial, no prueba social.
- Email de contacto en código: `hola@milongabataclana.com` — no verificado como canal real.
- Instagram en código es un placeholder.
- No hay testimonios, prensa, precios ni domicilio confirmados. No fabricarlos.

## Product Principles

1. El principiante entra primero; el experto no se pierde.
2. Bataclana es una casa y una cultura, no un listado frío.
3. Decir solo lo que se puede sostener: sin pruebas inventadas.
4. El siguiente paso siempre es claro: entender, probar o elegir una noche.
5. El lenguaje abre la puerta; nunca examina al visitante.

## Accessibility & Inclusion

Requisito de producto (reglas del repo): HTML semántico, teclado, focus visible, contraste, labels, respeto por reduced motion. Incluir a quien no tiene experiencia previa de tango.
