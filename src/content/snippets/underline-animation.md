---
title: "Underline animado no hover"
description: "Linha que cresce com transform — leve e acessível."
tags: ["hover","animacao","links"]
language: css
code: |
    .link-anim {
      color: inherit;
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 0% 2px;
      transition: background-size 0.2s ease;
    }
    
    .link-anim:hover,
    .link-anim:focus-visible {
      background-size: 100% 2px;
    }
---

Prefira `focus-visible` junto com hover. Veja também [focus ring](/snippets/focus-ring/).
