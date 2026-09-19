---
title: "Abas (tabs)"
description: "Troca de painéis com aria-selected e hidden."
tags: ["tabs","aria","dom"]
difficulty: "intermediario"
track: "js"
order: 202
html: |
    <div class="tabs">
      <div role="tablist" aria-label="Exemplo de abas">
        <button type="button" role="tab" id="tab-html" aria-controls="painel-html" aria-selected="true">HTML</button>
        <button type="button" role="tab" id="tab-css" aria-controls="painel-css" aria-selected="false">CSS</button>
        <button type="button" role="tab" id="tab-js" aria-controls="painel-js" aria-selected="false">JS</button>
      </div>
      <div role="tabpanel" id="painel-html" aria-labelledby="tab-html">Estrutura e significado.</div>
      <div role="tabpanel" id="painel-css" aria-labelledby="tab-css" hidden>Apresentação e layout.</div>
      <div role="tabpanel" id="painel-js" aria-labelledby="tab-js" hidden>Comportamento e interação.</div>
    </div>
css: |
    .tabs { font-family: system-ui, sans-serif; }
    [role="tablist"] { display: flex; gap: 0.25rem; margin-bottom: 0.75rem; }
    [role="tab"] {
      padding: 0.45rem 0.85rem; border: 1px solid #cbd5e1; border-radius: 8px;
      background: #f8fafc; cursor: pointer;
    }
    [role="tab"][aria-selected="true"] { background: #2563eb; color: #fff; border-color: #2563eb; }
    [role="tabpanel"] { padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 8px; }
js: |
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');
    
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
        panels.forEach((p) => { p.hidden = true; });
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = false;
      });
    });
---

Observe aria-selected e o atributo hidden nos painéis.
