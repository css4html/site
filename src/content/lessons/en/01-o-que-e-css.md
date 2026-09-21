---
title: "What CSS is and where to start"
description: "Understand the role of CSS on the web and how to attach styles to HTML."
order: 1
trail: css-do-zero-ao-layout
relatedExamples: ["seletores-basicos"]
relatedSnippets: ["reset-basico"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


CSS (Cascading Style Sheets) descreve a **apresentação** de documentos HTML: cores, tipografia, espaçamento e layout.

## Três formas de aplicar

1. **Inline** — atributo `style` (evite no dia a dia).
2. **Interno** — tag `<style>` no documento.
3. **Externo** — arquivo `.css` referenciado com `<link>` (preferível).

## Cascata em uma frase

Quando várias regras conflitam, o navegador decide pela **origem**, **especificidade** e **ordem**. Mais específico e mais abaixo no arquivo costuma vencer.

## Próximo passo

Abra o exemplo [Seletores básicos](/exemplos/seletores-basicos/) e altere classes e IDs no playground.
