---
title: "Functions"
description: "Declare, return values, and pass parameters clearly."
order: 2
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-contador"]
relatedSnippets: ["js-debounce-sketch"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


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
