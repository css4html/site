---
title: "O que é CSS e por onde começar"
description: "Entenda o papel do CSS na web e como ligar estilos ao HTML."
order: 1
trail: css-do-zero-ao-layout
relatedExamples: ["seletores-basicos"]
relatedSnippets: ["reset-basico"]
---

CSS (Cascading Style Sheets) descreve a **apresentação** de documentos HTML: cores, tipografia, espaçamento e layout.

## Três formas de aplicar

1. **Inline** — atributo `style` (evite no dia a dia).
2. **Interno** — tag `<style>` no documento.
3. **Externo** — arquivo `.css` referenciado com `<link>` (preferível).

## Cascata em uma frase

Quando várias regras conflitam, o navegador decide pela **origem**, **especificidade** e **ordem**. Mais específico e mais abaixo no arquivo costuma vencer.

## Próximo passo

Abra o exemplo [Seletores básicos](/exemplos/seletores-basicos/) e altere classes e IDs no playground.
