---
title: "Events and interaction"
description: "addEventListener, preventDefault, and the event object."
order: 4
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-accordion","js-form-validate"]
relatedSnippets: ["js-add-event-listener","js-prevent-default"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


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
