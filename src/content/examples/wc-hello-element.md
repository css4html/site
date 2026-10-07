---
title: "Hello Custom Element"
description: "Primeiro custom element com label e Shadow DOM."
tags: ["webcomponents","custom-elements","basico"]
difficulty: "iniciante"
track: "wc"
order: 401
html: |
    <hello-badge label="CSS4HTML"></hello-badge>
    <p style="margin-top:1rem;font:0.95rem system-ui">Edite o atributo <code>label</code> ou o JS.</p>
css: |
    body { background: #0f172a; color: #e2e8f0; }
js: |
    class HelloBadge extends HTMLElement {
      static get observedAttributes() { return ['label']; }
      connectedCallback() {
        if (this.shadowRoot) return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `
          <style>
            span {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.4rem 0.75rem;
              border-radius: 999px;
              background: color-mix(in srgb, #F5A623 22%, transparent);
              border: 1px solid #F5A623;
              color: #F5A623;
              font: 600 0.9rem/1 system-ui, sans-serif;
              letter-spacing: 0.04em;
            }
          </style>
          <span></span>
        `;
        this._el = root.querySelector('span');
        this._render();
      }
      attributeChangedCallback() { this._render(); }
      _render() {
        if (this._el) this._el.textContent = this.getAttribute('label') || 'Olá';
      }
    }
    if (!customElements.get('hello-badge')) {
      customElements.define('hello-badge', HelloBadge);
    }
---

Custom Element mínimo com Shadow DOM e atributo observado. Badge no estilo **DICA WC**.
