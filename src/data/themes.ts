export type ThemeId = "vino" | "sepia";

export const DEFAULT_THEME: ThemeId = "vino";

export function resolveTheme(value: string | null): ThemeId {
  if (value === "sepia") return "sepia";
  return "vino";
}
