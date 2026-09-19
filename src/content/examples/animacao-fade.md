---
title: "Animação fade + slide"
description: "@keyframes simples para entrada suave de elementos."
tags: ["animacao","keyframes","motion"]
difficulty: intermediario
order: 6
html: |
    <div class="painel">
      <h2 class="entra">Olá, CSS!</h2>
      <p class="entra delay">Animações deixam a interface mais viva.</p>
    </div>
css: |
    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .painel {
      padding: 1.5rem;
      background: #0f172a;
      color: #e2e8f0;
      border-radius: 12px;
    }
    
    .entra {
      animation: fadeSlide 0.6s ease both;
    }
    
    .delay {
      animation-delay: 0.2s;
    }
---

Edite o HTML e o CSS no playground abaixo. A pré-visualização atualiza em tempo real.
