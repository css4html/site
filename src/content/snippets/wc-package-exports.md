---
title: "package.json exports"
description: "Campo exports apontando para o ESM da lib."
tags: ["npm","package"]
track: "wc"
language: "js"
code: |
    {
      "name": "@css4html/image-gallery",
      "type": "module",
      "exports": {
        ".": { "import": "./dist/image-gallery.es.js" }
      }
    }
---

Apps Vite resolvem o entry limpo via `exports`.
