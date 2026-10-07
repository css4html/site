---
title: "customElements.define"
description: "Registrar um Custom Element com nome hifenizado."
tags: ["custom-elements","define"]
track: "wc"
language: "js"
code: |
    class HelloBadge extends HTMLElement {
      connectedCallback() {
        this.textContent = 'Olá';
      }
    }
    customElements.define('hello-badge', HelloBadge);
---

O nome da tag precisa conter hífen.
