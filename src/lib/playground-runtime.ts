/** Console-only lessons run in a disposable worker owned by an opaque iframe.
 * A worker (not setTimeout around eval on the UI thread) makes while(true) stoppable.
 * These are learning checks, not tamper-proof grading or a general JS security service.
 */
export interface Exercise {
  functionName: string;
  /** Fail a check if the function changes its input data. */
  preserveArgs?: boolean;
  tests: { label: string; args: unknown[]; expected: unknown }[];
}

export const WORKER_SOURCE = String.raw`
let count = 0;
function format(value) {
  try {
    return (typeof value === 'string' ? value : JSON.stringify(value) ?? String(value)).slice(0, 1000);
  } catch { return '[valor não serializável]'; }
}
for (const level of ['log', 'info', 'warn', 'error']) {
  console[level] = (...args) => {
    if (count++ < 80) postMessage({ type: 'console', level, text: args.map(format).join(' ') });
  };
}
// JSON-shaped results: object property order is irrelevant, array order is not.
// Avoid JSON.stringify equality: NaN/Infinity must never compare equal to null.
function sameValue(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== 'object') return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!sameValue(a[i], b[i])) return false;
    return true;
  }
  if (Object.prototype.toString.call(a) !== '[object Object]' || Object.prototype.toString.call(b) !== '[object Object]') return false;
  const keys = Object.keys(a);
  return keys.length === Object.keys(b).length && keys.every(key => Object.prototype.hasOwnProperty.call(b, key) && sameValue(a[key], b[key]));
}
self.onmessage = ({ data }) => {
  try {
    const { code, exercise } = data;
    const name = exercise?.functionName;
    if (name && !/^[A-Za-z_$][\w$]*$/.test(name)) throw new Error('Nome de função inválido.');
    const fn = new Function(code + (name ? '\n;return typeof ' + name + ' === "function" ? ' + name + ' : null;' : ''))();
    if (exercise) {
      for (const test of exercise.tests) {
        let passed = false;
        let message;
        try {
          if (!fn) throw new Error('Crie a função ' + name + ' antes de verificar.');
          // Every case receives fresh data, even when a previous attempt mutated it.
          const args = JSON.parse(JSON.stringify(test.args));
          const actual = fn(...args);
          const changedInput = exercise.preserveArgs && !sameValue(args, test.args);
          passed = sameValue(actual, test.expected) && !changedInput;
          message = changedInput ? 'Não altere a entrada. Calcule e devolva um novo resultado.' : passed ? 'Boa! Resultado correto.' : 'Esperado: ' + format(test.expected) + '. Recebido: ' + format(actual) + '. Revise e tente de novo.';
        } catch (error) { message = error.message; }
        postMessage({ type: 'result', passed, label: test.label, message });
      }
    }
    postMessage({ type: 'done' });
  } catch (error) {
    postMessage({ type: 'console', level: 'error', text: error.name + ': ' + error.message });
    postMessage({ type: 'fatal', message: 'Não foi possível executar. Confira o erro no console e tente de novo.' });
  }
};
`;

/** Safe JSON inside script elements, including learner strings containing </script>. */
export function scriptJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function consoleBridge(channel: string) {
  return `(() => {
    let count = 0;
    const send = (level, args) => {
      if (count++ >= 80) return;
      const text = args.map(v => { try { return (typeof v === 'string' ? v : JSON.stringify(v) ?? String(v)).slice(0, 1000); } catch { return '[valor não serializável]'; } }).join(' ');
      parent.postMessage({ channel: ${scriptJson(channel)}, type: 'console', level, text }, '*');
    };
    for (const level of ['log','info','warn','error']) {
      const original = console[level].bind(console);
      console[level] = (...args) => { send(level, args); original(...args); };
    }
    addEventListener('error', e => send('error', [e.message]));
    addEventListener('unhandledrejection', e => send('error', [String(e.reason)]));
  })();`;
}

export function buildLogicSrcdoc(code: string, exercise: Exercise | undefined, channel: string) {
  const close = '</' + 'script>';
  return '<!doctype html><html><head><meta charset="utf-8">'
    + '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\' blob:; worker-src blob:; connect-src \'none\'">'
    + '</head><body><script>'
    + `(() => {
      const send = data => parent.postMessage({ ...data, channel: ${scriptJson(channel)} }, '*');
      let worker, url, timer;
      const stop = () => { clearTimeout(timer); worker?.terminate(); if (url) URL.revokeObjectURL(url); };
      try {
        url = URL.createObjectURL(new Blob([${scriptJson(WORKER_SOURCE)}], { type: 'text/javascript' }));
        worker = new Worker(url);
        worker.onmessage = ({ data }) => { send(data); if (data.type === 'done' || data.type === 'fatal') stop(); };
        worker.onerror = () => { send({ type: 'fatal', message: 'Não foi possível iniciar o código. Tente novamente.' }); stop(); };
        timer = setTimeout(() => {
          stop();
          send({ type: 'console', level: 'error', text: 'Tempo esgotado (1,5 s). Confira se há uma repetição sem fim.' });
          send({ type: 'fatal', message: 'Execução interrompida com segurança. Ajuste o código e tente de novo.' });
        }, 1500);
        worker.postMessage(${scriptJson({ code, exercise })});
        addEventListener('pagehide', stop, { once: true });
      } catch (error) { stop(); send({ type: 'fatal', message: String(error) }); }
    })();`
    + close + '</body></html>';
}
