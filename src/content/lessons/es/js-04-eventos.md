---
title: "Eventos e interacción"
description: "addEventListener, preventDefault y el objeto event."
order: 4
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-accordion","js-form-validate"]
relatedSnippets: ["js-add-event-listener","js-prevent-default"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


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
