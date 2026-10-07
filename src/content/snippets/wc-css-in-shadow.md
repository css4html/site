---
title: "CSS no Shadow DOM"
description: "Estilos encapsulados com :host e ::slotted."
tags: ["css","shadow-dom"]
track: "wc"
language: "css"
code: |
    :host { display: block; }
    .grid { display: grid; gap: 0.75rem; }
    ::slotted(img) {
      width: 100%;
      object-fit: cover;
    }
---

`:host` estiliza o próprio custom element; `::slotted` atinge filhos projetados.
