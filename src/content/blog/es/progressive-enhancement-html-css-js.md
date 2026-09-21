---
title: "Progressive enhancement: HTML, luego CSS, luego JS"
description: "Por qué el orden importa — y cómo el hub CSS4HTML lo refleja en las rutas."
pubDate: 2026-09-15
tags: ["html","css","javascript","arquitetura"]
relatedExamples: ["html-artigo-semantico","js-form-validate"]
relatedSnippets: ["html-details-summary","js-prevent-default"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


**Progressive enhancement** é a ideia de entregar primeiro uma base útil (HTML), melhorar a experiência com apresentação (CSS) e só então acrescentar comportamento (JavaScript).

## Na prática

1. Um formulário com `label`, `required` e `type="email"` já funciona sem JS.
2. CSS organiza hierarquia visual e estados de foco.
3. JS entra para mensagens customizadas, autosave ou fetch — sem ser a única porta de entrada.

Se o script falhar, a página ainda deve fazer sentido. É por isso que as trilhas do CSS4HTML começam em [HTML](/trilhas/html-do-zero/), passam por [CSS](/trilhas/css-do-zero-ao-layout/) e chegam ao [DOM](/trilhas/javascript-do-zero/).
