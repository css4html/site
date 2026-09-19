---
title: "Dark mode com variáveis CSS"
description: "Troque o tema só com custom properties e preferência do sistema."
tags: ["dark-mode","variaveis","temas"]
difficulty: intermediario
order: 7
html: |
    <div class="app">
      <h1>Tema automático</h1>
      <p>Este bloco respeita <code>prefers-color-scheme</code>.</p>
      <button type="button">Ação</button>
    </div>
css: |
    :root {
      --bg: #f8fafc;
      --text: #0f172a;
      --accent: #2563eb;
      --card: #fff;
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0f172a;
        --text: #e2e8f0;
        --accent: #60a5fa;
        --card: #1e293b;
      }
    }
    
    .app {
      background: var(--card);
      color: var(--text);
      padding: 1.25rem;
      border-radius: 12px;
      box-shadow: 0 0 0 8px var(--bg);
    }
    
    button {
      background: var(--accent);
      color: #fff;
      border: 0;
      padding: 0.55rem 1rem;
      border-radius: 8px;
      cursor: pointer;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
