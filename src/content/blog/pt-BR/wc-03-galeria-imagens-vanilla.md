---
title: "Web Components, lição 3: Galeria de imagens com Custom Element (vanilla)"
description: "Um <image-gallery> completo só com Custom Element e Shadow DOM, sem framework e sem bundler."
pubDate: 2026-10-16
tags: ["web-components","javascript","vite"]
relatedExamples: ['wc-galeria-vanilla', 'wc-attrs-props']
relatedSnippets: ['wc-slot-basico', 'wc-css-in-shadow', 'wc-observed-attributes']
draft: false
cover: /blog/covers/wc-03-galeria-imagens-vanilla.png
coverAlt: "Capa DICA WC — Web Components, lição 3: Galeria de imagens com Custom Element (vanilla)"
---

Com a anatomia da lição 2 em mãos, você monta o componente que vai acompanhar o resto da trilha: o `<image-gallery>`. Aqui ele é só plataforma: HTML e JS, sem React, sem Vue, sem bundler.

## Pense no Custom Element como um mini-app

> **Dica WC:** trate o Custom Element como um "mini-app": estado interno, eventos para o mundo externo (`CustomEvent`) e atributos para configuração.

## O contrato da tag

- Os filhos `<img>` entram via slot (ou o componente lê `querySelectorAll` no light DOM).
- O atributo `columns` controla o grid.
- O clique numa imagem pode emitir o evento `gallery-select` com o `alt` e o `src`.

```html
<image-gallery columns="3">
  <img
    src="https://picsum.photos/id/110/300/300"
    alt="Pôr do sol no campo"
  />
  <img
    src="https://picsum.photos/id/29/300/300"
    alt="Montanhas nevadas"
  />
</image-gallery>
```

## Por que o Shadow DOM ajuda

O CSS do grid fica dentro do componente. A página host não precisa de classes BEM globais, e o tema do site não quebra o layout da galeria por acidente.

No playground, edite o JS, mude `columns` e adicione imagens no HTML para ver o grid e o evento `gallery-select` ao vivo.

## Pratique no playground

- ▶️ [Galeria vanilla (Custom Element)](/exemplos/wc-galeria-vanilla/)
- ▶️ [Atributos e columns](/exemplos/wc-attrs-props/)

Snippets relacionados:

- 🧩 [Slot básico](/snippets/wc-slot-basico/)
- 🧩 [CSS no Shadow DOM](/snippets/wc-css-in-shadow/)
- 🧩 [observedAttributes](/snippets/wc-observed-attributes/)

📚 Lição completa na trilha grátis: [Galeria de imagens com Custom Element (vanilla)](/trilhas/webcomponents-com-vite/wc-03-galeria-imagens-vanilla/)

---

← Anterior: [Lição 2: Custom Element + Shadow DOM](/blog/wc-02-custom-element-shadow-dom/)

Próxima: [Lição 4: Mesma galeria no React](/blog/wc-04-galeria-no-react/) →
