---
title: "Header sticky"
description: "Barra superior que acompanha o scroll com position: sticky."
tags: ["sticky","navegacao","layout"]
difficulty: iniciante
order: 10
html: |
    <div class="demo">
      <header class="topo">CSS4HTML</header>
      <main>
        <p>Role a pré-visualização para ver o header grudar no topo.</p>
        <p>Lorem curto 1</p>
        <p>Lorem curto 2</p>
        <p>Lorem curto 3</p>
        <p>Lorem curto 4</p>
        <p>Lorem curto 5</p>
        <p>Lorem curto 6</p>
      </main>
    </div>
css: |
    .demo {
      height: 260px;
      overflow: auto;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
    }
    
    .topo {
      position: sticky;
      top: 0;
      background: #0f172a;
      color: #fff;
      padding: 0.75rem 1rem;
      font-weight: 700;
      z-index: 1;
    }
    
    main {
      padding: 1rem;
    }
    
    main p {
      margin: 0 0 1rem;
      color: #334155;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
