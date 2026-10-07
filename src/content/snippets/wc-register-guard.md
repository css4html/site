---
title: "Guarda no define"
description: "Evitar erro se o módulo for importado duas vezes."
tags: ["register","define"]
track: "wc"
language: "js"
code: |
    export function register(tag = 'image-gallery', Ctor = ImageGallery) {
      if (!customElements.get(tag)) {
        customElements.define(tag, Ctor);
      }
    }
---

Essencial em HMR e bundles duplicados.
