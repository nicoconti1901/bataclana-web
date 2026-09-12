export type SpacePhoto = {
  id: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
};

/**
 * Fotos del espacio Bataclana.
 * Agregar entradas acá escala el carrusel sin tocar el layout.
 */
export const spaces: SpacePhoto[] = [
  {
    id: "entrada",
    title: "La entrada",
    caption: "La noche empieza en el umbral.",
    image: "/bataclana-home.png",
    imageAlt: "Calle nocturna hacia la milonga",
  },
  {
    id: "pista",
    title: "La pista",
    caption: "Luz baja, piso compartido.",
    image: "/tango-oido.jpg",
    imageAlt: "Salón con luz cálida",
  },
  {
    id: "barra",
    title: "La barra",
    caption: "Un descanso entre tandas.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Barra con luz tenue",
  },
  {
    id: "salon",
    title: "El salón",
    caption: "Aire de casa, no de escenario.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Salón de noche con gente",
  },
  {
    id: "luz",
    title: "La luz",
    caption: "Lo justo para mirar y para no mirar.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Ambiente de evento con luces cálidas",
  },
  {
    id: "pasillo",
    title: "El pasillo",
    caption: "Antes de pedir una tanda.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Pasillo interior con atmósfera nocturna",
  },
  {
    id: "detalle",
    title: "Detalle",
    caption: "Objetos que cuentan la casa.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Interior de bar con detalle",
  },
  {
    id: "cierre",
    title: "Después",
    caption: "Cuando la pista se vacía despacio.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Espacio vacío al final de la noche",
  },
];
