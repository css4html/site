---
title: "Web Components, lição 7: Export dual: classe + register"
description: "Exporte a classe e registre a tag: dois jeitos de consumir a mesma lib de Web Components."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-dual-export']
relatedSnippets: ['wc-export-dual-pattern', 'wc-register-guard', 'wc-package-exports']
draft: false
cover: /blog/covers/wc-07-export-dual.png
coverAlt: "Capa DICA WC — Web Components, lição 7: Export dual: classe + register"
---

Com o `<image-gallery>` empacotado, falta decidir como ele chega no app. Uma boa lib de Web Components oferece dois caminhos.

## Os dois caminhos

- **Auto-register (side-effect):** `import 'image-gallery'` já define a tag.
- **Named export:** `import { ImageGallery, register } from 'image-gallery'` dá acesso à classe e deixa você escolher outro nome de tag com `register(tag)`.

```js
export class ImageGallery extends HTMLElement {
  /* ... */
}

export function register(tag = 'image-gallery') {
  if (!customElements.get(tag)) {
    customElements.define(tag, ImageGallery);
  }
}

register(); // auto-register no entry padrão
```

> **Dica WC:** sempre proteja o `define` com `customElements.get(name)`. Assim não estoura erro se o módulo for importado duas vezes.

## package.json exports

```json
{
  "name": "@css4html/image-gallery",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/image-gallery.es.js"
    }
  }
}
```

## Pratique no playground

- ▶️ [Export dual (classe + register)](/exemplos/wc-dual-export/)

Snippets relacionados:

- 🧩 [Export dual](/snippets/wc-export-dual-pattern/)
- 🧩 [Guarda no define](/snippets/wc-register-guard/)
- 🧩 [package.json exports](/snippets/wc-package-exports/)

📚 Lição completa na trilha grátis: [Export dual: classe + register](/trilhas/webcomponents-com-vite/wc-07-export-dual/)

---

← Anterior: [Lição 6: Empacotar com Vite (library mode)](/blog/wc-06-empacotar-com-vite/)

Próxima: [Lição 8: Consumir a lib em app Vite](/blog/wc-08-consumir-lib-vite/) →
