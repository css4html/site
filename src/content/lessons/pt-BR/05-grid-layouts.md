---
title: "CSS Grid para layouts"
description: "Crie grades responsivas com repeat e minmax."
order: 5
trail: css-do-zero-ao-layout
relatedExamples: ["grid-galeria","cards-responsivos","media-queries"]
relatedSnippets: ["centralizar-grid","container-query"]
---

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
