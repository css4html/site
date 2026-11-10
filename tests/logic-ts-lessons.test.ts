import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { readFileSync, existsSync } from 'node:fs';
import * as playgrounds from '../src/config/logic-ts-playgrounds.ts';
import { WORKER_SOURCE, type Exercise } from '../src/lib/playground-runtime.ts';
import { transpileTs, tsToLogicCode } from '../src/lib/ts-transpile.ts';
import { solutions } from './logic-ts-solutions.ts';

const fixtures = playgrounds as unknown as Record<string, any>;
const names = ['algorithm', 'variables', 'operators', 'decisions', 'loops', 'functions', 'arrays', 'objects', 'debugging', 'project'];
const slugs = ['algoritmo', 'variaveis-tipos', 'operadores-expressoes', 'decisoes', 'repeticao', 'funcoes', 'arrays', 'objetos', 'depuracao', 'projeto-calculadora-media'];

function run(ts: string, exercise?: Exercise) {
  const messages: any[] = [];
  runInNewContext(WORKER_SOURCE + ';self.onmessage({data: input});', {
    console: {}, self: {}, postMessage: (m: unknown) => messages.push(m), input: { code: tsToLogicCode(ts), exercise },
  }, { timeout: 1000 });
  return messages;
}
for (const name of names) {
  test(`ts ${name}: example has type syntax, transpiles and writes to Console`, () => {
    const source = fixtures[name + 'Example'];
    assert.match(source, /:\s*(number|string|boolean|Paridade|Aluno)\b|interface |type /);
    assert.equal(transpileTs(source).error, undefined);
    const messages = run(source);
    assert.ok(messages.some(m => m.type === 'console'));
    assert.ok(!messages.some(m => m.type === 'fatal'));
    assert.equal(messages.at(-1).type, 'done');
  });
  test(`ts ${name}: typed starter runs but has a useful failing check`, () => {
    const exercise = fixtures[name + 'Exercise'];
    assert.match(fixtures[name + 'Starter'], /\)\s*:\s*[A-Za-z]/, 'starter declares a return type');
    const messages = run(fixtures[name + 'Starter'], exercise);
    assert.equal(messages.filter(m => m.type === 'result').length, exercise.tests.length);
    assert.ok(messages.some(m => m.type === 'result' && !m.passed));
  });
  test(`ts ${name}: typed solution passes every declared case`, () => {
    const exercise = fixtures[name + 'Exercise'];
    const messages = run(solutions[name as keyof typeof solutions], exercise);
    assert.equal(messages.filter(m => m.passed).length, exercise.tests.length);
    assert.ok(!messages.some(m => m.type === 'fatal'));
  });
}
test('TS syntax errors become a friendly SyntaxError in the Console, not a crash', () => {
  const messages = run('const x: number = ;');
  assert.match(messages[0].text, /^SyntaxError: TypeScript:/);
  assert.equal(messages[1].type, 'fatal');
});
test('types are stripped, values are kept', () => {
  const out = transpileTs("interface A { n: number }\ntype U = 'a' | 'b';\nconst x: number[] = [1];\nfunction f(a: A, b?: string): number | null { return a.n as number; }").code!;
  assert.doesNotMatch(out, /interface|type U|: number/);
  assert.match(out, /const x = \[1\]/);
});
test('all ten TS lessons have content, two TS playgrounds, a check and a cover in every locale', () => {
  for (const locale of ['pt-BR', 'en', 'es']) {
    for (const [i, slug] of slugs.entries()) {
      const id = `logica-ts-${String(i + 1).padStart(2, '0')}-${slug}`;
      const source = readFileSync(`src/content/lessons/${locale}/${id}.mdx`, 'utf8');
      assert.match(source, new RegExp('order: ' + (i + 1) + '\\n'));
      assert.match(source, /trail: "logica-com-ts"/);
      assert.equal((source.match(/<Playground [^>]*language="ts"/g) ?? []).length, 2);
      assert.equal((source.match(/exercise=\{/g) ?? []).length, 1);
      assert.match(source, new RegExp(`cover: "/trilhas/logica-com-ts/covers/${id}.png"`));
      assert.ok(existsSync(`public/trilhas/logica-com-ts/covers/${id}.png`));
      assert.ok(!/Em breve|coming soon|en preparación/.test(source));
    }
  }
});
