---
title: "Web Components 2/8: Custom Element + Shadow DOM"
description: "class extends HTMLElement, define(), attachShadow e estilos encapsulados."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-hello-element', 'wc-shadow-styles']
relatedSnippets: ['wc-custom-elements-define', 'wc-shadow-dom-attach', 'wc-observed-attributes']
draft: true
# cover: /blog/covers/wc-02-custom-element-shadow-dom.png
# coverAlt: "Capa DICA WC — Custom Element + Shadow DOM"
---

> **TODO texto Social** — introdução (2–3 parágrafos a partir da legenda do post da lição 2).

Parte do guia [Web Components do zero](/blog/web-components-do-zero/) · Lição completa: [Custom Element + Shadow DOM](/trilhas/webcomponents-com-vite/wc-02-custom-element-shadow-dom/).

## O código

```js
class HelloBadge extends HTMLElement {
  connectedCallback() {
    this.textContent = this.getAttribute('label') || 'Olá';
  }
}
customElements.define('hello-badge', HelloBadge);
```

> **TODO texto Social** — explicar o trecho acima em linguagem simples.

## Teste no playground

- [Playground: wc-hello-element](/exemplos/wc-hello-element/)
- [Playground: wc-shadow-styles](/exemplos/wc-shadow-styles/)

> **TODO texto Social** — chamada para ação (abrir o playground, seguir a trilha).
