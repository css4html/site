---
title: "Web Components 4/8: Mesma galeria no React"
description: "Usar o Custom Element dentro de JSX — props viram atributos."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-galeria-react']
relatedSnippets: ['wc-react-host', 'wc-custom-elements-define']
draft: true
# cover: /blog/covers/wc-04-galeria-no-react.png
# coverAlt: "Capa DICA WC — Mesma galeria no React"
---

> **TODO texto Social** — introdução (2–3 parágrafos a partir da legenda do post da lição 4).

Parte do guia [Web Components do zero](/blog/web-components-do-zero/) · Lição completa: [Mesma galeria no React](/trilhas/webcomponents-com-vite/wc-04-galeria-no-react/).

## O código

```tsx
function App() {
  return (
    <image-gallery columns="3">
      <img src="https://picsum.photos/id/249/300/300" alt="Cidade à noite" />
      <img src="https://picsum.photos/id/28/300/300" alt="Floresta verde" />
    </image-gallery>
  );
}
```

> **TODO texto Social** — explicar o trecho acima em linguagem simples.

## Teste no playground

- [Playground: wc-galeria-react](/exemplos/wc-galeria-react/)

> **TODO texto Social** — chamada para ação (abrir o playground, seguir a trilha).
