---
title: "Galeria de imagens (vanilla CE)"
description: "Um image-gallery completo só com Custom Element + Shadow DOM."
order: 3
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-galeria-vanilla", "wc-attrs-props"]
relatedSnippets: ["wc-slot-basico", "wc-css-in-shadow", "wc-observed-attributes"]
---

Nesta lição a galeria é **só plataforma**: HTML + JS, sem React, sem Vue, sem bundler.

<aside class="tip tip-wc"><strong>DICA WC</strong> — Trate o Custom Element como um “mini-app”: estado interno, eventos para o mundo externo (`CustomEvent`), e atributos para configuração.</aside>

## Contrato da tag

```html
<image-gallery columns="3">
  <img src="https://picsum.photos/id/110/300/300" alt="Pôr do sol no campo" />
  <img src="https://picsum.photos/id/29/300/300" alt="Montanhas nevadas" />
</image-gallery>
```

- Filhos `<img>` entram via **slot** (ou o CE lê `querySelectorAll` no light DOM)
- `columns` controla o grid
- Clique numa imagem pode emitir `gallery-select` com o `alt` / `src`

## Por que Shadow DOM ajuda

O CSS do grid fica **dentro** do componente. A página host não precisa de classes BEM globais — e o tema do site não quebra o layout da galeria por acidente.

## Exemplo vivo

Abra **Galeria vanilla** no playground: edite o JS, mude `columns`, adicione imagens no HTML.
