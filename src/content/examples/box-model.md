---
title: "Box model na prática"
description: "Content, padding, border e margin — o modelo de caixa do CSS."
tags: ["box-model","espacamento","fundamentos"]
difficulty: iniciante
order: 2
html: |
    <div class="caixa">
      <p>Conteúdo da caixa</p>
    </div>
    <p class="vizinho">Elemento vizinho</p>
css: |
    .caixa {
      box-sizing: border-box;
      width: 280px;
      padding: 24px;
      border: 6px solid #3b9eff;
      margin: 16px;
      background: #e8f3ff;
    }
    
    .caixa p {
      margin: 0;
      background: #fff;
      padding: 8px;
    }
    
    .vizinho {
      margin-left: 16px;
      color: #555;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
