---
title: "Hello JSX"
description: "Primeiro componente React renderizado no playground."
tags: ["jsx","componentes","basico"]
difficulty: "iniciante"
track: "react"
order: 301
html: |
    <!-- Markup opcional fora do #root.
         O playground já injeta <div id="root"> + import map + Sucrase. -->
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

Defina `App` na aba TSX: o playground compila com Sucrase e monta em `#root` (veja o painel “Esqueleto HTML”). A aba HTML é só para markup extra fora do React — experimente mudar o texto do componente.
