---
title: "Funções"
description: "Declarar, retornar valores e passar parâmetros com clareza."
order: 2
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-contador"]
relatedSnippets: ["js-debounce-sketch"]
---

Funções encapsulam comportamento reutilizável.

```js
function soma(a, b) {
  return a + b;
}

const dobra = (n) => n * 2;
```

## Boas práticas

- Nomes que descrevem a ação (`atualizarContador`, não `faz`).
- Funções curtas; uma responsabilidade.
- Evite efeitos colaterais escondidos — deixe claro o que a função muda no DOM.
