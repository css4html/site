---
title: "Skeleton loading"
description: "Placeholder animado enquanto o conteúdo carrega."
tags: ["loading","animacao"]
language: css
code: |
    @keyframes pulse {
      50% { opacity: 0.45; }
    }
    
    .skeleton {
      background: #e2e8f0;
      border-radius: 8px;
      animation: pulse 1.2s ease-in-out infinite;
    }
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos vivos](/exemplos/).
