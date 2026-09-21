---
title: "Selectors and specificity"
description: "Target the right element without overusing IDs and !important."
order: 2
trail: css-do-zero-ao-layout
relatedExamples: ["seletores-basicos","botao-hover"]
relatedSnippets: ["focus-ring"]
---
> **TODO i18n:** Full body translation pending. Title and description are localized; the body below remains in Portuguese for now.


Seletores apontam para elementos. Comece simples:

- `p` — todos os parágrafos
- `.card` — classe
- `#menu` — ID (alta especificidade)
- `ul li.ativo` — combinação

## Especificidade (resumo)

Inline > ID > classe/atributo/pseudo-classe > elemento. Empate? Ganha a regra que aparece por último.

## Dica prática

Prefira classes reutilizáveis. Reserve IDs para âncoras e JS. Evite `!important` salvo em overrides pontuais.

Experimente no playground de [seletores](/exemplos/seletores-basicos/).
