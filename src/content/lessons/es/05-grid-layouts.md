---
title: "CSS Grid para layouts"
description: "Crea cuadrículas responsivas con repeat y minmax."
order: 5
trail: css-do-zero-ao-layout
relatedExamples: ["grid-galeria","cards-responsivos","media-queries"]
relatedSnippets: ["centralizar-grid","container-query"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


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
