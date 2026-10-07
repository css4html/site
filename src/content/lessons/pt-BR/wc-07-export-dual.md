---
title: "Export dual: ES module + Custom Element"
description: "Exportar a classe e registrar a tag — dois jeitos de consumir a mesma lib."
order: 7
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-dual-export"]
relatedSnippets: ["wc-export-dual-pattern", "wc-register-guard", "wc-package-exports"]
---

Uma boa lib de Web Components oferece **dois caminhos**:

1. **Side-effect / auto-register** — `import 'image-gallery'` define a tag
2. **Named export** — `import { ImageGallery, register } from 'image-gallery'`

<aside class="tip tip-wc"><strong>DICA WC</strong> — Sempre proteja o `define` com `customElements.get(name)` para não estourar erro se o módulo for importado duas vezes.</aside>

## Padrão

```ts
export class ImageGallery extends HTMLElement { /* ... */ }

export function register(tag = 'image-gallery') {
  if (!customElements.get(tag)) {
    customElements.define(tag, ImageGallery);
  }
}

register(); // auto-register no entry padrão
```

## `package.json` exports

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
