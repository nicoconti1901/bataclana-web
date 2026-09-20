export type LabConceptId =
  | "editorial-night"
  | "urban-milonga"
  | "contemporary-stage"
  | "archivo-vivo";

export type LabConceptMeta = {
  id: LabConceptId;
  letter: "A" | "B" | "C" | "D";
  name: string;
  route: `/lab/${LabConceptId}`;
  oneLiner: string;
  differentiators: string[];
};

export const labConcepts: LabConceptMeta[] = [
  {
    id: "editorial-night",
    letter: "A",
    name: "Editorial Night",
    route: "/lab/editorial-night",
    oneLiner:
      "Revista nocturna: tipografía de tinta, asimetría y revelados lentos.",
    differentiators: [
      "Grid editorial asimétrico",
      "Nav vertical tipográfica",
      "Densidad media-alta de lectura",
    ],
  },
  {
    id: "urban-milonga",
    letter: "B",
    name: "Urban Milonga",
    route: "/lab/urban-milonga",
    oneLiner:
      "Afiche de ciudad: bloques geométricos, ritmo de cartel y pista.",
    differentiators: [
      "Composición poster / bloques",
      "Nav inferior sticky de venue",
      "Densidad alta, tipografía dura",
    ],
  },
  {
    id: "contemporary-stage",
    letter: "C",
    name: "Contemporary Stage",
    route: "/lab/contemporary-stage",
    oneLiner:
      "Escena teatral: vacío dramático, tipografía cinética y foco.",
    differentiators: [
      "Negativo espacial extremo",
      "Nav mínima que se revela",
      "Densidad baja, motion de escena",
    ],
  },
  {
    id: "archivo-vivo",
    letter: "D",
    name: "Archivo Vivo",
    route: "/lab/archivo-vivo",
    oneLiner:
      "Documento vivo: papel, anotaciones al margen y línea de tiempo.",
    differentiators: [
      "Base papel + intervenciones",
      "Nav tipo ficha / índice",
      "Motivos de archivo y timeline",
    ],
  },
];
