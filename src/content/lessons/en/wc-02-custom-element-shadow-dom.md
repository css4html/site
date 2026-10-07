---
title: "Custom Element + Shadow DOM"
description: "class extends HTMLElement, define(), attachShadow, and encapsulated styles."
order: 2
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-hello-element", "wc-shadow-styles"]
relatedSnippets: ["wc-custom-elements-define", "wc-shadow-dom-attach", "wc-observed-attributes"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; body stays in Portuguese for now.

Um Custom Element é uma **classe** que estende `HTMLElement` e é registrada com um nome que contenha hífen.

<aside class="tip tip-wc"><strong>DICA WC</strong> — Nomes de tag precisam de hífen (`hello-badge`, não `hellobadge`). Isso evita colisão com HTML futuro.</aside>

## Anatomia mínima

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

## Shadow DOM

Sem shadow, o CSS da página vaza para dentro (e o CSS do componente vaza para fora). Com shadow:

```js
connectedCallback() {
  const root = this.attachShadow({ mode: 'open' });
  root.innerHTML = `
    <style>
      span { color: #F5A623; font-weight: 700; }
    </style>
    <span><slot></slot></span>
  `;
}
```

- `mode: 'open'` — `element.shadowRoot` fica acessível (útil para debug e testes)
- `<slot>` — projeta filhos do light DOM para dentro do shadow

## Atributos observados

```js
static get observedAttributes() { return ['label']; }
attributeChangedCallback(name, _old, value) {
  // atualizar UI
}
```

Pratique nos exemplos **Hello element** e **Shadow styles**.
