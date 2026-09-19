---
title: "Tooltip só com CSS"
description: "Dica ao hover/focus usando attr() e pseudo-elemento."
tags: ["tooltip","ui","acessibilidade"]
language: html+css
code: |
    <button class="tip" type="button" data-tip="Salva o rascunho">Salvar</button>
    
    <style>
    .tip {
      position: relative;
      padding: 0.55rem 1rem;
      border-radius: 8px;
      border: 0;
      background: #2563eb;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    .tip::after {
      content: attr(data-tip);
      position: absolute;
      left: 50%;
      bottom: calc(100% + 8px);
      transform: translateX(-50%) translateY(4px);
      background: #0f172a;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.35rem 0.55rem;
      border-radius: 6px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
    .tip:hover::after,
    .tip:focus-visible::after {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    </style>
---

Tooltips CSS-only são ok para dicas curtas; para conteúdo rico, prefira um padrão com ARIA (`role="tooltip"`).
