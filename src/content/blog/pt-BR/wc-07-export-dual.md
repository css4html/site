---
title: "Web Components 7/8: Export dual: ES module + Custom Element"
description: "Exportar a classe e registrar a tag — dois jeitos de consumir a mesma lib."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-dual-export']
relatedSnippets: ['wc-export-dual-pattern', 'wc-register-guard', 'wc-package-exports']
draft: true
# cover: /blog/covers/wc-07-export-dual.png
# coverAlt: "Capa DICA WC — Export dual: ES module + Custom Element"
---

> **TODO texto Social** — introdução (2–3 parágrafos a partir da legenda do post da lição 7).

Parte do guia [Web Components do zero](/blog/web-components-do-zero/) · Lição completa: [Export dual: ES module + Custom Element](/trilhas/webcomponents-com-vite/wc-07-export-dual/).

## O código

```ts
export class ImageGallery extends HTMLElement { /* ... */ }

export function register(tag = 'image-gallery') {
  if (!customElements.get(tag)) {
    customElements.define(tag, ImageGallery);
  }
}

register(); // auto-register no entry padrão
```

> **TODO texto Social** — explicar o trecho acima em linguagem simples.

## Teste no playground

- [Playground: wc-dual-export](/exemplos/wc-dual-export/)

> **TODO texto Social** — chamada para ação (abrir o playground, seguir a trilha).
