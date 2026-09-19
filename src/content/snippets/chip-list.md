---
title: "Lista de chips"
description: "Grupo de tags compactas com wrap automático."
tags: ["chip","ui","flexbox"]
language: html+css
code: |
    <ul class="chips">
      <li>flexbox</li>
      <li>grid</li>
      <li>acessibilidade</li>
    </ul>
    
    <style>
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .chips li {
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      font-size: 0.85rem;
    }
    </style>
---

Padrão usado na biblioteca de [snippets](/snippets/) e [exemplos](/exemplos/) do hub.
