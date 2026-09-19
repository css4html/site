// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://css4html.com.br',
  output: 'static',
  integrations: [mdx()],
});
