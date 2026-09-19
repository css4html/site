---
title: "Tema com localStorage"
description: "Stub de dark/light persistido no navegador."
tags: ["localStorage","tema","toggle"]
difficulty: "intermediario"
track: "js"
order: 205
html: |
    <div class="app" data-theme="light">
      <p>Tema atual: <strong id="label">light</strong></p>
      <button type="button" id="toggle">Alternar tema</button>
    </div>
css: |
    .app {
      font-family: system-ui, sans-serif;
      padding: 1rem;
      border-radius: 12px;
      transition: background 0.2s, color 0.2s;
    }
    .app[data-theme="light"] { background: #f8fafc; color: #0f172a; }
    .app[data-theme="dark"] { background: #0f172a; color: #e2e8f0; }
    button { padding: 0.5rem 0.9rem; border-radius: 8px; border: 0; cursor: pointer; background: #2563eb; color: #fff; }
js: |
    const KEY = 'demo-theme';
    const app = document.querySelector('.app');
    const label = document.querySelector('#label');
    const toggle = document.querySelector('#toggle');
    
    function apply(theme) {
      app.setAttribute('data-theme', theme);
      label.textContent = theme;
      try { localStorage.setItem(KEY, theme); } catch (_) {}
    }
    
    let theme = 'light';
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light' || saved === 'dark') theme = saved;
    } catch (_) {}
    apply(theme);
    
    toggle.addEventListener('click', () => {
      theme = theme === 'light' ? 'dark' : 'light';
      apply(theme);
    });
---

Mesma ideia do toggle de tema do site — versão mínima.
