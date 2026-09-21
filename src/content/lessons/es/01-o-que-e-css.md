---
title: "Qué es CSS y por dónde empezar"
description: "Entiende el papel del CSS en la web y cómo enlazar estilos al HTML."
order: 1
trail: css-do-zero-ao-layout
relatedExamples: ["seletores-basicos"]
relatedSnippets: ["reset-basico"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


CSS (Cascading Style Sheets) descreve a **apresentação** de documentos HTML: cores, tipografia, espaçamento e layout.

## Três formas de aplicar

1. **Inline** — atributo `style` (evite no dia a dia).
2. **Interno** — tag `<style>` no documento.
3. **Externo** — arquivo `.css` referenciado com `<link>` (preferível).

## Cascata em uma frase

Quando várias regras conflitam, o navegador decide pela **origem**, **especificidade** e **ordem**. Mais específico e mais abaixo no arquivo costuma vencer.

## Próximo passo

Abra o exemplo [Seletores básicos](/exemplos/seletores-basicos/) e altere classes e IDs no playground.
