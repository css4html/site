# LÓGICA com TS — trilha completa

- Trilha: `/trilhas/logica-com-ts/`, logo depois de LÓGICA com JS na home, nas trilhas, no menu, no rodapé e no sitemap.
- Mesmo conteúdo e progressão da trilha JS (`docs/logica-com-js.md`), reescrito em TypeScript, em pt-BR, en e es. São 10 aulas com explicação, exemplo executável com Console e exercício com Verificar (46 casos, os mesmos da trilha JS).
- O TypeScript entra onde faz sentido: anotações e inferência (aulas 1–3), uniões e tipos literais (4), contadores e retorno `string` (5), assinaturas e parâmetros opcionais (6), `number[]`/`readonly` e `number | null` (7), `interface Aluno` (8), o que o verificador de tipos pega e o que não pega (9) e um projeto final com `Aluno`/`Situacao`/`Boletim` (10).
- As duas trilhas se ligam (`data-trail-switch`): no índice ("versão em JS/TS") e em cada aula, apontando para a aula equivalente.

| Aula | Título em pt-BR | Slug | Capa (nó Figma) |
| --- | --- | --- | --- |
| 1 | O que é um algoritmo | `logica-ts-01-algoritmo` | 238:95 |
| 2 | Variáveis e tipos | `logica-ts-02-variaveis-tipos` | 238:120 |
| 3 | Operadores e expressões | `logica-ts-03-operadores-expressoes` | 238:145 |
| 4 | Decisões | `logica-ts-04-decisoes` | 238:216 |
| 5 | Repetição: tabuada e FizzBuzz | `logica-ts-05-repeticao` | 238:241 |
| 6 | Funções | `logica-ts-06-funcoes` | 238:266 |
| 7 | Arrays: percorrer, somar e achar o maior | `logica-ts-07-arrays` | 238:291 |
| 8 | Objetos: aluno e notas | `logica-ts-08-objetos` | 238:316 |
| 9 | Depuração e casos de borda | `logica-ts-09-depuracao` | 238:341 |
| 10 | Projeto final: calculadora de média | `logica-ts-10-projeto-calculadora-media` | 238:366 |

URL local: `http://localhost:4321/trilhas/logica-com-ts/<slug>/` (também `/en/...` e `/es/...`).
URL final após merge: `https://css4html.com.br/trilhas/logica-com-ts/<slug>/`.

## Capas

Arquivo Figma `bBrqYuQ0ywcrPJQfhIlrvm`, seção "Trilha LÓGICA com TS" (kit "DICA LÓGICA TS"), exportadas em PNG 1x (1200×630) para `public/trilhas/logica-com-ts/covers/<slug>.png`. O campo `cover` alimenta a imagem do artigo e OG/Twitter nos três idiomas.

## Playground TypeScript

`<Playground mode="logic" language="ts">` usa o mesmo Worker descartável dentro do iframe sandbox, com o mesmo limite de 1,5 s. Antes de executar, `src/lib/ts-transpile.ts` remove os tipos com Sucrase (o mesmo transpilador do playground React, aqui empacotado do npm e carregado só nas aulas TS). Um erro de sintaxe TS vira `SyntaxError: TypeScript: …` no Console. O Sucrase **não verifica tipos**: anotações erradas não bloqueiam a execução. A aula 9 explica isso, e a checagem completa fica no editor do aluno.

## Conferência local

```sh
npm test          # 71 testes unitários (33 novos da trilha TS)
npm run build
npm run test:e2e  # 16 testes de navegador (6 novos da trilha TS)
```

O spec `tests/logica-ts.spec.ts` gera `ts-lesson-10-verificar-passed-desktop.png` e `ts-lesson-08-interface-desktop.png` em `test-results/screenshots/`. As soluções de referência tipadas ficam em `tests/logic-ts-solutions.ts`.

Depois de instalar o `sucrase`, reinicie o `npm run dev` se o navegador mostrar "504 Outdated Optimize Dep".
