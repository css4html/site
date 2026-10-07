---
title: "Export dual"
description: "Classe nomeada + register() + auto-register."
tags: ["export","api"]
track: "wc"
language: "js"
code: |
    export class ImageGallery extends HTMLElement {}
    export function register(tag = 'image-gallery') {
      if (!customElements.get(tag)) customElements.define(tag, ImageGallery);
    }
    register();
---

Consumidor pode importar a classe ou só o side-effect.
