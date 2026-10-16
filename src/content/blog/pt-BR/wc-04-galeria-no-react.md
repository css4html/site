---
title: "Web Components, lição 4: Mesma galeria no React"
description: "Use o <image-gallery> dentro do JSX: o React só hospeda a tag e as props viram atributos."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-galeria-react']
relatedSnippets: ['wc-react-host', 'wc-custom-elements-define']
draft: false
cover: /blog/covers/wc-04-galeria-no-react.png
coverAlt: "Capa DICA WC — Web Components, lição 4: Mesma galeria no React"
---

O `<image-gallery>` da lição 3 roda dentro do React sem reescrever nada. O React só hospeda a tag; o grid e o clique continuam no Shadow DOM do componente.

## O padrão

1. Defina ou importe o Custom Element (o `customElements.define` roda como efeito colateral do import).
2. Use a tag no JSX como se fosse HTML.

```jsx
function App() {
  return (
    <image-gallery columns="3">
      <img
        src="https://picsum.photos/id/249/300/300"
        alt="Cidade à noite"
      />
      <img
        src="https://picsum.photos/id/28/300/300"
        alt="Floresta verde"
      />
    </image-gallery>
  );
}
```

> **Dica WC:** em JSX, atributos DOM são strings. Passe `columns={3}` ou `columns="3"`. Para eventos custom, use `ref` + `addEventListener`, ou um wrapper fino.

No playground, o evento `gallery-select` chega pelo `ref` + `addEventListener`, e `setInfo()` leva o `alt` da imagem clicada para o estado do React.

Em TypeScript, o compilador pode reclamar da tag desconhecida. No app real, declare a tag num `jsx.d.ts`.

## Por que isso importa

O Custom Element continua sendo a fonte da verdade visual. O React só compõe e gerencia rota e dados. Trocar o React por outro host não exige reescrever a galeria.

O playground usa esm.sh + Sucrase para rodar o React ao vivo no browser.

## Pratique no playground

- ▶️ [Galeria no React (host CE)](/exemplos/wc-galeria-react/)

Snippets relacionados:

- 🧩 [CE no React](/snippets/wc-react-host/)
- 🧩 [customElements.define](/snippets/wc-custom-elements-define/)

📚 Lição completa na trilha grátis: [Mesma galeria no React](/trilhas/webcomponents-com-vite/wc-04-galeria-no-react/)

---

← Anterior: [Lição 3: Galeria de imagens com Custom Element (vanilla)](/blog/wc-03-galeria-imagens-vanilla/)

Próxima: [Lição 5: Mesma galeria no Vue](/blog/wc-05-galeria-no-vue/) →
