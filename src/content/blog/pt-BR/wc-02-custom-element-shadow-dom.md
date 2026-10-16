---
title: "Web Components, lição 2: Custom Element + Shadow DOM"
description: "class extends HTMLElement, customElements.define(), attachShadow e estilos encapsulados."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-hello-element', 'wc-shadow-styles']
relatedSnippets: ['wc-custom-elements-define', 'wc-shadow-dom-attach', 'wc-observed-attributes']
draft: false
cover: /blog/covers/wc-02-custom-element-shadow-dom.png
coverAlt: "Capa DICA WC — Web Components, lição 2: Custom Element + Shadow DOM"
---

Hora de criar o primeiro Custom Element: uma classe, um nome de tag e um Shadow DOM para isolar o estilo.

## Anatomia mínima

Um Custom Element é uma classe que estende `HTMLElement` e é registrada com um nome que **contenha hífen**.

```js
class HelloBadge extends HTMLElement {
  connectedCallback() {
    this.textContent = this.getAttribute('label') || 'Olá';
  }
}

customElements.define('hello-badge', HelloBadge);
```

```html
<hello-badge label="CSS4HTML"></hello-badge>
```

> **Dica WC:** nomes de tag precisam de hífen (`hello-badge`, não `hellobadge`). Isso evita colisão com elementos HTML futuros.

## Shadow DOM

Sem shadow, o CSS da página vaza para dentro do componente (e o do componente vaza para fora). Com shadow, cada lado fica no seu lugar:

```js
connectedCallback() {
  const root = this.attachShadow({ mode: 'open' });
  root.innerHTML = `
    <style>
      span {
        color: #F5A623;
        font-weight: 700;
      }
    </style>
    <span><slot></slot></span>
  `;
}
```

- `mode: 'open'`: `element.shadowRoot` fica acessível, o que ajuda em debug e testes.
- `<slot>`: projeta os filhos do light DOM para dentro do shadow.

## Atributos observados

Para reagir quando um atributo muda, declare quais atributos observar:

```js
static get observedAttributes() {
  return ['label'];
}

attributeChangedCallback(name, _old, value) {
  // atualizar UI
}
```

## Pratique no playground

- ▶️ [Hello Custom Element](/exemplos/wc-hello-element/)
- ▶️ [Shadow DOM e estilos](/exemplos/wc-shadow-styles/)

Snippets relacionados:

- 🧩 [customElements.define](/snippets/wc-custom-elements-define/)
- 🧩 [attachShadow](/snippets/wc-shadow-dom-attach/)
- 🧩 [observedAttributes](/snippets/wc-observed-attributes/)

📚 Lição completa na trilha grátis: [Custom Element + Shadow DOM](/trilhas/webcomponents-com-vite/wc-02-custom-element-shadow-dom/)

---

← Anterior: [Lição 1: Por que Web Components?](/blog/wc-01-por-que-web-components/)

Próxima: [Lição 3: Galeria de imagens com Custom Element (vanilla)](/blog/wc-03-galeria-imagens-vanilla/) →
