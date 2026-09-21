---
title: "DOM + classes CSS: o combo do front-end"
description: "Como JavaScript e CSS conversam via classList — sem misturar estilo inline."
pubDate: 2026-09-18
tags: ["javascript","css","dom"]
relatedExamples: ["js-tabs","js-localstorage-theme"]
relatedSnippets: ["js-toggle-class","js-classlist-toggle","dark-mode-vars"]
---

O JavaScript moderno quase nunca deveria setar `element.style.color = …` para estados de UI. Em vez disso:

1. O CSS define como `.is-open`, `.is-active` ou `[data-theme="dark"]` aparecem.
2. O JS só **alterna classes ou atributos**.
3. Acessibilidade acompanha (`aria-expanded`, `hidden`, `aria-selected`).

Esse contrato simples aparece nos exemplos de [abas](/exemplos/js-tabs/), [tema com localStorage](/exemplos/js-localstorage-theme/) e no snippet [toggle de classe](/snippets/js-toggle-class/).

Quando HTML estrutura, CSS apresenta e JS orquestra classes, o código fica legível — e testável.
