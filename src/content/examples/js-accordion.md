---
title: "Accordion"
description: "Abrir/fechar seções com botão e aria-expanded."
tags: ["accordion","aria","eventos"]
difficulty: "iniciante"
track: "js"
order: 203
html: |
    <div class="acc">
      <button type="button" class="acc-btn" aria-expanded="false" aria-controls="acc-1">O que é DOM?</button>
      <div id="acc-1" class="acc-panel" hidden>Document Object Model — a árvore de nós da página.</div>
      <button type="button" class="acc-btn" aria-expanded="false" aria-controls="acc-2">Por que eventos?</button>
      <div id="acc-2" class="acc-panel" hidden>Para reagir a cliques, teclado, submit e muito mais.</div>
    </div>
css: |
    .acc { font-family: system-ui, sans-serif; max-width: 28rem; }
    .acc-btn {
      display: block; width: 100%; text-align: left; padding: 0.65rem 0.85rem;
      margin-top: 0.35rem; border: 1px solid #cbd5e1; border-radius: 8px;
      background: #f8fafc; cursor: pointer; font-weight: 600;
    }
    .acc-panel { padding: 0.65rem 0.85rem; border-left: 3px solid #2563eb; margin: 0.25rem 0 0.5rem; }
js: |
    document.querySelectorAll('.acc-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        btn.setAttribute('aria-expanded', String(!open));
        if (panel) panel.hidden = open;
      });
    });
---

Compare com details/summary nativo — às vezes o HTML basta.
