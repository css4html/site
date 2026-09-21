import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from './config';
import { idLocale, stripLocaleFromId } from './utils';
import { examplesI18n, snippetsI18n, localizeMeta } from './content-meta';

export function entrySlug(entry: { id: string }): string {
  return stripLocaleFromId(entry.id);
}

export async function getLessons(locale: Locale = defaultLocale) {
  const all = await getCollection('lessons');
  let items = all.filter((e) => idLocale(e.id) === locale);
  if (items.length === 0 && locale !== defaultLocale) {
    items = all.filter((e) => idLocale(e.id) === defaultLocale);
  }
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getBlogPosts(locale: Locale = defaultLocale) {
  const all = await getCollection('blog');
  let items = all.filter((e) => idLocale(e.id) === locale);
  if (items.length === 0 && locale !== defaultLocale) {
    items = all.filter((e) => idLocale(e.id) === defaultLocale);
  }
  return items.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getExamples(locale: Locale = defaultLocale) {
  const all = await getCollection('examples');
  return all
    .map((ex) => {
      const meta = localizeMeta(examplesI18n, ex.id, locale, {
        title: ex.data.title,
        description: ex.data.description,
      });
      return { ...ex, data: { ...ex.data, title: meta.title, description: meta.description } };
    })
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

export async function getSnippets(locale: Locale = defaultLocale) {
  const all = await getCollection('snippets');
  return all
    .map((sn) => {
      const meta = localizeMeta(snippetsI18n, sn.id, locale, {
        title: sn.data.title,
        description: sn.data.description,
      });
      return { ...sn, data: { ...sn.data, title: meta.title, description: meta.description } };
    })
    .sort((a, b) => a.data.title.localeCompare(b.data.title, locale));
}

export type LessonEntry = CollectionEntry<'lessons'>;
export type BlogEntry = CollectionEntry<'blog'>;
