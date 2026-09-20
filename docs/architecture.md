# Tango Experience — Architecture v0.1

## Product shape

Public cultural experience + event discovery + class discovery + lightweight administration.

The site is intentionally not a CMS-first product. The first delivery uses typed demo data so the visual system can be explored without database friction. Events later move behind the same repository interface into Supabase.

## Recommended stack (September 2026)

- Next.js 16.3.x + App Router
- React 19.3
- TypeScript strict
- Tailwind CSS 4.3.x
- shadcn/ui primitives, heavily customized
- Motion for React for normal interaction/scroll/layout animation
- GSAP 3.13+ only where timeline-level choreography is justified
- Supabase/Postgres for the event backend and admin authentication when persistence begins
- Playwright for browser QA
- Vercel as a deployment option

## Public route model

/
/events
/events/[slug]
/classes
/classes/[slug]
/editorial
/editorial/[slug]
/about
/contact

Optional later:
/archive
/gallery
/venues/[slug]
/instructors/[slug]

## Admin route model

/admin
/admin/events
/admin/events/new
/admin/events/[id]
/admin/classes
/admin/media

Keep the admin shell visually separate from the public cultural experience. It is a utility application, not another expression of the main brand.

## Domain modules

src/features/events
src/features/classes
src/features/editorial
src/features/venues
src/features/media
src/features/navigation
src/features/home

Each feature can own:
- components
- domain types
- repository contract
- server-side queries/actions
- validation

## Shared UI

src/components/ui — shadcn/base primitives
src/components/tango — domain-specific visual components
src/lib/formatters
src/lib/seo
src/lib/motion
src/lib/media

Do not put every visual component in `components/ui`.

## Data boundary

UI -> feature repository -> service/domain logic -> implementation

Initial repository implementation:
`demoRepository`

Later implementation:
`supabaseRepository`

The public UI should not need to know which one is active.

## Content strategy

Events: database-backed when persistence begins.

Editorial: MDX/local content initially; move to database editing only when the client's real editorial workflow requires it.

Images: local/placeholder assets during design phase; production media pipeline later.

## Event model v0

Event {
  id
  slug
  title
  status: draft | published | archived
  startsAt
  endsAt?
  venueName
  venueAddress?
  city
  shortDescription
  description
  priceLabel?
  registrationLabel?
  registrationUrl?
  heroImage?
  tags[]
  featured
  createdAt
  updatedAt
}

This is intentionally small. Recurrence, multiple sessions and ticketing should be added only when real requirements appear.

## Design Lab

The site must have an isolated route for visual experiments while the art direction is being selected, e.g. `/lab` or `/lab/home/a`, `/lab/home/b`, `/lab/home/c`.

Each candidate must be a complete composition, not a color swap.

Once a direction is approved, the chosen components become the public shell and the lab can remain private/dev-only.
