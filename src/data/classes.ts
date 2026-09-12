export type ClassItem = {
  id: string;
  title: string;
  forWhom: string;
  day: string;
  time: string;
  note: string;
};

export const classes: ClassItem[] = [
  {
    id: "inicio",
    title: "Inicio",
    forWhom: "Nunca bailé tango",
    day: "Miércoles",
    time: "19:00",
    note: "Caminata, abrazo y cómo entrar a una milonga.",
  },
  {
    id: "escucha",
    title: "Oído en la pista",
    forWhom: "Quiero entender la música",
    day: "Jueves",
    time: "18:30",
    note: "Tandas, orquestas y por qué a veces se espera.",
  },
  {
    id: "salon",
    title: "Salón",
    forWhom: "Ya di algunos pasos",
    day: "Viernes",
    time: "19:30",
    note: "Circulación, códigos suaves y musicalidad.",
  },
];
