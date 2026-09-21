export const site = {
  name: "Nunca Canción",
  wordmark: "nunca canción",
  wordmarkLines: ["nunca", "canción"] as const,
  title: "Nunca Canción — Escritos",
  description:
    "Un archivo de escritos. Palabras, heridas y latidos en una experiencia de lectura íntima.",
  locale: "es-AR",
  openGraphLocale: "es_AR",
  /**
   * Set a full origin (no trailing slash), e.g. "https://example.com".
   * Canonical and absolute social URLs are emitted only when this is set.
   */
  productionUrl: "",
} as const;

export type SiteConfig = typeof site;
