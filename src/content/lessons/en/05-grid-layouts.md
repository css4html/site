---
title: "CSS Grid for layouts"
description: "Build responsive grids with repeat and minmax."
order: 5
trail: css-do-zero-ao-layout
relatedExamples: ["grid-galeria","cards-responsivos","media-queries"]
relatedSnippets: ["centralizar-grid","container-query"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


Grid controla linhas **e** colunas:

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

Essa fórmula sozinha já resolve muitas galerias e listagens.

Combine com [media queries](/exemplos/media-queries/) quando o layout precisar mudar de estrutura (ex.: sidebar).

Exemplos: [Galeria Grid](/exemplos/grid-galeria/) e [Cards responsivos](/exemplos/cards-responsivos/).
