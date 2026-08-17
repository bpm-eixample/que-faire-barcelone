import { ui, defaultLang, languages, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Ajoute le slash final à une URL/chemin interne (le site est servi en mode
 * « directory » : `/fr/blog/x` redirige en 301 vers `/fr/blog/x/`).
 * Laisse intacts les ancres et les URLs externes.
 */
export function withSlash(url: string): string {
  if (!url || /^[a-z]+:\/\//i.test(url) || url.startsWith('#')) return url;
  const [base, ...rest] = url.split(/(?=[#?])/);
  return (base.endsWith('/') ? base : base + '/') + rest.join('');
}

/** Build a localized path, e.g. localizePath('en', 'activites') -> '/en/activites/' */
export function localizePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export const allLangs = Object.keys(languages) as Lang[];

export { languages, defaultLang };
export type { Lang };
