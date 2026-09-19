---
title: "Estrutura de um documento HTML"
description: "DOCTYPE, html, head, body e a anatomia mínima de uma página."
order: 1
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-artigo-semantico"]
relatedSnippets: ["html-meta-viewport"]
---

HTML descreve a **estrutura** e o significado do conteúdo. O navegador lê o documento e monta a árvore DOM.

## Esqueleto mínimo

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Minha página</title>
  </head>
  <body>
    <h1>Olá</h1>
  </body>
</html>
```

- `lang="pt-BR"` ajuda leitores de tela e busca.
- `charset` e `viewport` evitam surpresas de encoding e mobile.

## Próximo passo

Entenda por que tags semânticas importam mais do que `div` em tudo.
