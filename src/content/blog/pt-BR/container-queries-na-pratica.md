---
title: "Container queries na prática"
description: "Por que @container muda o jogo de componentes responsivos — com exemplos do hub."
pubDate: 2026-09-12
tags: ["container-queries","responsivo","moderno"]
relatedExamples: ["container-queries-layout","cards-responsivos","media-queries"]
relatedSnippets: ["container-query","full-bleed"]
---

Media queries olham para a **viewport**. Componentes reutilizáveis muitas vezes precisam olhar para o **espaço que receberam** — sidebar estreita, modal, card em grid.

Com `container-type: inline-size` no pai e `@container` no filho, o mesmo card pode empilhar no mobile *do componente* e alinhar em linha quando o container largar, mesmo que a janela do browser seja larga.

## Comece por aqui

1. Abra o playground [Layout com container queries](/exemplos/container-queries-layout/) e redimensione o shell.
2. Compare com [media queries clássicas](/exemplos/media-queries/) e [cards responsivos](/exemplos/cards-responsivos/).
3. Guarde o [snippet de container query](/snippets/container-query/) no seu kit.

Na trilha, a lição [Responsivo moderno](/trilhas/css-do-zero-ao-layout/08-responsivo-moderno/) amarra clamp, container queries e scroll-snap.
