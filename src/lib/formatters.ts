const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

const timeFormatter = new Intl.DateTimeFormat("es-AR", {
  hour: "2-digit",
  minute: "2-digit",
});

export function formatEventDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function formatEventTime(iso: string): string {
  return timeFormatter.format(new Date(iso));
}

export function formatEventWhen(iso: string): string {
  return `${formatEventDate(iso)} · ${formatEventTime(iso)}`;
}

export function levelLabel(level: string): string {
  const map: Record<string, string> = {
    inicio: "Inicio",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
    practica: "Práctica",
  };
  return map[level] ?? level;
}
