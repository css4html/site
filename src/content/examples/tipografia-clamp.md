---
title: "Tipografia fluida com clamp()"
description: "Tamanhos de fonte que escalam entre mínimo e máximo sem media queries."
tags: ["tipografia","clamp","responsivo"]
difficulty: intermediario
order: 5
html: |
    <article class="artigo">
      <h1>Título fluido</h1>
      <p>Este parágrafo usa <code>clamp()</code> para crescer suavemente conforme a largura da tela.</p>
    </article>
css: |
    .artigo h1 {
      font-size: clamp(1.5rem, 4vw + 0.5rem, 2.75rem);
      line-height: 1.15;
      margin: 0 0 0.75rem;
    }
    
    .artigo p {
      font-size: clamp(1rem, 0.95rem + 0.4vw, 1.2rem);
      max-width: 40ch;
      color: #333;
    }
    
    code {
      background: #f1f5f9;
      padding: 0.1em 0.35em;
      border-radius: 4px;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
