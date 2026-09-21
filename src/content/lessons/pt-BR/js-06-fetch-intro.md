---
title: "Introdução ao fetch"
description: "Buscar dados assíncronos com fetch, async/await e JSON."
order: 6
trail: "javascript-do-zero"
track: "js"
relatedExamples: ["js-fetch-lista-mock"]
relatedSnippets: ["js-fetch-json"]
---

`fetch` busca recursos pela rede (ou URLs locais) e devolve uma Promise.

```js
async function carregar() {
  const res = await fetch('/dados.json');
  if (!res.ok) throw new Error('Falha na rede');
  const dados = await res.json();
  return dados;
}
```

No playground usamos dados mock em memória — a API é a mesma. Sempre trate erro e estado de carregamento na UI.
