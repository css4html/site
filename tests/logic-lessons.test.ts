import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { readFileSync } from 'node:fs';
import * as playgrounds from '../src/config/logic-playgrounds.ts';
import { WORKER_SOURCE, type Exercise } from '../src/lib/playground-runtime.ts';

const fixtures = playgrounds as unknown as Record<string, any>;
const names = ['algorithm', 'variables', 'operators', 'decisions', 'loops', 'functions', 'arrays', 'objects', 'debugging', 'project'];
import { solutions } from './logic-solutions.ts';

function run(code: string, exercise?: Exercise) {
  const messages: any[] = [];
  runInNewContext(WORKER_SOURCE + ';self.onmessage({data: input});', {
    console: {}, self: {}, postMessage: (m: unknown) => messages.push(m), input: { code, exercise },
  }, { timeout: 1000 });
  return messages;
}
for (const name of names) {
  test(`${name}: example runs and writes to Console`, () => {
    const messages = run(fixtures[name + 'Example']);
    assert.ok(messages.some(m => m.type === 'console'));
    assert.ok(!messages.some(m => m.type === 'fatal'));
    assert.equal(messages.at(-1).type, 'done');
  });
  test(`${name}: starter runs but has a useful failing check`, () => {
    const exercise = fixtures[name + 'Exercise'];
    const messages = run(fixtures[name + 'Starter'], exercise);
    assert.equal(messages.filter(m => m.type === 'result').length, exercise.tests.length);
    assert.ok(messages.some(m => m.type === 'result' && !m.passed));
  });
  test(`${name}: solution passes every declared case`, () => {
    const exercise = fixtures[name + 'Exercise'];
    const messages = run(solutions[name as keyof typeof solutions], exercise);
    assert.equal(messages.filter(m => m.passed).length, exercise.tests.length);
    assert.ok(!messages.some(m => m.type === 'fatal'));
  });
}
test('JSON-shaped equality is strict, recursive and independent of object key order', () => {
  for (const [expression, expected, passed] of [
    ["({ b: [2, { c: 3 }], a: 1 })", { a: 1, b: [2, { c: 3 }] }, true],
    ['NaN', null, false], ['Infinity', null, false],
    ['new Array(2)', [1, 2], false], ['[2, 1]', [1, 2], false],
    ["({ a: '1' })", { a: 1 }, false], ['({a: 1, b: 2})', { a: 1 }, false],
  ] as const) {
    const exercise = { functionName: 'answer', tests: [{ label: 'Comparação', args: [], expected }] };
    const message = run('function answer() { return ' + expression + '; }', exercise)[0];
    assert.equal(message.passed, passed, expression);
  }
});
test('read-only exercises reject mutations and keep fixture data unchanged', () => {
  const exercise = { functionName: 'answer', preserveArgs: true, tests: [{ label: 'Entrada', args: [[3, 2]], expected: 3 }] };
  const message = run('function answer(n) { const first = n[0]; n.pop(); return first; }', exercise)[0];
  assert.equal(message.passed, false);
  assert.match(message.message, /Não altere a entrada/);
  assert.deepEqual(exercise.tests[0].args, [[3, 2]]);
});
test('all ten lessons have content, two playgrounds and a check in every locale', () => {
  const slugs = ['algoritmo', 'variaveis-tipos', 'operadores-expressoes', 'decisoes', 'repeticao', 'funcoes', 'arrays', 'objetos', 'depuracao', 'projeto-calculadora-media'];
  for (const locale of ['pt-BR', 'en', 'es']) {
    for (const [i, slug] of slugs.entries()) {
      const source = readFileSync(`src/content/lessons/${locale}/logica-${String(i + 1).padStart(2, '0')}-${slug}.mdx`, 'utf8');
      assert.match(source, new RegExp('order: ' + (i + 1) + '\\n'));
      assert.equal((source.match(/<Playground /g) ?? []).length, 2);
      assert.equal((source.match(/exercise=\{/g) ?? []).length, 1);
      assert.ok(!/Em breve|coming soon|en preparación/.test(source));
    }
  }
});
