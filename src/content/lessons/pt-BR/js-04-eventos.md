---
title: "Eventos e interação"
description: "addEventListener, preventDefault e o objeto event."
order: 4
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-accordion","js-form-validate"]
relatedSnippets: ["js-add-event-listener","js-prevent-default"]
---

Eventos conectam ações do usuário ao seu código.

```js
botao.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('clicou');
});
```

## Ideias importantes

- Escute no elemento certo (ou use delegação no pai).
- `preventDefault()` cancela o comportamento padrão (submit, navegação).
- Remova listeners quando criar/destruir UI dinâmica (evitar vazamentos).
