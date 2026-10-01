---
title: "Hello JSX"
description: "Primeiro componente React renderizado no playground."
tags: ["jsx","componentes","basico"]
difficulty: "iniciante"
track: "react"
order: 301
html: |
    
css: |
    h1 { font-family: system-ui, sans-serif; color: #61dafb; }
    p { color: #334155; }
js: |
    function App() {
      const nome = 'CSS4HTML';
      return (
        <div>
          <h1>Olá, {nome}</h1>
          <p>Este é um componente React com JSX.</p>
        </div>
      );
    }
---

Defina `App` e o playground monta em `#root`. Experimente mudar o texto.
