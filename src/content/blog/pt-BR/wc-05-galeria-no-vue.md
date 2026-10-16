---
title: "Web Components, lição 5: Mesma galeria no Vue"
description: "Monte o <image-gallery> num app Vue 3 usando o build global via CDN, sem reescrever o componente."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-galeria-vue']
relatedSnippets: ['wc-vue-host', 'wc-custom-elements-define']
draft: false
cover: /blog/covers/wc-05-galeria-no-vue.png
coverAlt: "Capa DICA WC — Web Components, lição 5: Mesma galeria no Vue"
---

Depois do React, o Vue 3. O mesmo `<image-gallery>` da lição 3 roda aqui sem mudar uma linha: o Vue só monta o template.

## Vue e Custom Elements

O Vue 3 trata Custom Elements de forma amigável: tags com hífen passam direto para o DOM.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<div id="app"></div>
```

```js
const { createApp } = Vue;

createApp({
  template: `
    <image-gallery columns="2">
      <img
        src="https://picsum.photos/id/184/300/300"
        alt="Dunas ao anoitecer"
      />
    </image-gallery>
  `
}).mount('#app');
```

> **Dica WC:** no playground usamos o build **global** do Vue (script UMD) para ficar estático e compatível com GitHub Pages, sem bundler local.

No playground, `ref="host"` + `onMounted()` pegam o elemento real, e o evento `gallery-select` atualiza `info.value`, o estado reativo do Vue.

## Em um app Vite de verdade

Importe o Custom Element e use a tag no SFC. Se precisar, configure `compilerOptions.isCustomElement` para o Vue não tentar resolver a tag como componente dele.

## Pratique no playground

- ▶️ [Galeria no Vue (host CE)](/exemplos/wc-galeria-vue/)

Snippets relacionados:

- 🧩 [CE no Vue](/snippets/wc-vue-host/)
- 🧩 [customElements.define](/snippets/wc-custom-elements-define/)

📚 Lição completa na trilha grátis: [Mesma galeria no Vue](/trilhas/webcomponents-com-vite/wc-05-galeria-no-vue/)

---

← Anterior: [Lição 4: Mesma galeria no React](/blog/wc-04-galeria-no-react/)

Próxima: [Lição 6: Empacotar com Vite (library mode)](/blog/wc-06-empacotar-com-vite/) →
