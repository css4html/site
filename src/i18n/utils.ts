import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLocale, isLocale, locales, type Locale } from './config';
import { ui, type UiKey } from './ui';

/** Astro content IDs lowercase folder names (pt-BR → pt-br). */
function normalizeLocaleToken(token: string): string {
  if (token.toLowerCase() === 'pt-br') return 'pt-BR';
  return token;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybe] = url.pathname.split('/');
  if (maybe) {
    const norm = normalizeLocaleToken(maybe);
    if (isLocale(norm)) return norm;
  }
  return defaultLocale;
}

export function useTranslations(locale: Locale) {
  const dict = ui[locale] ?? ui[defaultLocale];
  return function t(key: UiKey): string {
    return dict[key] ?? ui[defaultLocale][key] ?? key;
  };
}

/** Localize an absolute path like /trilhas/ or /exemplos/foo/ */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const parts = clean.split('/').filter(Boolean);
  if (parts[0]) {
    const norm = normalizeLocaleToken(parts[0]);
    if (isLocale(norm)) parts.shift();
  }
  const rest = parts.join('/');
  const url = getRelativeLocaleUrl(locale, rest);
  if (clean.endsWith('/') && !url.endsWith('/')) return `${url}/`;
  return url || '/';
}

/** Switch current pathname to another locale, preserving the rest of the path */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0]) {
    const norm = normalizeLocaleToken(parts[0]);
    if (isLocale(norm)) parts.shift();
  }
  const rest = parts.join('/');
  const url = getRelativeLocaleUrl(target, rest);
  if ((pathname.endsWith('/') || rest === '') && !url.endsWith('/')) return `${url}/`;
  return url || '/';
}

export function stripLocaleFromId(id: string): string {
  const parts = id.split('/');
  if (parts.length > 1) {
    const norm = normalizeLocaleToken(parts[0]);
    if (isLocale(norm)) return parts.slice(1).join('/');
  }
  return id;
}

export function idLocale(id: string): Locale | null {
  const first = id.split('/')[0];
  if (!first) return null;
  const norm = normalizeLocaleToken(first);
  return isLocale(norm) ? norm : null;
}

export { locales, defaultLocale, type Locale };
