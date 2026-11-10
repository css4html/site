import { test, expect, type Page, type Locator } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const trail = '/trilhas/logica-com-js/';
const slugs = ['logica-01-algoritmo', 'logica-02-variaveis-tipos', 'logica-03-operadores-expressoes'];

async function replaceCode(page: Page, playground: Locator, code: string) {
  const editor = playground.locator('[data-editor="js"] .cm-content');
  await editor.click();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(code);
  // Explicit run cancels the debounce; no timing-dependent checks.
  await playground.locator('[data-action="run"]').click();
}

test('curriculum, lesson routes, i18n and OG metadata', async ({ page }) => {
  for (const prefix of ['', '/en', '/es']) {
    await page.goto(prefix + '/trilhas/');
    const hrefs = await page.locator('.card h2 a').evaluateAll(links => links.map(a => a.getAttribute('href')));
    expect(hrefs.indexOf(prefix + trail)).toBeLessThan(hrefs.indexOf(prefix + '/trilhas/javascript-do-zero/'));
    await page.goto(prefix + trail);
    await expect(page.locator('.trail-item')).toHaveCount(10);
    await expect(page.locator('a.trail-item')).toHaveCount(3);
    await expect(page.locator('.trail-item[aria-disabled="true"]')).toHaveCount(7);
    for (const slug of slugs) {
      const response = await page.goto(prefix + trail + slug + '/');
      expect(response?.status()).toBe(200);
      await expect(page.locator('main article > h1')).toBeVisible();
      await expect(page.locator('[data-growth-cta]')).not.toHaveAttribute('data-last', '1');
      await expect(page.locator('[data-editor="js"] .cm-editor')).toHaveCount(2);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /CSS4HTML/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://css4html.com.br' + prefix + trail + slug + '/');
    }
  }
});

test('console, mixed results, all passing, syntax/runtime errors and recovery', async ({ page }) => {
  await page.goto(trail + slugs[0] + '/');
  const example = page.locator('[data-playground]').first();
  const exercise = page.locator('[data-exercise]');
  await expect(example.locator('[data-console]')).toContainText('Troco: 8');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-check-results] li[data-passed="1"]')).toHaveCount(1);
  await expect(exercise.locator('[data-check-results] li[data-passed="0"]')).toHaveCount(2);
  await expect(exercise.locator('[data-check-summary]')).toContainText('1 de 3');
  await replaceCode(page, exercise, 'function calcularTroco(pago, preco) { return pago - preco; } console.log("Tentativa corrigida");');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-check-results] li[data-passed="1"]')).toHaveCount(3);
  await expect(exercise.locator('[data-console]')).toContainText('Tentativa corrigida');
  await replaceCode(page, example, 'const = ;');
  await expect(example.locator('[data-console]')).toContainText('SyntaxError');
  await replaceCode(page, example, 'throw new Error("Erro de teste");');
  await expect(example.locator('[data-console]')).toContainText('Erro de teste');
  await example.locator('[data-action="reset"]').click();
  await expect(example.locator('[data-console]')).toContainText('Troco: 8');
});

test('worker terminates infinite loops without freezing the page, including within a test', async ({ page }) => {
  await page.goto(trail + slugs[0] + '/');
  const exercise = page.locator('[data-exercise]');
  await replaceCode(page, exercise, 'function calcularTroco() { while(true) {} }');
  await exercise.locator('[data-action="check"]').click();
  await expect(exercise.locator('[data-console]')).toContainText('Tempo esgotado', { timeout: 8000 });
  await expect(exercise.locator('[data-action="check"]')).toBeEnabled();
  await exercise.locator('[data-action="reset"]').click();
  await expect(exercise.locator('[data-console]')).toContainText('Meu teste: -8');
  await replaceCode(page, exercise, 'while(true) {}');
  await expect(exercise.locator('[data-console]')).toContainText('Tempo esgotado', { timeout: 8000 });
  await exercise.locator('[data-action="reset"]').click();
  await expect(exercise.locator('[data-console]')).toContainText('Meu teste: -8');
});

test('the other exercises accept their solutions', async ({ page }) => {
  const solutions = [
    'function tipoDoValor(valor) { return typeof valor; }',
    'function podeEntrar(idade, temConvite, acompanhado) { return idade >= 18 && (temConvite || acompanhado); }',
  ];
  for (let i = 0; i < solutions.length; i++) {
    await page.goto(trail + slugs[i + 1] + '/');
    const exercise = page.locator('[data-exercise]');
    await replaceCode(page, exercise, solutions[i]);
    await exercise.locator('[data-action="check"]').click();
    await expect(exercise.locator('[data-check-summary]')).toContainText('Mandou bem!');
    await expect(exercise.locator('[data-passed="0"]')).toHaveCount(0);
  }
});

test('desktop/mobile screenshots, readable result list and no horizontal page overflow', async ({ page }) => {
  const directory = process.env.SCREENSHOT_DIR ?? 'test-results/screenshots';
  await mkdir(directory, { recursive: true });
  for (const [name, width, height] of [['desktop', 1365, 1000], ['mobile', 390, 844]] as const) {
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(trail + slugs[0] + '/');
    const exercise = page.locator('[data-exercise]');
    await exercise.locator('[data-action="check"]').click();
    await expect(exercise.locator('[data-check-summary]')).toContainText('1 de 3');
    await expect(exercise.locator('[data-editor="js"] .cm-content')).toBeVisible();
    const editorWidth = await exercise.locator('[data-editor="js"]').evaluate(el => el.getBoundingClientRect().width);
    const panelWidth = await exercise.locator('.editor-box[data-pane="js"]').evaluate(el => el.getBoundingClientRect().width);
    expect(editorWidth).toBeGreaterThan(panelWidth * 0.9);
    await exercise.scrollIntoViewIfNeeded();
    await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
    await page.screenshot({ path: directory + '/lesson-console-check-' + name + '.png', fullPage: true });
    await exercise.screenshot({ path: directory + '/exercise-detail-' + name + '.png' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});

test('HTML/CSS/JS and Web Components previews still work', async ({ page }) => {
  await page.goto('/exemplos/js-contador/');
  const frame = page.frameLocator('[data-preview]');
  await expect(frame.locator('button').first()).toBeVisible();
  const before = await frame.locator('body').innerText();
  await frame.locator('button').first().click();
  expect(await frame.locator('body').innerText()).not.toEqual(before);
  await page.goto('/exemplos/wc-hello-element/');
  await expect(page.frameLocator('[data-preview]').locator('hello-badge')).toBeVisible();
  await page.frameLocator('[data-preview]').locator('body').evaluate(() => { console.log('Console WC funcionando'); });
  await expect(page.locator('[data-console]')).toContainText('Console WC funcionando');
});

test('React/TSX still mounts the example', async ({ page }) => {
  await page.goto('/exemplos/react-hello-jsx/');
  await expect(page.frameLocator('[data-preview]').locator('#root')).not.toBeEmpty({ timeout: 20000 });
  await page.frameLocator('[data-preview]').locator('body').evaluate(() => { console.log('Console React funcionando'); });
  await expect(page.locator('[data-console]')).toContainText('Console React funcionando');
});
