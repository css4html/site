---
title: "Same gallery in Vue"
description: "Mount the Custom Element in a Vue 3 app (global CDN build)."
order: 5
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-galeria-vue"]
relatedSnippets: ["wc-vue-host", "wc-custom-elements-define"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; body stays in Portuguese for now.

Vue 3 trata Custom Elements de forma amigável: tags com hífen passam para o DOM.

<aside class="tip tip-wc"><strong>DICA WC</strong> — No playground usamos o build **global** do Vue (script UMD) para ficar estático e compatível com GitHub Pages — sem bundler local.</aside>

## Ideia

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<div id="app"></div>
```

```js
const { createApp } = Vue;
createApp({
  template: `
    <image-gallery columns="2">
      <img src="..." alt="A" />
    </image-gallery>
  `
}).mount('#app');
```

Em apps Vite reais, importe o CE e use no SFC; configure `compilerOptions.isCustomElement` se precisar.

O exemplo **Galeria no Vue** mostra o CE da lição 3 hospedado pelo Vue.
