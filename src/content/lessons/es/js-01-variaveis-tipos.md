---
title: "Variables y tipos"
description: "let, const, string, number, boolean, null y undefined."
order: 1
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-contador"]
relatedSnippets: ["js-dataset"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


JavaScript é a linguagem que dá **comportamento** às páginas.

## Declarar valores

```js
const nome = 'Ana';      // não reatribui
let idade = 30;         // pode mudar
idade = 31;
```

Prefira `const` por padrão; use `let` quando precisar reatribuir. Evite `var`.

## Tipos primitivos comuns

`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.

Use `typeof` para inspecionar — e lembre: `typeof null === "object"` é uma peculiaridade histórica.
