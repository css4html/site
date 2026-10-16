---
title: "Web Components, lição 6: Empacotar com Vite (library mode)"
description: "Árvore do pacote, vite.config em library mode e os bundles ES + UMD do Custom Element."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-vite-lib-tree']
relatedSnippets: ['wc-vite-lib-config', 'wc-package-exports']
draft: true
# cover: /blog/covers/wc-06-empacotar-com-vite.png
# coverAlt: "Capa DICA WC — Empacotar com Vite (lib mode)"
---

Até aqui o `<image-gallery>` vivia no playground. Para usar em qualquer projeto, ele vira uma lib, e o Vite resolve isso com o library mode.

> **Dica WC:** o **library mode** do Vite gera um ou mais bundles a partir de um entry, em vez de um app com `index.html`.

## Árvore típica do pacote

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

## vite.config em library mode

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

- `build.lib.entry` aponta para o `src/index.ts`, que exporta a classe e o `register`.
- `name: 'ImageGallery'` é o global usado no bundle UMD.
- `formats: ['es', 'umd']` gera os dois bundles de uma vez.
- `vite build` gera `dist/image-gallery.es.js` e `dist/image-gallery.umd.js`.

## HTML de desenvolvimento

```html
<!DOCTYPE html>
<html>
  <body>
    <image-gallery columns="3">
      <!-- imgs -->
    </image-gallery>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
```

As lições 7 e 8 fecham o ciclo: export dual e consumo no app.

## Pratique no playground

- ▶️ [Árvore Vite lib (conceitual)](/exemplos/wc-vite-lib-tree/)

Snippets relacionados:

- 🧩 [Vite lib mode](/snippets/wc-vite-lib-config/)
- 🧩 [package.json exports](/snippets/wc-package-exports/)

📚 Lição completa na trilha grátis: [Empacotar com Vite (library mode)](/trilhas/webcomponents-com-vite/wc-06-empacotar-com-vite/)

---

← Anterior: [Lição 5: Mesma galeria no Vue](/blog/wc-05-galeria-no-vue/)

Próxima: [Lição 7: Export dual: classe + register](/blog/wc-07-export-dual/) →
