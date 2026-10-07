---
title: "observedAttributes"
description: "Reagir a mudanças de atributos HTML."
tags: ["atributos","lifecycle"]
track: "wc"
language: "js"
code: |
    static get observedAttributes() { return ['columns']; }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'columns') this._applyColumns(newValue);
    }
---

Só atributos listados disparam o callback.
