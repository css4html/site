---
title: "attachShadow"
description: "Abrir Shadow DOM e injetar markup + CSS."
tags: ["shadow-dom"]
track: "wc"
language: "js"
code: |
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>:host{display:block}</style><slot></slot>`;
---

`mode: 'open'` expõe `element.shadowRoot`.
