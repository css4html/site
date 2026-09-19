---
title: "Layout com media queries"
description: "Duas colunas no desktop, uma coluna no mobile."
tags: ["media-query","responsivo","layout"]
difficulty: intermediario
order: 12
html: |
    <div class="layout">
      <aside>Menu</aside>
      <section>Conteúdo principal</section>
    </div>
css: |
    .layout {
      display: grid;
      gap: 12px;
    }
    
    aside,
    section {
      padding: 1rem;
      border-radius: 10px;
    }
    
    aside {
      background: #dbeafe;
    }
    
    section {
      background: #f1f5f9;
    }
    
    @media (min-width: 600px) {
      .layout {
        grid-template-columns: 140px 1fr;
      }
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
