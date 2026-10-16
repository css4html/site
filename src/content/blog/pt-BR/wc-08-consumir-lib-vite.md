---
title: "Web Components, lição 8: Consumir a lib em app Vite"
description: "Um import ESM e a tag no HTML, JSX ou template: o ciclo completo do pacote ao app."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-consumir-app']
relatedSnippets: ['wc-package-exports', 'wc-react-host', 'wc-export-dual-pattern']
draft: true
# cover: /blog/covers/wc-08-consumir-lib-vite.png
# coverAlt: "Capa DICA WC — Consumir a lib em app Vite"
---

Fechando o ciclo: do pacote ao app. No projeto consumidor, seja vanilla, React ou Vue, um único import registra a tag.

> **Dica WC:** um único `import` registra a tag. Depois disso, use `<image-gallery>` em qualquer arquivo do app.

## Vanilla / HTML

```ts
// main.ts
import '@css4html/image-gallery';
```

```html
<image-gallery columns="3">
  <img src="/a.jpg" alt="A" />
</image-gallery>
```

## React

```jsx
import '@css4html/image-gallery';

export function Page() {
  return (
    <image-gallery columns="3">
      <img src="/a.jpg" alt="A" />
    </image-gallery>
  );
}
```

## Vue

```vue
<script setup>
import '@css4html/image-gallery';
</script>

<template>
  <image-gallery columns="3">
    <img src="/a.jpg" alt="A" />
  </image-gallery>
</template>
```

Sem wrapper por framework: um componente, todos os stacks.

## O ciclo da trilha

- Custom Element nativo (lições 1 a 3)
- Hosts React e Vue (lições 4 e 5)
- Empacotar e export dual (lições 6 e 7)
- Consumo no app (lição 8)

## Pratique no playground

- ▶️ [Consumir no app (import + tag)](/exemplos/wc-consumir-app/)

Snippets relacionados:

- 🧩 [package.json exports](/snippets/wc-package-exports/)
- 🧩 [CE no React](/snippets/wc-react-host/)
- 🧩 [Export dual](/snippets/wc-export-dual-pattern/)

📚 Lição completa na trilha grátis: [Consumir a lib em app Vite](/trilhas/webcomponents-com-vite/wc-08-consumir-lib-vite/)

---

← Anterior: [Lição 7: Export dual: classe + register](/blog/wc-07-export-dual/)

Fim da trilha! Volte ao guia: [Web Components do zero](/blog/web-components-do-zero/) →
