---
title: "Image gallery (vanilla CE)"
description: "A full image-gallery with only a Custom Element + Shadow DOM."
order: 3
trail: "webcomponents-com-vite"
track: "wc"
relatedExamples: ["wc-galeria-vanilla", "wc-attrs-props"]
relatedSnippets: ["wc-slot-basico", "wc-css-in-shadow", "wc-observed-attributes"]
---

> **TODO i18n:** Full body translation pending. Title and description are localized; body stays in Portuguese for now.

Nesta lição a galeria é **só plataforma**: HTML + JS, sem React, sem Vue, sem bundler.

<aside class="tip tip-wc"><strong>DICA WC</strong> — Trate o Custom Element como um “mini-app”: estado interno, eventos para o mundo externo (`CustomEvent`), e atributos para configuração.</aside>

## Contrato da tag

```html
<image-gallery columns="3">
  <img src="..." alt="Praia" />
  <img src="..." alt="Montanha" />
</image-gallery>
```

- Filhos `<img>` entram via **slot** (ou o CE lê `querySelectorAll` no light DOM)
- `columns` controla o grid
- Clique numa imagem pode emitir `gallery-select` com o `alt` / `src`

## Por que Shadow DOM ajuda

O CSS do grid fica **dentro** do componente. A página host não precisa de classes BEM globais — e o tema do site não quebra o layout da galeria por acidente.

## Exemplo vivo

Abra **Galeria vanilla** no playground: edite o JS, mude `columns`, adicione imagens no HTML.
