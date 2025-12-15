export const routePairs = [
  { en: "/", cz: "/cs" },
  { en: "/about-me", cz: "/cs/o-mne" },
  { en: "/projects", cz: "/cs/projekty" },
  { en: "/contact", cz: "/cs/kontakt" },
] as const;

export function toCs(path: string): string {
  const found = routePairs.find((p) => p.en === path);
  return found ? found.cz : "/cs";
}

export function toEn(path: string): string {
  const found = routePairs.find((p) => p.cz === path);
  return found ? found.en : "/";
}
