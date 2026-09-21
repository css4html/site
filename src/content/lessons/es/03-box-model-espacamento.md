---
title: "Box model y espaciado"
description: "Content, padding, border, margin y box-sizing."
order: 3
trail: css-do-zero-ao-layout
relatedExamples: ["box-model"]
relatedSnippets: ["reset-basico","gap-flex"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


Todo elemento é uma caixa. De dentro para fora:

1. **content** — o conteúdo
2. **padding** — espaço interno
3. **border** — borda
4. **margin** — espaço externo

## box-sizing: border-box

Com `border-box`, `width` inclui padding e border. Isso deixa layouts previsíveis. Muitos resets começam assim — veja o snippet [Reset mínimo](/snippets/reset-basico/).

Pratique no exemplo [Box model](/exemplos/box-model/).
