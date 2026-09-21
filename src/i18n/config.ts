export const defaultLocale = 'pt-BR' as const;
export const locales = ['pt-BR', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  'pt-BR': 'PT',
  en: 'EN',
  es: 'ES',
};

export const localeHtmlLang: Record<Locale, string> = {
  'pt-BR': 'pt-BR',
  en: 'en',
  es: 'es',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
