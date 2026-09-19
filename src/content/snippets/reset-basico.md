---
title: "Reset mínimo"
description: "Começo limpo sem apagar toda a UA stylesheet."
tags: ["reset","fundamentos"]
language: css
code: |
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos vivos](/exemplos/).
