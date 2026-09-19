---
title: "Full bleed em container estreito"
description: "Seção que escapa da coluna e ocupa 100vw."
tags: ["layout","full-bleed","grid"]
language: css
code: |
    .full-bleed {
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
    }
    
    /* Alternativa com grid na página:
    .page {
      display: grid;
      grid-template-columns: 1fr min(65ch, 100%) 1fr;
    }
    .page > * { grid-column: 2; }
    .page > .full-bleed { grid-column: 1 / -1; }
    */
---

Útil para banners e imagens largas dentro de prosa com `max-width`.
