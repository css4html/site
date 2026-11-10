/**
 * Sitemap com alternâncias hreflang (pt-BR / en / es / x-default).
 * Só lista alternativas para páginas que realmente existem em cada idioma
 * (ex.: posts do blog ainda não traduzidos ficam só em pt-BR).
 */
import type { APIRoute } from 'astro';
import { getBlogPosts, getExamples, getLessons, getSnippets, entrySlug } from '../i18n/collections';
import { locales, type Locale } from '../i18n/config';

const SITE = 'https://css4html.com.br';
const TRAILS = [
  'html-do-zero',
  'css-do-zero-ao-layout',
  'logica-com-js',
  'logica-com-ts',
  'javascript-do-zero',
  'react-do-basico-ao-estado',
  'webcomponents-com-vite',
  'git-na-pratica',
];

const prefix = (locale: Locale) => (locale === 'pt-BR' ? '' : `/${locale}`);
const abs = (locale: Locale, path: string) => `${SITE}${prefix(locale)}${path}`;

/** Um caminho (sem idioma) e os idiomas em que ele existe. */
type Entry = { path: string; langs: Locale[] };

function urlBlock({ path, langs }: Entry): string {
  const alternates =
    langs.length > 1
      ? [
          ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(l, path)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(langs.includes('pt-BR') ? 'pt-BR' : langs[0], path)}"/>`,
        ].join('\n')
      : '';
  return langs
    .map((l) => `  <url>\n    <loc>${abs(l, path)}</loc>${alternates ? `\n${alternates}` : ''}\n  </url>`)
    .join('\n');
}

export const GET: APIRoute = async () => {
  const all = [...locales] as Locale[];
  const entries: Entry[] = [];

  // Páginas fixas (existem nos três idiomas)
  for (const p of ['/', '/trilhas/', '/exemplos/', '/snippets/', '/blog/', '/consultoria/', ...TRAILS.map((t) => `/trilhas/${t}/`)]) {
    entries.push({ path: p, langs: all });
  }

  // Exemplos e snippets (mesmo slug em todos os idiomas)
  for (const ex of await getExamples('pt-BR')) entries.push({ path: `/exemplos/${ex.id}/`, langs: all });
  for (const sn of await getSnippets('pt-BR')) entries.push({ path: `/snippets/${sn.id}/`, langs: all });

  // Lições e posts: verificar em quais idiomas cada slug existe
  const lessonLangs = new Map<string, Locale[]>();
  const postLangs = new Map<string, Locale[]>();
  for (const locale of all) {
    for (const lesson of await getLessons(locale)) {
      if (!TRAILS.includes(lesson.data.trail)) continue;
      const path = `/trilhas/${lesson.data.trail}/${entrySlug(lesson)}/`;
      lessonLangs.set(path, [...(lessonLangs.get(path) ?? []), locale]);
    }
    for (const post of await getBlogPosts(locale)) {
      const path = `/blog/${entrySlug(post)}/`;
      postLangs.set(path, [...(postLangs.get(path) ?? []), locale]);
    }
  }
  for (const [path, langs] of [...lessonLangs, ...postLangs]) {
    entries.push({ path, langs: [...new Set(langs)] });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlBlock).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
