---
title: "Shadow DOM e estilos"
description: "CSS encapsulado: o host não vaza para dentro do componente."
tags: ["shadow-dom","css","encapsulamento"]
difficulty: "iniciante"
track: "wc"
order: 402
html: |
    <p class="page-title">Título da página (vermelho via CSS global)</p>
    <styled-card>
      <strong>Dentro do shadow</strong>
      <p>Este texto usa o CSS do componente — não o da página.</p>
    </styled-card>
css: |
    .page-title { color: #ef4444; font: 700 1.1rem system-ui; }
    /* Tentativa de afetar o card — não entra no shadow */
    strong { color: #ef4444 !important; }
js: |
    class StyledCard extends HTMLElement {
      connectedCallback() {
        if (this.shadowRoot) return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `
          <style>
            :host {
              display: block;
              margin-top: 1rem;
              padding: 1rem;
              border-radius: 12px;
              border: 1px solid #F5A623;
              background: #1e293b;
              color: #e2e8f0;
              font-family: system-ui, sans-serif;
            }
            strong { color: #F5A623; }
            p { margin: 0.5rem 0 0; color: #94a3b8; }
          </style>
          <slot></slot>
        `;
      }
    }
    if (!customElements.get('styled-card')) {
      customElements.define('styled-card', StyledCard);
    }
---

O `strong` vermelho da página **não** pinta o conteúdo do card — o Shadow DOM isola os estilos.
