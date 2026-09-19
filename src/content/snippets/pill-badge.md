---
title: "Badge em formato pill"
description: "Etiqueta arredondada para status e tags."
tags: ["badge","ui","tipografia"]
language: css
code: |
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      background: #dbeafe;
      color: #1d4ed8;
    }
    
    .pill[data-tone="ok"] {
      background: #dcfce7;
      color: #15803d;
    }
---

Combine com [chips](/snippets/chip-list/) para filtros e listas de tags.
