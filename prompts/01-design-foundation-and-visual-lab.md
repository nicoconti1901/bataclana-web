# Prompt 01 — Design Foundation + Visual Lab

Paste this prompt into Cursor Agent at the root of the empty/new repository.

---

You are starting a premium digital experience for Argentine tango in La Plata, Argentina.

DO NOT build the final website yet.

The first objective is to establish the product's visual direction and technical foundation without falling into generic AI-generated landing-page patterns.

Read `AGENTS.md`, `docs/architecture.md`, and `docs/design-brief.md` before changing anything.

## Phase 1 — Inspect the environment

- Confirm Node.js compatibility for the chosen stack.
- Create or normalize a Next.js 16 App Router + React 19.3 + TypeScript strict project.
- Use Tailwind CSS 4.x.
- Initialize shadcn/ui, but treat it strictly as a primitive layer.
- Add Motion for React.
- Do not add a database yet.
- Do not add authentication yet.
- Create a minimal typed demo-data layer and repository contract, but keep it unused unless necessary for the prototype.

## Phase 2 — Build the design lab

Create a private development route such as `/lab` that lets us compare four genuinely different home-page art directions:

A. Editorial Night
B. Urban Milonga
C. Contemporary Stage
D. Archivo Vivo

These must differ in:
- composition
- typography hierarchy
- navigation behavior
- image treatment
- spacing/rhythm
- motion language
- information density

A color swap does NOT count as a different concept.

## Phase 3 — Content

Use fictional/demo content only. Invent a fictional tango organization and fictional events in La Plata. Do not present invented history, people or institutions as factual.

The page should include enough content to test the design:
- brand/title
- one major upcoming event
- a small event stream
- classes by level
- a cultural/editorial section
- a short statement about tango today
- a human/teacher section
- footer/contact direction

The actual copy is secondary. The visual composition is the focus.

## Phase 4 — Visual quality

The four prototypes should feel like work from a strong art director, not generated UI.

Use:
- intentional negative space
- asymmetry where appropriate
- editorial typography
- cinematic image crops
- layered depth
- clear hierarchy
- subtle texture where useful
- movement that feels choreographed

Avoid:
- generic SaaS cards
- excessive rounded corners
- glassmorphism
- giant gradients
- predictable 3-column feature grids
- stock tango silhouettes
- decorative animations everywhere

## Phase 5 — Image strategy

For demo visuals, use local placeholder assets or generated/reference imagery only where licensing/placeholder status is clear. Structure the image slots so real client photography can replace them later without changing layout components.

## Phase 6 — Motion

Use Motion for React for normal reveal, hover, layout and scroll interactions. Keep motion sparse and intentional. Implement `prefers-reduced-motion` behavior.

Do not introduce GSAP at this stage unless one specific prototype demonstrably cannot be expressed cleanly with CSS + Motion.

## Phase 7 — Browser validation

Use Playwright after implementation. Open the `/lab` route at:
- wide desktop
- laptop
- mobile portrait

Look for clipping, weak hierarchy, excessive density, awkward typography, accessibility problems and generic visual patterns.

## Output required

When finished:
1. Show me the four prototype URLs/routes.
2. Give each concept a concise art-direction description.
3. Explain the principal trade-offs of each.
4. Do NOT choose a winner for me.
5. Do NOT proceed into full application implementation.
6. Leave the code in a clean state so the next prompt can select one direction and turn it into the public shell.

Before finishing, run the available typecheck/lint/build checks and report the exact commands and outcomes.
