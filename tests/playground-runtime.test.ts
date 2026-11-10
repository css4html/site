import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { WORKER_SOURCE, buildLogicSrcdoc, scriptJson } from '../src/lib/playground-runtime.ts';

function run(code: string, exercise?: unknown) {
  const messages: any[] = [];
  const scope: any = { console: {}, self: {}, postMessage: (m: unknown) => messages.push(m) };
  runInNewContext(WORKER_SOURCE, scope);
  scope.self.onmessage({ data: { code, exercise } });
  return messages;
}
const exercise = { functionName: 'dobro', tests: [
  { label: 'Positivo', args: [3], expected: 6 },
  { label: 'Zero', args: [0], expected: 0 },
] };
test('captures console without injecting markup', () => {
  assert.equal(run('console.log("<img onerror=alert(1)>", 2)')[0].text, '<img onerror=alert(1)> 2');
});
test('reports passed and failed cases', () => {
  const results = run('function dobro(n) { return 0; }', exercise).filter(m => m.type === 'result');
  assert.deepEqual(results.map(m => m.passed), [false, true]);
});
test('correct answer, missing function, thrown exception and syntax error', () => {
  assert.equal(run('function dobro(n) { return n * 2; }', exercise).filter(m => m.passed).length, 2);
  assert.match(run('', exercise)[0].message, /Crie a função dobro/);
  assert.match(run('function dobro() { throw new Error("ops"); }', exercise)[0].message, /ops/);
  assert.equal(run('const = ;')[1].type, 'fatal');
});
test('strict types and console flood limit', () => {
  assert.equal(run('function dobro() { return "6"; }', exercise)[0].passed, false);
  assert.equal(run('for(let i=0;i<1000;i++) console.log(i)').length, 81);
});
test('escapes learner closing script tags and configures worker timeout', () => {
  assert.equal(scriptJson('</script>'), '"\\u003c/script>"');
  const html = buildLogicSrcdoc('console.log("</script>")', undefined, 'test');
  assert.equal((html.match(/<\/script>/g) ?? []).length, 1);
  assert.match(html, /1500/);
  assert.match(html, /worker\?\.terminate/);
  assert.match(html, /connect-src/);
});
