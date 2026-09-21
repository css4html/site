---
title: "Enlaces, imágenes y medios"
description: "a, img con alt, figure/figcaption y picture para responsividad."
order: 3
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-figure-figcaption"]
relatedSnippets: ["html-picture-source"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


## Links

```html
<a href="/trilhas/">Ver trilhas</a>
<a href="https://exemplo.com" rel="noopener noreferrer">Externo</a>
```

Texto do link deve fazer sentido fora de contexto (“clique aqui” é péssimo).

## Imagens

- `alt` descreve o conteúdo quando a imagem é informativa.
- `alt=""` quando a imagem é puramente decorativa.
- Prefira `width`/`height` (ou aspect-ratio no CSS) para reduzir CLS.

## figure e picture

`figure` + `figcaption` agrupam mídia e legenda. `picture` escolhe fonte por media query ou densidade.
