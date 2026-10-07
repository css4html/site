---
title: "Mesma galeria no Vue"
description: "Montar o Custom Element num app Vue 3 (global build via CDN)."
order: 5
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-galeria-vue"]
relatedSnippets: ["wc-vue-host", "wc-custom-elements-define"]
---

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
