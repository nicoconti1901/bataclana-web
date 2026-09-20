# Bataclana Web

Sitio cultural de tango argentino en La Plata. No es un portal de eventos genérico: es una experiencia editorial, nocturna y de lugar, pensada para que alguien sienta la milonga antes de reservar.

Este repositorio concentra la web pública. Hoy está en **Fase 1**: base técnica + laboratorio visual. Todavía no hay una dirección de arte aprobada ni un sitio público cerrado.

El contenido visible usa una organización ficticia —**Casa Meridiana**— solo para componer y comparar. No representa una institución real.

---

## Dónde estamos

El producto se construye por fases. No se salta a las siguientes sin una decisión explícita.

| Fase | Qué significa | Estado |
| --- | --- | --- |
| 0 | Investigación y dirección de arte | Hecha, como insumo |
| **1** | Lenguaje visual + prototipos en competencia | **En curso** |
| 2 | Cáscara pública aprobada | Pendiente |
| 3 | Experiencias de eventos y clases | Pendiente |
| 4 | Sistema editorial / contenido | Pendiente |
| 5 | Administración de eventos + persistencia | Pendiente |
| 6 | Endurecimiento, SEO, analítica y despliegue | Pendiente |

La raíz (`/`) redirige al laboratorio. Cuando se apruebe una dirección, esa composición pasará a ser el sitio público y el lab podrá quedar como herramienta interna.

---

## Qué hay para ver

El Design Lab compara **cuatro homes completas**. No son cambios de paleta: cambian composición, tipografía, navegación, tratamiento de imagen, ritmo y motion.

| Concepto | Ruta | Idea |
| --- | --- | --- |
| A — Editorial Night | `/lab/editorial-night` | Revista nocturna: tinta, asimetría, revelados lentos |
| B — Urban Milonga | `/lab/urban-milonga` | Afiche de ciudad: bloques, ritmo de cartel, pista |
| C — Contemporary Stage | `/lab/contemporary-stage` | Escena teatral: vacío, foco, tipografía cinética |
| D — Archivo Vivo | `/lab/archivo-vivo` | Documento vivo: papel, anotaciones, línea de tiempo |

Índice: [`/lab`](http://localhost:3000/lab)

Cada home se alimenta del mismo contenido demo (evento destacado, agenda, clases, editorial, docentes) para que la comparación sea justa.

---

## Stack

- **Next.js 16** (App Router) y **React 19**
- **TypeScript** en modo estricto
- **Tailwind CSS 4**
- **shadcn/ui** solo como capa de primitivos (`Button`, `Separator`). Lo específico del tango vive en `src/components/tango`
- **Motion** para revelados y transiciones, con respeto a `prefers-reduced-motion`
- **Playwright** para QA visual de las rutas del lab
- Datos tipados en memoria. **Sin base de datos** en esta fase

Supabase, autenticación y CMS quedan para más adelante. La interfaz no debe enterarse de cuál implementación de datos está activa.

---

## Cómo arrancar

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Va a `/lab`.

### Scripts

| Comando | Para qué |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir el build |
| `npm run typecheck` | TypeScript sin emitir |
| `npm run lint` | ESLint |
| `npm run lab:qa` | Playwright sobre el Design Lab (desktop, laptop y móvil) |

Los tests de lab levantan el servidor si no hay uno corriendo. Si `next dev` ya está activo en el puerto 3000, lo reutilizan.

---

## Cómo está armado

La UI no habla con un origen concreto. Pide datos a un contrato (`ContentRepository`). Hoy la implementación es `demoRepository`; más adelante puede ser Supabase sin reescribir las pantallas.

```
UI  →  repositorio  →  datos
         ↑
   demoRepository (ahora)
   supabaseRepository (después)
```

### Carpetas que importan

```
src/
  app/                 rutas (App Router). /lab y cada concepto
  components/
    ui/                primitivos shadcn
    tango/             piezas de dominio (hoy: MediaPlaceholder)
    lab/               chrome compartido del laboratorio
  data/demo/           contenido ficticio tipado
  features/
    events/            tipos de eventos
    classes/           tipos de clases
    editorial/         tipos de piezas, docentes, organización
    lab/               las cuatro homes y metadatos de conceptos
  lib/
    repositories/      contrato + implementación demo
    motion.ts          revelados y reduced-motion
    formatters.ts      fechas y etiquetas
docs/                  arquitectura, brief de diseño, MCP
prompts/               prompt de arranque de la Fase 1
tests/                 Playwright del lab
```

Los huecos de imagen son `MediaPlaceholder`: un recuadro con tono y proporción. Cuando haya fotografía real se reemplazan esos slots; no hace falta rearmar el layout.

---

## Modelo de contenido (demo)

Pensado chico a propósito. Recurrencia, sesiones múltiples y ticketing se agregan cuando el negocio lo pida, no antes.

- **Evento:** slug, estado (`draft` / `published` / `archived`), horario, salón, ciudad, textos, precio, inscripción, tags, destacado
- **Clase:** nivel, día, horario, docentes, salón
- **Editorial:** título, extracto, cuerpo, byline, taxonomía
- **Organización e instructores:** lo mínimo para probar marca y presencia humana

El copy es secundario. Lo que se evalúa es la composición.

---

## Criterios de diseño

Lo que este proyecto **no** quiere ser: landing de SaaS, grilla de cards repetida, glassmorphism, héroes con degradé, cliché rojo-y-negro, siluetas de pareja de stock.

Lo que sí: jerarquía real, espacio negativo, tipografía, recorte de imagen, ritmo y movimiento con sentido (acercarse, pausar, cambiar el peso, revelar, asentarse).

Cada cambio visual grande se mira en navegador, desktop y móvil. Accesibilidad y reduced-motion forman parte del diseño, no de un parche posterior.

Cuando una decisión cambie la dirección visual, se presentan **dos a cuatro opciones distintas** —no cuatro paletas del mismo layout— y después se implementa una.

Documentos de referencia:

- [`AGENTS.md`](./AGENTS.md) — constitución del producto y del trabajo con agentes
- [`docs/architecture.md`](./docs/architecture.md) — módulos, rutas previstas, frontera de datos
- [`docs/design-brief.md`](./docs/design-brief.md) — percepción buscada y familias visuales
- [`docs/mcp-setup.md`](./docs/mcp-setup.md) — MCP que sí se usan (shadcn, Playwright)

---

## Qué viene después (y qué no)

**Ahora:** elegir una de las cuatro direcciones —o una síntesis explícita— y construir la cáscara pública (Fase 2).

**Todavía no:**

- acoplar las pantallas a Supabase
- meter un CMS porque “hay textos”
- abrir administración de eventos
- tratar Casa Meridiana como marca real del cliente

La marca real del espacio es **Bataclana**. Casa Meridiana es andamiaje de composición y se reemplaza cuando la dirección de arte esté aprobada.

---

## Licencia y uso

Repositorio privado de producto. El contenido demo no está afiliado a personas, salones ni instituciones reales de La Plata.
