import { test, expect, type Page, type Locator } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { solutions } from './logic-ts-solutions';
const trail = '/trilhas/logica-com-ts/';
const slugs = [
  'logica-ts-01-algoritmo', 'logica-ts-02-variaveis-tipos', 'logica-ts-03-operadores-expressoes',
  'logica-ts-04-decisoes', 'logica-ts-05-repeticao', 'logica-ts-06-funcoes', 'logica-ts-07-arrays',
  'logica-ts-08-objetos', 'logica-ts-09-depuracao', 'logica-ts-10-projeto-calculadora-media',
];
const names = ['algorithm', 'variables', 'operators', 'decisions', 'loops', 'functions', 'arrays', 'objects', 'debugging', 'project'] as const;

async function replaceCode(page: Page, playground: Locator, code: string) {
  const editor = playground.locator('[data-editor="js"] .cm-content');
  await editor.click();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(code);
  await playground.locator('[data-action="run"]').click();
}

test('TS curriculum, routes, i18n, covers, OG metadata and JS/TS cross-links', async ({ page }) => {
  for (const prefix of ['', '/en', '/es']) {
    await page.goto(prefix + '/trilhas/');
    const hrefs = await page.locator('.card h2 a').evaluateAll(links => links.map(a => a.getAttribute('href')));
    expect(hrefs.indexOf(prefix + trail)).toBe(hrefs.indexOf(prefix + '/trilhas/logica-com-js/') + 1);
    await page.goto(prefix + trail);
    await expect(page.locator('a.trail-item')).toHaveCount(10);
    await expect(page.locator('[data-trail-switch]')).toHaveAttribute('href', prefix + '/trilhas/logica-com-js/');
    await page.goto(prefix + '/trilhas/logica-com-js/');
    await expect(page.locator('[data-trail-switch]')).toHaveAttribute('href', prefix + trail);
    for (const slug of slugs) {
      const response = await page.goto(prefix + trail + slug + '/');
      expect(response?.status()).toBe(200);
      await expect(page.locator('main article > h1')).toBeVisible();
      await expect(page.locator('[data-growth-cta]')).toHaveAttribute('data-trail', 'logica-com-ts');
      if (slug === slugs[9]) await expect(page.locator('[data-growth-cta]')).toHaveAttribute('data-last', '1');
      else await expect(page.locator('[data-growth-cta]')).not.toHaveAttribute('data-last', '1');
      await expect(page.locator('.playground[data-language="ts"] [data-editor="js"] .cm-editor')).toHaveCount(2);
      await expect(page.locator('[data-trail-switch]')).toHaveAttribute('href', prefix + '/trilhas/logica-com-js/' + slug.replace('logica-ts-', 'logica-') + '/');
      const cover = 'https://css4html.com.br/trilhas/logica-com-ts/covers/' + slug + '.png';
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', cover);
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', cover);
      const image = page.locator('main article > img.post-cover');
      await expect(image).toHaveAttribute('src', '/trilhas/logica-com-ts/covers/' + slug + '.png');
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBe(1200);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://css4html.com.br' + prefix + trail + slug + '/');
    }
  }
});

test('TS code runs: console, mixed results, typed fix, TS syntax error and recovery', async ({ page }) => {
  await page.goto(trail + slugs[0] + '/');
  const example = page.locator('[data-playground]').first();
  const exercise = page.locator('[data-exercise]');
  await expect(example.locator('[data-console]')).toContainText('Troco: 8');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-check-summary]')).toContainText('1 de 3');
  await replaceCode(page, exercise, solutions.algorithm + ' console.log("Tentativa tipada");');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-check-results] li[data-passed="1"]')).toHaveCount(3);
  await expect(exercise.locator('[data-console]')).toContainText('Tentativa tipada');
  await replaceCode(page, example, 'const x: number = ;');
  await expect(example.locator('[data-console]')).toContainText('SyntaxError: TypeScript');
  await example.locator('[data-action="reset"]').click();
  await expect(example.locator('[data-console]')).toContainText('Troco: 8');
});

test('TS worker still stops infinite loops', async ({ page }) => {
  await page.goto(trail + slugs[0] + '/');
  const exercise = page.locator('[data-exercise]');
  await replaceCode(page, exercise, 'function calcularTroco(a: number, b: number): number { while (true) {} }');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-console]')).toContainText('Tempo esgotado', { timeout: 8000 });
  await expect(exercise.locator('[data-action="check"]')).toBeEnabled();
});

test('every TS lesson rejects its starter and accepts the typed solution in every locale', async ({ page }) => {
  for (const prefix of ['', '/en', '/es']) {
    for (const [index, name] of names.entries()) {
      await page.goto(prefix + trail + slugs[index] + '/');
      await expect(page.locator('[data-playground]').first().locator('[data-console]')).not.toBeEmpty();
      const exercise = page.locator('[data-exercise]');
      await exercise.locator('[data-action="check"]').click();
      await expect(exercise.locator('[data-check-summary]')).toContainText('Revise');
      await replaceCode(page, exercise, solutions[name]);
      await exercise.locator('[data-action="check"]').click();
      await expect(exercise.locator('[data-check-summary]')).toContainText('Mandou bem!');
      await expect(exercise.locator('[data-passed="0"]')).toHaveCount(0);
    }
  }
});

test('TS screenshots: Verificar passing and TS-specific content, no horizontal overflow', async ({ page }) => {
  const directory = process.env.SCREENSHOT_DIR ?? 'test-results/screenshots';
  await mkdir(directory, { recursive: true });
  await page.setViewportSize({ width: 1365, height: 1000 });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(trail + slugs[9] + '/');
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  const exercise = page.locator('[data-exercise]');
  await replaceCode(page, exercise, solutions.project + '\nconsole.log(boletim({ nome: "Ana", notas: [8, 6] }));');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-check-summary]')).toContainText('6 de 6');
  await exercise.screenshot({ path: directory + '/ts-lesson-10-verificar-passed-desktop.png' });
  await page.goto(trail + slugs[7] + '/');
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  const heading = page.locator('main article h2').first();
  await heading.scrollIntoViewIfNeeded();
  await expect(page.locator('[data-playground]').first().locator('[data-console]')).toContainText('Média: 7');
  await page.screenshot({ path: directory + '/ts-lesson-08-interface-desktop.png' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('TS covers are served intact (1200×630)', async ({ request }) => {
  for (const slug of slugs) {
    const response = await request.get('/trilhas/logica-com-ts/covers/' + slug + '.png');
    expect(response.status()).toBe(200);
    const bytes = await response.body();
    expect(bytes.readUInt32BE(16)).toBe(1200);
    expect(bytes.readUInt32BE(20)).toBe(630);
  }
});
