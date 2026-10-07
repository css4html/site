---
title: "Consumir la lib en una app Vite"
description: "Import ESM + etiqueta en HTML/JSX — el ciclo completo del paquete a la app."
order: 8
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-consumir-app"]
relatedSnippets: ["wc-package-exports", "wc-react-host", "wc-export-dual-pattern"]
---

> **TODO i18n:** Traducción completa pendiente. Título y descripción localizados; el cuerpo permanece en portugués por ahora.

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
