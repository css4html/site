---
title: "Empacotar com Vite (lib mode)"
description: "Árvore do pacote, vite.config em library mode e entry do Custom Element."
order: 6
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-vite-lib-tree"]
relatedSnippets: ["wc-vite-lib-config", "wc-package-exports"]
---

Até aqui o CE vivia no playground. Em produção você publica uma **lib**.

<aside class="tip tip-wc"><strong>DICA WC</strong> — Vite **library mode** gera um (ou mais) bundles a partir de um entry, em vez de um app com `index.html`.</aside>

## Árvore típica

```text
image-gallery/
├── package.json
├── vite.config.ts
├── src/
│   ├── index.ts          ← entry: exporta classe + register()
│   ├── image-gallery.ts  ← o Custom Element
│   └── styles.css        ← opcional (ou CSS no shadow)
└── dist/                 ← saída do build
```

## `vite.config` (lib mode)

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ImageGallery',
      formats: ['es', 'umd'],
      fileName: (format) => `image-gallery.${format}.js`,
    },
  },
});
```

## HTML shell de desenvolvimento

```html
<!DOCTYPE html>
<html>
  <body>
    <image-gallery columns="3"><!-- imgs --></image-gallery>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
```

O exemplo **Árvore Vite lib** documenta o mapa mental; as lições 7–8 fecham export dual e consumo.
