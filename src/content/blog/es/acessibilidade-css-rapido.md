---
title: "Accesibilidad con CSS: checklist rápido"
description: "Foco visible, contraste, motion y formularios — lo que CSS resuelve (y lo que no)."
pubDate: 2026-09-16
tags: ["acessibilidade","formulario","focus"]
relatedExamples: ["formulario-basico","has-parent-selector","botao-hover"]
relatedSnippets: ["focus-ring","sr-only","checkbox-custom","radio-custom"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


CSS não substitui HTML semântico, mas decide se a pessoa **enxerga o foco**, se o contraste aguenta o sol do meio-dia e se animações respeitam `prefers-reduced-motion`.

## Checklist curto

- **Foco**: nunca `outline: none` sem substituto. Use o [focus ring](/snippets/focus-ring/).
- **Formulários**: label ligado ao controle; estados `:invalid` / `:focus-visible`. Veja o [formulário básico](/exemplos/formulario-basico/).
- **Controles custom**: esconda o input de forma acessível e espelhe `:checked` / `:focus-visible` — [checkbox](/snippets/checkbox-custom/) e [radio](/snippets/radio-custom/).
- **Conteúdo só para leitores de tela**: [sr-only](/snippets/sr-only/).
- **Motion**: respeite `prefers-reduced-motion` (o hub já faz isso no CSS global).

Quer ir além? A lição [Acessibilidade CSS](/trilhas/css-do-zero-ao-layout/09-acessibilidade-css/) da trilha aponta exemplos de `:has()` e hover com responsabilidade.
