---
title: "Botão com hover e transição"
description: "Microinteração com transition e estados :hover / :active."
tags: ["botao","hover","transicao"]
difficulty: iniciante
order: 11
html: |
    <button class="cta" type="button">Começar agora</button>
css: |
    .cta {
      appearance: none;
      border: 0;
      padding: 0.85rem 1.4rem;
      border-radius: 999px;
      background: linear-gradient(135deg, #3b9eff, #7c5cff);
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(59, 158, 255, 0.35);
      transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
    }
    
    .cta:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
    }
    
    .cta:active {
      transform: translateY(0);
      box-shadow: 0 4px 12px rgba(59, 158, 255, 0.3);
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
