---
title: "Web Components 6/8: Empacotar com Vite (lib mode)"
description: "Árvore do pacote, vite.config em library mode e entry do Custom Element."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-vite-lib-tree']
relatedSnippets: ['wc-vite-lib-config', 'wc-package-exports']
draft: true
# cover: /blog/covers/wc-06-empacotar-com-vite.png
# coverAlt: "Capa DICA WC — Empacotar com Vite (lib mode)"
---

> **TODO texto Social** — introdução (2–3 parágrafos a partir da legenda do post da lição 6).

Parte do guia [Web Components do zero](/blog/web-components-do-zero/) · Lição completa: [Empacotar com Vite (lib mode)](/trilhas/webcomponents-com-vite/wc-06-empacotar-com-vite/).

## O código

```text
image-gallery/
├── package.json
├── vite.config.ts
├── src/
│   ├── index.ts          ← entry: exporta classe + register()
│   ├── image-gallery.ts  ← o Custom Element
│   └── styles.css        ← opcional (ou CSS no shadow)
└── dist/                 ← saída do build
```

> **TODO texto Social** — explicar o trecho acima em linguagem simples.

## Teste no playground

- [Playground: wc-vite-lib-tree](/exemplos/wc-vite-lib-tree/)

> **TODO texto Social** — chamada para ação (abrir o playground, seguir a trilha).
