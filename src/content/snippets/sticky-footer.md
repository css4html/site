---
title: "Footer grudado no rodapé"
description: "Footer no fim da viewport mesmo com pouco conteúdo."
tags: ["layout","footer","flexbox"]
language: css
code: |
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    
    main {
      flex: 1;
    }
---

O `main` cresce e empurra o footer. Alternativa moderna: `min-height: 100dvh`.
