export type PathStep = {
  id: string;
  beat: string;
  title: string;
  text: string;
  tone: "oido" | "eje" | "abrazo" | "pista";
};

export const tangoPath: PathStep[] = [
  {
    id: "oir",
    beat: "Uno",
    title: "Oír antes de mover",
    text: "El tango se entra por el oído. Una tanda, un silencio, el peso de un bandoneón. Todavía no hay paso: hay atención.",
    tone: "oido",
  },
  {
    id: "eje",
    beat: "Dos",
    title: "El eje y el caminar",
    text: "El cuerpo se acomoda sobre un eje. Se transfiere el peso, se camina lento. No es figura: es cómo estar de pie junto a otra persona.",
    tone: "eje",
  },
  {
    id: "abrazo",
    beat: "Tres",
    title: "El abrazo como conversación",
    text: "El abrazo informa, no examina. Se propone, se acepta o se espera. Ahí empieza el diálogo, no el lucimiento.",
    tone: "abrazo",
  },
  {
    id: "pista",
    beat: "Cuatro",
    title: "Entrar a la pista",
    text: "Circular, dejar espacio, escuchar la cortina. La milonga es un salón compartido: se llega para estar, no para demostrar.",
    tone: "pista",
  },
];
