---
title: "Position absolute e relative"
description: "Entenda o containing block: relative no pai, absolute no filho."
tags: ["position","layout","fundamentos"]
difficulty: iniciante
order: 13
html: |
    <div class="pai">
      <p>Pai com <code>position: relative</code></p>
      <span class="selo">Novo</span>
    </div>
css: |
    .pai {
      position: relative;
      padding: 1.5rem;
      min-height: 140px;
      background: #e0f2fe;
      border-radius: 12px;
      border: 2px dashed #0284c7;
    }
    
    .selo {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      background: #dc2626;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.35rem 0.6rem;
      border-radius: 999px;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);
    }
---

O elemento com `absolute` se posiciona em relação ao ancestral mais próximo com `position` diferente de `static` (aqui, o pai `relative`).
