import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const examples = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/examples' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['iniciante', 'intermediario', 'avancado']).default('iniciante'),
    html: z.string(),
    css: z.string(),
    order: z.number().optional(),
  }),
});

const snippets = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/snippets' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    code: z.string(),
    language: z.enum(['css', 'html', 'html+css']).default('css'),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    trail: z.string().default('css-do-zero-ao-layout'),
    relatedExamples: z.array(z.string()).default([]),
    relatedSnippets: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    relatedExamples: z.array(z.string()).default([]),
    relatedSnippets: z.array(z.string()).default([]),
  }),
});

export const collections = { examples, snippets, lessons, blog };
