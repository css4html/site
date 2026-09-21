---
title: "Arrays and objects"
description: "map, filter, find, and everyday object literals."
order: 5
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-todo-basico"]
relatedSnippets: ["js-query-selector-all-loop"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


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
