---
title: "Árvore Vite lib (conceitual)"
description: "Mapa mental do pacote em library mode — entry, dist e HTML de preview."
tags: ["vite","lib-mode","estrutura"]
difficulty: "intermediario"
track: "wc"
order: 407
html: |
    <pre class="tree"></pre>
css: |
    body { background: #0f172a; }
    .tree {
      margin: 0;
      padding: 1rem 1.25rem;
      border-radius: 12px;
      border: 1px solid #F5A623;
      background: #1e293b;
      color: #e2e8f0;
      font: 13px/1.55 ui-monospace, monospace;
      white-space: pre;
      overflow: auto;
    }
js: |
    document.querySelector('.tree').textContent = `
    image-gallery/
    ├── package.json
    ├── vite.config.ts      ← build.lib
    ├── index.html          ← preview local (dev)
    ├── src/
    │   ├── index.ts        ← export + register()
    │   └── image-gallery.ts
    └── dist/
        ├── image-gallery.es.js
        └── image-gallery.umd.js
    `.trim();
---

No playground só visualizamos a árvore. No projeto real: `vite build` em lib mode gera `dist/`.
