---
title: "Flexbox: eixos e alinhamento"
description: "Distribua itens em uma dimensão com flex."
order: 4
trail: css-do-zero-ao-layout
relatedExamples: ["flexbox-centro","botao-hover"]
relatedSnippets: ["centralizar-flex","gap-flex"]
---

Flexbox brilha quando você tem uma **linha ou coluna** de itens:

```css
.container {
  display: flex;
  gap: 1rem;
  justify-content: space-between; /* eixo principal */
  align-items: center;            /* eixo cruzado */
}
```

## Quando usar

Menus, toolbars, centralizar um bloco, cartões em fila. Para grades de duas dimensões, prefira **Grid**.

Veja [Centralizar com Flexbox](/exemplos/flexbox-centro/) e o snippet [Centralizar com Flex](/snippets/centralizar-flex/).
