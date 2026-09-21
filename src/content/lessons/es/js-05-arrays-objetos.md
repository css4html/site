---
title: "Arrays y objetos"
description: "map, filter, find y objetos literales del día a día."
order: 5
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-todo-basico"]
relatedSnippets: ["js-query-selector-all-loop"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


Dados em JS quase sempre são **objetos** e **arrays**.

```js
const usuario = { nome: 'Lia', ativo: true };
const nums = [1, 2, 3];
const dobrados = nums.map((n) => n * 2);
const pares = nums.filter((n) => n % 2 === 0);
```

Destructuring ajuda a ler:

```js
const { nome } = usuario;
const [primeiro] = nums;
```
