---
title: "Tablas y listas"
description: "ul, ol, dl y tablas de datos con thead, th y scope."
order: 5
trail: "html-do-zero"
track: "html"
relatedExamples: ["html-tabela-dados","html-lista-definicoes"]
relatedSnippets: ["html-details-summary"]
---
> **TODO i18n:** Traducción completa del cuerpo pendiente. Título y descripción ya están localizados; el cuerpo permanece en portugués por ahora.


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
