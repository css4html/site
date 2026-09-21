---
title: "Basic HTML accessibility"
description: "Focus order, skip link, alt, labels, and useful landmarks."
order: 6
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-nav-landmarks"]
relatedSnippets: ["html-skip-link","html-label-input"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


Acessibilidade não é um “extra”: começa com HTML bem estruturado.

## Checklist rápido

1. Hierarquia de `h1`–`h6` coerente (um `h1` principal).
2. Skip link para pular o menu.
3. Contraste e foco visível (CSS ajuda; HTML entrega a ordem).
4. Controles nativos antes de reinventar com `div` + clique.
5. Idioma da página (`lang`) e textos alternativos.

## dialog e details

Elementos nativos como `<details>` e `<dialog>` já trazem teclado e semântica — prefira-os a widgets caseiros quando bastarem.
