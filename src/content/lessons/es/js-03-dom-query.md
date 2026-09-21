---
title: "Seleccionar elementos en el DOM"
description: "querySelector, querySelectorAll y texto/contenido del nodo."
order: 3
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-tabs"]
relatedSnippets: ["js-query-selector-all-loop","js-create-element"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


O DOM é a árvore de nós da página. O JS lê e altera essa árvore.

```js
const titulo = document.querySelector('h1');
const itens = document.querySelectorAll('[data-item]');
titulo.textContent = 'Atualizado';
```

- `querySelector` — o primeiro que casa com o seletor CSS.
- `querySelectorAll` — lista estática (NodeList) de todos.

Prefira seletores estáveis (`id`, `data-*`) a caminhos frágeis baseados em posição.
