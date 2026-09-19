---
title: "Container query simples"
description: "Estilo baseado na largura do componente."
tags: ["container-query","responsivo"]
language: css
code: |
    .card-wrap {
      container-type: inline-size;
    }
    
    @container (min-width: 400px) {
      .card {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 1rem;
      }
    }
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos vivos](/exemplos/).
