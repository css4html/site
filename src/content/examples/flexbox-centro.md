---
title: "Centralizar com Flexbox"
description: "Alinhe horizontal e verticalmente com poucos utilitários de flex."
tags: ["flexbox","centralizar","layout"]
difficulty: iniciante
order: 3
html: |
    <div class="palco">
      <div class="card">Centralizado ✨</div>
    </div>
css: |
    .palco {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 220px;
      background: linear-gradient(135deg, #dbeafe, #ede9fe);
      border-radius: 12px;
    }
    
    .card {
      padding: 1rem 1.5rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0,0,0,.12);
      font-weight: 600;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
