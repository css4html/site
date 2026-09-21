---
title: "CSS accessibility: a quick checklist"
description: "Visible focus, contrast, motion, and forms — what CSS solves (and what it doesn’t)."
pubDate: 2026-09-16
tags: ["acessibilidade","formulario","focus"]
relatedExamples: ["formulario-basico","has-parent-selector","botao-hover"]
relatedSnippets: ["focus-ring","sr-only","checkbox-custom","radio-custom"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


CSS não substitui HTML semântico, mas decide se a pessoa **enxerga o foco**, se o contraste aguenta o sol do meio-dia e se animações respeitam `prefers-reduced-motion`.

## Checklist curto

- **Foco**: nunca `outline: none` sem substituto. Use o [focus ring](/snippets/focus-ring/).
- **Formulários**: label ligado ao controle; estados `:invalid` / `:focus-visible`. Veja o [formulário básico](/exemplos/formulario-basico/).
- **Controles custom**: esconda o input de forma acessível e espelhe `:checked` / `:focus-visible` — [checkbox](/snippets/checkbox-custom/) e [radio](/snippets/radio-custom/).
- **Conteúdo só para leitores de tela**: [sr-only](/snippets/sr-only/).
- **Motion**: respeite `prefers-reduced-motion` (o hub já faz isso no CSS global).

Quer ir além? A lição [Acessibilidade CSS](/trilhas/css-do-zero-ao-layout/09-acessibilidade-css/) da trilha aponta exemplos de `:has()` e hover com responsabilidade.
