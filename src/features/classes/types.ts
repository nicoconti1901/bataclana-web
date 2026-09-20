export type ClassLevel = "inicio" | "intermedio" | "avanzado" | "practica";

export type DanceClass = {
  id: string;
  slug: string;
  title: string;
  level: ClassLevel;
  weekday: string;
  timeLabel: string;
  durationMinutes: number;
  instructors: string[];
  shortDescription: string;
  venueName: string;
  priceLabel?: string;
};
