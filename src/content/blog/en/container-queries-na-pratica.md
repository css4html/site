---
title: "Container queries in practice"
description: "Why @container changes the game for responsive components — with hub examples."
pubDate: 2026-09-12
tags: ["container-queries","responsivo","moderno"]
relatedExamples: ["container-queries-layout","cards-responsivos","media-queries"]
relatedSnippets: ["container-query","full-bleed"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


Media queries olham para a **viewport**. Componentes reutilizáveis muitas vezes precisam olhar para o **espaço que receberam** — sidebar estreita, modal, card em grid.

Com `container-type: inline-size` no pai e `@container` no filho, o mesmo card pode empilhar no mobile *do componente* e alinhar em linha quando o container largar, mesmo que a janela do browser seja larga.

## Comece por aqui

1. Abra o playground [Layout com container queries](/exemplos/container-queries-layout/) e redimensione o shell.
2. Compare com [media queries clássicas](/exemplos/media-queries/) e [cards responsivos](/exemplos/cards-responsivos/).
3. Guarde o [snippet de container query](/snippets/container-query/) no seu kit.

Na trilha, a lição [Responsivo moderno](/trilhas/css-do-zero-ao-layout/08-responsivo-moderno/) amarra clamp, container queries e scroll-snap.
