export type EventKind = "milonga" | "clase" | "practica" | "concierto";

export type EventItem = {
  slug: string;
  title: string;
  kind: EventKind;
  dateLabel: string;
  isoDate: string;
  time: string;
  venue: string;
  neighborhood: string;
  level: string;
  excerpt: string;
  body: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    slug: "sabado-en-la-pista",
    title: "Sábado en la pista",
    kind: "milonga",
    dateLabel: "20 SEP",
    isoDate: "2026-09-20",
    time: "22:30 — 03:30",
    venue: "Salón Bataclana",
    neighborhood: "Palermo",
    level: "Todas las experiencias",
    excerpt: "Una noche para entrar, escuchar y quedarse. No hace falta saber.",
    body: "La milonga abre con una tanda lenta. Hay espacio para mirar, para pedir una clase corta al borde de la pista y para bailar si el cuerpo lo pide. Traé zapatos cómodos. El resto se descubre adentro.",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Pareja en un salón con luz baja",
    featured: true,
  },
  {
    slug: "primer-paso",
    title: "El primer paso",
    kind: "clase",
    dateLabel: "17 SEP",
    isoDate: "2026-09-17",
    time: "19:00 — 20:30",
    venue: "Sala 2",
    neighborhood: "Palermo",
    level: "Sin experiencia previa",
    excerpt: "Caminar, abrazar, escuchar. Una clase pensada para quien nunca bailó.",
    body: "Trabajamos el abrazo, el peso y el oído antes que las figuras. Salís sabiendo cómo entrar a una milonga sin sentirte de afuera.",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Personas en una clase de baile",
    featured: true,
  },
  {
    slug: "practica-abierta",
    title: "Práctica abierta",
    kind: "practica",
    dateLabel: "18 SEP",
    isoDate: "2026-09-18",
    time: "20:00 — 22:00",
    venue: "Pista central",
    neighborhood: "Palermo",
    level: "Principiantes y quienes vuelven",
    excerpt: "Pista lenta, música clara, permiso para equivocarse.",
    body: "No hay código de milonga estricto. Hay tandas cortas y un rincón para preguntar. Ideal si ya tomaste una clase y querés probarla en movimiento.",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Movimiento de danza bajo luz de escenario",
  },
  {
    slug: "orquesta-en-vivo",
    title: "Orquesta en el salón",
    kind: "concierto",
    dateLabel: "27 SEP",
    isoDate: "2026-09-27",
    time: "21:00 — 23:30",
    venue: "Salón Bataclana",
    neighborhood: "Palermo",
    level: "Para escuchar o bailar",
    excerpt: "Cuerdas, bandoneón y una pista que no obliga a nadie.",
    body: "Podés sentarte, podés bailar, podés solo escuchar cómo cambia el aire cuando entra la orquesta. Después sigue la milonga con DJ.",
    image:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Orquesta en un teatro",
  },
  {
    slug: "jueves-de-escucha",
    title: "Jueves de escucha",
    kind: "milonga",
    dateLabel: "25 SEP",
    isoDate: "2026-09-25",
    time: "21:30 — 01:00",
    venue: "Barra y pista",
    neighborhood: "Palermo",
    level: "Todas las experiencias",
    excerpt: "Tandas clásicas, menos gente, más aire entre una y otra.",
    body: "Una milonga más chica. Sirve para la primera vez o para volver cuando la ciudad está demasiado rápida.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Pista iluminada de noche",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export const kindLabel: Record<EventKind, string> = {
  milonga: "Milonga",
  clase: "Clase",
  practica: "Práctica",
  concierto: "En vivo",
};
