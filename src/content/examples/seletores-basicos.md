---
title: "Seletores básicos"
description: "Elemento, classe, ID e seletor combinado para estilizar com precisão."
tags: ["seletores","fundamentos"]
difficulty: iniciante
order: 1
html: |
    <h1>Título da página</h1>
    <p class="destaque">Parágrafo com classe.</p>
    <p id="unico">Parágrafo com ID.</p>
    <ul>
      <li>Item um</li>
      <li class="ativo">Item ativo</li>
    </ul>
css: |
    h1 {
      color: #1a5fb4;
      font-family: Georgia, serif;
    }
    
    .destaque {
      background: #fff3bf;
      padding: 0.5rem 0.75rem;
      border-left: 4px solid #f5a524;
    }
    
    #unico {
      font-weight: 700;
      color: #2b2b2b;
    }
    
    li.ativo {
      color: #1a7f37;
      list-style-type: "✓ ";
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
