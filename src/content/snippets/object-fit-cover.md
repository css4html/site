---
title: "Imagem object-fit cover"
description: "Preenche o quadro sem distorcer — crop inteligente."
tags: ["imagem","object-fit","midia"]
language: css
code: |
    .thumb {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      object-position: center;
      border-radius: 12px;
      display: block;
    }
---

Use em `<img>` ou `<video>`. Veja também [aspect-ratio](/snippets/aspect-ratio/) e a [galeria em grid](/exemplos/grid-galeria/).
