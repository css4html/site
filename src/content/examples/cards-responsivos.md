---
title: "Cards responsivos"
description: "Lista de cards que se rearranja com grid e tipografia legível."
tags: ["cards","grid","responsivo"]
difficulty: iniciante
order: 8
html: |
    <div class="cards">
      <article class="card">
        <h3>Flexbox</h3>
        <p>Ótimo para eixos e alinhamento.</p>
      </article>
      <article class="card">
        <h3>Grid</h3>
        <p>Ideal para layouts em duas dimensões.</p>
      </article>
      <article class="card">
        <h3>Container</h3>
        <p>Consultas baseadas no próprio componente.</p>
      </article>
    </div>
css: |
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
    }
    
    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
    }
    
    .card h3 {
      margin: 0 0 0.35rem;
      color: #1e40af;
    }
    
    .card p {
      margin: 0;
      color: #475569;
      font-size: 0.95rem;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
