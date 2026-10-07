---
title: "Export dual (classe + register)"
description: "Padrão register() com guarda + auto-register no entry."
tags: ["export","register","npm"]
difficulty: "avancado"
track: "wc"
order: 408
html: |
    <p class="note">Simulação do entry da lib — veja o console e a tag abaixo.</p>
    <hello-dual></hello-dual>
css: |
    body { background: #0f172a; color: #e2e8f0; font-family: system-ui, sans-serif; }
    .note { color: #94a3b8; }
js: |
    // === o que a lib exportaria ===
    class HelloDual extends HTMLElement {
      connectedCallback() {
        if (this.shadowRoot) return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `<style>
          span { color: #F5A623; font-weight: 700; }
        </style><span>Export dual OK</span>`;
      }
    }

    function register(tag = 'hello-dual') {
      if (!customElements.get(tag)) {
        customElements.define(tag, HelloDual);
        console.log('[wc] defined', tag);
      } else {
        console.log('[wc] already defined', tag);
      }
    }

    // auto-register (caminho 1)
    register();
    // segundo import não quebra (caminho seguro)
    register();

    // caminho 2: consumidor poderia fazer
    // import { HelloDual, register } from '...'
    window.HelloDual = HelloDual;
    window.registerHelloDual = register;
---

Dois `register()` seguidos são seguros graças a `customElements.get`.
