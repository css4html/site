---
title: "Arrays e objetos"
description: "map, filter, find e objetos literais no dia a dia."
order: 5
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-todo-basico"]
relatedSnippets: ["js-query-selector-all-loop"]
---

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
