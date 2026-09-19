---
title: "Toggle de tema com custom properties"
description: "Claro/escuro com classe no root e botão — complementar ao prefers-color-scheme."
tags: ["variaveis","temas","dark-mode","interacao"]
difficulty: intermediario
order: 20
html: |
    <div class="demo" data-theme="light">
      <header class="bar">
        <strong>Minha UI</strong>
        <button type="button" id="toggle">Alternar tema</button>
      </header>
      <main class="body">
        <h1>Tokens CSS</h1>
        <p>As cores vêm de variáveis. O botão só troca o atributo <code>data-theme</code>.</p>
      </main>
    </div>
    <script>
      const root = document.currentScript.previousElementSibling;
      root.querySelector('#toggle').addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      });
    </script>
css: |
    .demo {
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --accent: #2563eb;
      --border: #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, sans-serif;
    }
    
    .demo[data-theme="dark"] {
      --bg: #0f172a;
      --surface: #1e293b;
      --text: #e2e8f0;
      --muted: #94a3b8;
      --accent: #60a5fa;
      --border: #334155;
    }
    
    .bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }
    
    .bar button {
      background: var(--accent);
      color: #fff;
      border: 0;
      border-radius: 8px;
      padding: 0.4rem 0.75rem;
      font-weight: 600;
      cursor: pointer;
    }
    
    .body { padding: 1.25rem; }
    .body h1 { margin: 0 0 0.5rem; font-size: 1.25rem; }
    .body p { margin: 0; color: var(--muted); line-height: 1.5; }
---

Este exemplo usa um toggle **manual** (classe/atributo). Combine com `prefers-color-scheme` no site real — como fazemos no próprio CSS4HTML.
