---
title: "Selecting elements in the DOM"
description: "querySelector, querySelectorAll, and node text/content."
order: 3
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-tabs"]
relatedSnippets: ["js-query-selector-all-loop","js-create-element"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


O DOM é a árvore de nós da página. O JS lê e altera essa árvore.

```js
const titulo = document.querySelector('h1');
const itens = document.querySelectorAll('[data-item]');
titulo.textContent = 'Atualizado';
```

- `querySelector` — o primeiro que casa com o seletor CSS.
- `querySelectorAll` — lista estática (NodeList) de todos.

Prefira seletores estáveis (`id`, `data-*`) a caminhos frágeis baseados em posição.
