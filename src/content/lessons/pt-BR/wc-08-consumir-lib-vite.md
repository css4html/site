---
title: "Consumir a lib em app Vite"
description: "Import ESM + tag no HTML/JSX — o ciclo completo do pacote ao app."
order: 8
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-consumir-app"]
relatedSnippets: ["wc-package-exports", "wc-react-host", "wc-export-dual-pattern"]
---

No app consumidor (Vite + React, Vue ou vanilla):

<aside class="tip tip-wc"><strong>DICA WC</strong> — Um único `import` registra a tag. Depois disso, use `<image-gallery>` em qualquer arquivo do app.</aside>

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

```tsx
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

## Ciclo da trilha

1. CE nativo (lições 1–3)
2. Hosts React/Vue (4–5)
3. Empacote + export dual (6–7)
4. Consumo no app (8)
