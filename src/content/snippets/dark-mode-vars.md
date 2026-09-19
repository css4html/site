---
title: "Variáveis para dark mode"
description: "Base de tema claro/escuro com custom properties."
tags: ["dark-mode","variaveis"]
language: css
code: |
    :root {
      --bg: #fff;
      --text: #111;
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #111;
        --text: #eee;
      }
    }
    
    body {
      background: var(--bg);
      color: var(--text);
    }
---

Copie o snippet e adapte ao seu projeto. Veja também os [exemplos vivos](/exemplos/).
