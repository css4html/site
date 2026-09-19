---
title: "Tabelas e listas"
description: "ul, ol, dl e tabelas de dados com thead, th e scope."
order: 5
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-tabela-dados","html-lista-definicoes"]
relatedSnippets: ["html-details-summary"]
---

## Listas

- `ul` — itens sem ordem rígida
- `ol` — sequência (passos, ranking)
- `dl` — termos e definições (glossário)

## Tabelas de dados

Tabelas são para **dados tabulares**, não para layout.

```html
<table>
  <caption>Notas do trimestre</caption>
  <thead>
    <tr><th scope="col">Aluno</th><th scope="col">Nota</th></tr>
  </thead>
  <tbody>...</tbody>
</table>
```

`scope` e `caption` melhoram muito a leitura em leitores de tela.
