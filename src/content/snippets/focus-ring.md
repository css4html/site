---
title: "Anel de foco visível"
description: "Estado :focus-visible sem remover acessibilidade."
tags: ["acessibilidade","focus"]
language: css
code: |
    :focus-visible {
      outline: 2px solid #3b9eff;
      outline-offset: 2px;
    }
    
    :focus:not(:focus-visible) {
      outline: none;
    }
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos vivos](/exemplos/).
