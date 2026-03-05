export const routePairs = [
  { en: "/", cz: "/cs" },
  { en: "/about-me", cz: "/cs/o-mne" },
  { en: "/projects", cz: "/cs/projekty" },
  { en: "/contact", cz: "/cs/kontakt" },
  { en: "/projects/pixeldread", cz: "/cs/projekty/pixeldread" },
  { en: "/projects/pension-calculator", cz: "/cs/projekty/pension-calculator" },
  { en: "/projects/sheep-monopoly", cz: "/cs/projekty/sheep-monopoly" },
] as const;

export function toCs(path: string): string {
  const found = routePairs.find((p) => p.en === path);
  return found ? found.cz : "/cs";
}

export function toEn(path: string): string {
  const found = routePairs.find((p) => p.cz === path);
  return found ? found.en : "/";
}
