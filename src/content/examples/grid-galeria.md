---
title: "Galeria com CSS Grid"
description: "Grade responsiva automática com repeat e minmax."
tags: ["grid","layout","responsivo"]
difficulty: iniciante
order: 4
html: |
    <div class="galeria">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
css: |
    .galeria {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
    }
    
    .item {
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      background: #3b9eff;
      color: #fff;
      font-weight: 700;
      border-radius: 10px;
    }
    
    .item:nth-child(even) {
      background: #7c5cff;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
